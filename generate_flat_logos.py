from PIL import Image
import numpy as np

def generate_flat_logos(input_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img).astype(float)
    
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Calculate brightness
    max_c = np.max(data[:,:,:3], axis=2)
    
    # Smooth alpha transition (black background)
    lower = 15
    upper = 60
    alpha = np.clip((max_c - lower) / (upper - lower), 0, 1)
    
    mask = (alpha > 0) & (alpha < 1)
    for c in range(3):
        data[:,:,c][mask] = np.clip(data[:,:,c][mask] / alpha[mask], 0, 255)
        
    data[:,:,3] = alpha * 255
    
    # This is the white-text version (since the source has white text)
    img_white = Image.fromarray(np.uint8(data))
    
    # Crop transparent padding
    bbox_white = img_white.getbbox()
    if bbox_white:
        padding = 10
        min_x = max(0, bbox_white[0] - padding)
        min_y = max(0, bbox_white[1] - padding)
        max_x = min(img_white.width, bbox_white[2] + padding)
        max_y = min(img_white.height, bbox_white[3] + padding)
        img_white = img_white.crop((min_x, min_y, max_x, max_y))
    img_white.save("public/logo-white-text.png")
    
    # Now create the dark-text version
    # The text is white, so we want to change white pixels (r>200, g>200, b>200) to dark blue
    # But only in the bottom area to avoid affecting the logo icon if it has white (it doesn't, but just in case)
    height, width = data.shape[:2]
    
    # Text is located in the bottom half. The rainbow line is also at the bottom, but it's not white!
    is_white_pixel = (data[:,:,0] > 200) & (data[:,:,1] > 200) & (data[:,:,2] > 200)
    is_bottom_half = (np.arange(height) > height * 0.6)[:, None]
    
    text_mask = is_white_pixel & is_bottom_half
    
    # Dark blue: (10, 20, 60)
    data[text_mask, 0] = 10
    data[text_mask, 1] = 20
    data[text_mask, 2] = 60
    
    img_dark = Image.fromarray(np.uint8(data))
    
    bbox_dark = img_dark.getbbox()
    if bbox_dark:
        min_x = max(0, bbox_dark[0] - padding)
        min_y = max(0, bbox_dark[1] - padding)
        max_x = min(img_dark.width, bbox_dark[2] + padding)
        max_y = min(img_dark.height, bbox_dark[3] + padding)
        img_dark = img_dark.crop((min_x, min_y, max_x, max_y))
    img_dark.save("public/logo-transparent.png")
    
    print("Generated flat logos perfectly!")

generate_flat_logos("C:/Users/muhammed faris k/.gemini/antigravity-ide/brain/d8c1707e-2d9d-4406-a59d-5f5b1a3ce9b7/media__1782804955996.png")
