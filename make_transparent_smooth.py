from PIL import Image
import numpy as np

def make_transparent_smooth(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img).astype(float)
    
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Max color channel value
    max_c = np.max(data[:,:,:3], axis=2)
    
    # Smooth alpha transition
    # Lower bound (fully black) and upper bound (fully bright)
    lower = 15
    upper = 60
    
    alpha = np.clip((max_c - lower) / (upper - lower), 0, 1)
    
    # To prevent dark halos, un-premultiply the RGB channels by the alpha
    # Where alpha > 0 and < 1
    mask = (alpha > 0) & (alpha < 1)
    for c in range(3):
        data[:,:,c][mask] = np.clip(data[:,:,c][mask] / alpha[mask], 0, 255)
        
    data[:,:,3] = alpha * 255
    
    out_img = Image.fromarray(np.uint8(data))
    
    # Now crop the transparent padding
    bbox = out_img.getbbox()
    if bbox:
        padding = 10
        min_x = max(0, bbox[0] - padding)
        min_y = max(0, bbox[1] - padding)
        max_x = min(out_img.width, bbox[2] + padding)
        max_y = min(out_img.height, bbox[3] + padding)
        out_img = out_img.crop((min_x, min_y, max_x, max_y))
        
    out_img.save(output_path)
    print("Done generating sharp transparent logo!")

make_transparent_smooth("C:/Users/muhammed faris k/.gemini/antigravity-ide/brain/d8c1707e-2d9d-4406-a59d-5f5b1a3ce9b7/media__1782800574487.png", "public/logo-transparent.png")
