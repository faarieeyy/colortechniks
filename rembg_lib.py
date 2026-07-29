from rembg import remove
from PIL import Image

def remove_background(input_path, output_path):
    input_image = Image.open(input_path)
    # The image might not be in RGBA, rembg handles it well.
    output_image = remove(input_image)
    output_image.save(output_path)
    print("Background removed successfully using rembg library.")

remove_background("public/logo-high-res.png", "public/logo-transparent.png")
