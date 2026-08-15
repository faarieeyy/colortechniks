from PIL import Image
import numpy as np

def remove_black_bg(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    data = np.array(img)
    
    # Calculate grayscale value of each pixel
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    gray = 0.2989 * r + 0.5870 * g + 0.1140 * b
    
    # Create an alpha mask based on how far from black the pixel is
    # Black (0,0,0) will have alpha 0, fully bright pixels will have alpha 255
    # Since the logo is bright and colorful, this works reasonably well.
    # We can also just use a threshold, but anti-aliasing is better.
    
    # A simple threshold + smoothing might be better to avoid semi-transparent colors inside the logo
    # Let's use a threshold for the background.
    mask = (r < 20) & (g < 20) & (b < 20)
    data[mask, 3] = 0 # set alpha to 0 for black pixels
    
    # For anti-aliased edges, we can do a more sophisticated approach, 
    # but a simple threshold might be enough for a navbar logo.
    
    out_img = Image.fromarray(data)
    out_img.save(output_path)
    print("Done making transparent")

remove_black_bg("public/preloader-logo.png", "public/logo-transparent.png")
