from PIL import Image
import numpy as np

def generate_logos(input_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img).astype(float)
    
    # Calculate brightness
    min_c = np.min(data[:,:,:3], axis=2)
    max_c = np.max(data[:,:,:3], axis=2)
    height, width = data.shape[:2]
    
    # 1. First remove the white background using the same anti-aliased logic
    lower = 220
    upper = 250
    alpha = np.clip((upper - min_c) / (upper - lower), 0, 1)
    
    # Un-premultiply RGB channels
    mask = (alpha > 0) & (alpha < 1)
    for c in range(3):
        true_color = (data[:,:,c][mask] - 255 * (1 - alpha[mask])) / alpha[mask]
        data[:,:,c][mask] = np.clip(true_color, 0, 255)
        
    data[:,:,3] = alpha * 255
    
    # Create the transparent dark-text version
    img_dark = Image.fromarray(np.uint8(data))
    
    # Crop transparent padding
    bbox_dark = img_dark.getbbox()
    if bbox_dark:
        padding = 10
        min_x = max(0, bbox_dark[0] - padding)
        min_y = max(0, bbox_dark[1] - padding)
        max_x = min(img_dark.width, bbox_dark[2] + padding)
        max_y = min(img_dark.height, bbox_dark[3] + padding)
        img_dark = img_dark.crop((min_x, min_y, max_x, max_y))
    img_dark.save("public/logo-transparent.png")
    
    # 2. Now generate the white text version
    # Find the gap separating the logo icon from the text
    row_density = np.sum(min_c < 240, axis=1)
    gap_y = int(height * 0.75)
    in_content = False
    for y in range(height-1, 0, -1):
        if row_density[y] > 10:
            in_content = True
        elif in_content and row_density[y] == 0:
            gap_y = y
            break
            
    # Change dark text (max_c < 120) below the gap to white
    text_mask = (np.arange(height) > gap_y)[:, None] & (max_c < 120)
    data[text_mask, 0] = 255
    data[text_mask, 1] = 255
    data[text_mask, 2] = 255
    
    img_white = Image.fromarray(np.uint8(data))
    
    # Crop transparent padding for the white version
    bbox_white = img_white.getbbox()
    if bbox_white:
        min_x = max(0, bbox_white[0] - padding)
        min_y = max(0, bbox_white[1] - padding)
        max_x = min(img_white.width, bbox_white[2] + padding)
        max_y = min(img_white.height, bbox_white[3] + padding)
        img_white = img_white.crop((min_x, min_y, max_x, max_y))
    img_white.save("public/logo-white-text.png")
    
    print("Generated both logos!")

generate_logos("public/logo-high-res-new.jpg")
