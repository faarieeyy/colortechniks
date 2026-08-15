from PIL import Image
import numpy as np

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img).astype(float)
    
    # Calculate brightness
    min_c = np.min(data[:,:,:3], axis=2)
    
    # Smooth alpha transition
    # Lower bound (fully bright/white background) -> alpha=0
    # Upper bound (darker/colored logo) -> alpha=1
    lower = 220
    upper = 250
    
    # Alpha goes from 1 at lower to 0 at upper.
    alpha = np.clip((upper - min_c) / (upper - lower), 0, 1)
    
    # Un-premultiply RGB channels to remove white halos
    mask = (alpha > 0) & (alpha < 1)
    
    for c in range(3):
        true_color = (data[:,:,c][mask] - 255 * (1 - alpha[mask])) / alpha[mask]
        data[:,:,c][mask] = np.clip(true_color, 0, 255)
        
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
    print("Done generating sharp transparent logo from white background!")

remove_white_bg("public/logo-high-res-new.jpg", "public/logo-transparent.png")
