from PIL import Image
import numpy as np

def split_logo():
    img = Image.open("public/logo-white-text.png")
    data = np.array(img)
    
    # The image is already transparent with white text.
    # Find the gap separating the icon from the text
    alpha = data[:,:,3]
    height, width = data.shape[:2]
    
    # Calculate row density of non-transparent pixels
    row_density = np.sum(alpha > 10, axis=1)
    
    gap_y = int(height * 0.75)
    in_content = False
    for y in range(height-1, 0, -1):
        if row_density[y] > 10:
            in_content = True
        elif in_content and row_density[y] == 0:
            gap_y = y
            break
            
    print(f"Gap found at {gap_y} out of {height}")
    
    # Crop the icon (top part)
    icon = img.crop((0, 0, width, gap_y))
    # Crop transparent padding for icon
    bbox = icon.getbbox()
    if bbox:
        icon = icon.crop(bbox)
    icon.save("public/preloader-icon.png")
    
    # Crop the text (bottom part)
    text = img.crop((0, gap_y, width, height))
    bbox = text.getbbox()
    if bbox:
        text = text.crop(bbox)
    text.save("public/preloader-text.png")
    print("Successfully split into preloader-icon.png and preloader-text.png")

split_logo()
