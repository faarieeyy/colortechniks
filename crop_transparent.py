from PIL import Image

def crop_transparent_padding(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    # getbbox() finds the bounding box of non-zero alpha pixels for RGBA
    bbox = img.getbbox()
    if bbox:
        # crop with a small 5px padding
        padding = 5
        min_x = max(0, bbox[0] - padding)
        min_y = max(0, bbox[1] - padding)
        max_x = min(img.width, bbox[2] + padding)
        max_y = min(img.height, bbox[3] + padding)
        
        cropped_img = img.crop((min_x, min_y, max_x, max_y))
        cropped_img.save(output_path)
        print(f"Cropped transparent padding: {img.size} -> {cropped_img.size}")
    else:
        print("Image is entirely transparent or bounding box not found")

crop_transparent_padding("public/logo-transparent.png", "public/logo-transparent.png")
