from PIL import Image, ImageChops

def crop_black_borders(image_path, output_path, tol=15):
    img = Image.open(image_path).convert("RGB")
    # Find bounding box of non-black pixels
    # Since there might be some compression artifacts, we can't just use getbbox() on difference directly without tolerance
    # Let's iterate and find min/max x/y that are not close to black
    pixels = img.load()
    width, height = img.size
    
    min_x = width
    min_y = height
    max_x = 0
    max_y = 0
    
    for x in range(width):
        for y in range(height):
            r, g, b = pixels[x, y]
            if r > tol or g > tol or b > tol:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y

    if min_x <= max_x and min_y <= max_y:
        # Add 10px padding
        padding = 10
        min_x = max(0, min_x - padding)
        min_y = max(0, min_y - padding)
        max_x = min(width - 1, max_x + padding)
        max_y = min(height - 1, max_y + padding)
        
        cropped_img = img.crop((min_x, min_y, max_x + 1, max_y + 1))
        cropped_img.save(output_path)
        print(f"Cropped successfully. Original size: {img.size}, New size: {cropped_img.size}")
    else:
        print("Image is entirely black or below tolerance.")

crop_black_borders("public/preloader-logo.png", "public/preloader-logo.png")
