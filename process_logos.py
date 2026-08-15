from PIL import Image
import numpy as np

def make_transparent_from_black(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img).astype(float)
    
    max_c = np.max(data[:,:,:3], axis=2)
    lower = 15
    upper = 60
    
    alpha = np.clip((max_c - lower) / (upper - lower), 0, 1)
    
    mask = (alpha > 0) & (alpha < 1)
    for c in range(3):
        data[:,:,c][mask] = np.clip(data[:,:,c][mask] / alpha[mask], 0, 255)
        
    data[:,:,3] = alpha * 255
    
    out_img = Image.fromarray(np.uint8(data))
    bbox = out_img.getbbox()
    if bbox:
        out_img = out_img.crop((bbox[0], bbox[1], bbox[2], bbox[3]))
        
    out_img.save(output_path)
    print(f"Generated {output_path} from black BG")

def make_transparent_from_white(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img).astype(float)
    
    min_c = np.min(data[:,:,:3], axis=2)
    
    upper_w = 250
    lower_w = 210
    
    alpha = np.clip((upper_w - min_c) / (upper_w - lower_w), 0, 1)
    
    mask = (alpha > 0) & (alpha < 1)
    for c in range(3):
        data[:,:,c][mask] = np.clip((data[:,:,c][mask] - 255.0 * (1.0 - alpha[mask])) / alpha[mask], 0, 255)
        
    data[:,:,3] = alpha * 255
    
    out_img = Image.fromarray(np.uint8(data))
    bbox = out_img.getbbox()
    if bbox:
        out_img = out_img.crop((bbox[0], bbox[1], bbox[2], bbox[3]))
        
    out_img.save(output_path)
    print(f"Generated {output_path} from white BG")

make_transparent_from_black("public/new-dark-bg-logo.png", "public/logo-white-text.png")
make_transparent_from_white("public/new-light-bg-logo.png", "public/logo-transparent.png")
