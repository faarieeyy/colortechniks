from PIL import Image
import numpy as np

def make_text_white(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img).astype(float)
    
    # Calculate brightness
    min_c = np.min(data[:,:,:3], axis=2)
    max_c = np.max(data[:,:,:3], axis=2)
    
    # We want to change the dark text to white.
    # The text is located at the bottom of the image.
    # The image is 1024x1024 (or whatever the high-res size is).
    height, width = data.shape[:2]
    
    # First, let's find the text. The text is very dark (max_c < 100)
    # The colorful logo has high max_c (> 150).
    # We can just check the y-coordinates of all dark pixels.
    # The text is the lowest block of dark pixels.
    # But wait, there's a rainbow line below the text!
    # The text is above the rainbow line.
    
    # Instead of guessing, let's just make all pixels with max_c < 100 
    # and y > height * 0.6 (bottom 40% of the image) turn into white.
    # Wait, the dark shading of the logo is also dark blue. Let's check its y coordinate.
    # The logo occupies roughly the top 75% of the content.
    
    # Let's apply a threshold: if a pixel is dark (max_c < 60) AND it's in the lower half of the image,
    # make it white.
    # But wait, the text in the new logo is dark blue. Let's see how dark it is.
    # I'll just find the gap between the logo and the text.
    
    # Calculate row-wise density of non-white pixels
    row_density = np.sum(min_c < 240, axis=1)
    
    # Find the gap (row_density == 0) between logo and text
    # Start from the bottom and move up
    gap_y = int(height * 0.75) # safe default
    in_content = False
    for y in range(height-1, 0, -1):
        if row_density[y] > 10:
            in_content = True
        elif in_content and row_density[y] == 0:
            # We found a gap!
            # Let's see if this gap separates the text from the logo.
            gap_y = y
            break
            
    print(f"Detected gap at y={gap_y} out of {height}")
    
    # Now, for all pixels below the gap_y, if they are dark, make them white!
    # Actually, the user wants the text to be white. The text is currently dark blue.
    # Dark blue: low R, low G, medium B.
    # We can just say: below the gap, any pixel that is dark (max_c < 150) becomes white.
    # Wait, there's a rainbow line below the text! The rainbow line has bright colors.
    # So if we only change pixels with max_c < 150 (dark pixels), the rainbow line will be preserved!
    
    mask = (np.arange(height) > gap_y)[:, None] & (max_c < 120)
    
    data[mask, 0] = 255
    data[mask, 1] = 255
    data[mask, 2] = 255
    
    # Now re-apply the transparent background logic
    # Calculate brightness again after changing text to white
    min_c = np.min(data[:,:,:3], axis=2)
    
    lower = 220
    upper = 250
    alpha = np.clip((upper - min_c) / (upper - lower), 0, 1)
    
    mask2 = (alpha > 0) & (alpha < 1)
    for c in range(3):
        true_color = (data[:,:,c][mask2] - 255 * (1 - alpha[mask2])) / alpha[mask2]
        data[:,:,c][mask2] = np.clip(true_color, 0, 255)
        
    data[:,:,3] = alpha * 255
    
    out_img = Image.fromarray(np.uint8(data))
    
    # Crop transparent padding
    bbox = out_img.getbbox()
    if bbox:
        padding = 10
        min_x = max(0, bbox[0] - padding)
        min_y = max(0, bbox[1] - padding)
        max_x = min(out_img.width, bbox[2] + padding)
        max_y = min(out_img.height, bbox[3] + padding)
        out_img = out_img.crop((min_x, min_y, max_x, max_y))
        
    out_img.save(output_path)
    print("Done generating transparent logo with WHITE text!")

make_text_white("public/logo-high-res-new.jpg", "public/logo-transparent.png")
