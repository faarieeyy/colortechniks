import os
import glob
from PIL import Image

public_dir = "public"
src_dir = "src"

images = []
for ext in ('*.png', '*.jpg', '*.jpeg'):
    images.extend(glob.glob(os.path.join(public_dir, '**', ext), recursive=True))

for img_path in images:
    try:
        img = Image.open(img_path)
        webp_path = os.path.splitext(img_path)[0] + ".webp"
        
        if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
            img.save(webp_path, "webp")
        else:
            img.convert("RGB").save(webp_path, "webp")
            
        img.close()
        os.remove(img_path)
        print(f"Converted and removed: {img_path}")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original = content
        for img_path in images:
            base_name = os.path.basename(img_path)
            name, ext = os.path.splitext(base_name)
            
            # Replaces exact occurrences of filename.ext with filename.webp
            content = content.replace(base_name, f"{name}.webp")
            
        if original != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated references in: {filepath}")
    except Exception as e:
        pass

for ext in ('*.tsx', '*.ts', '*.js', '*.jsx', '*.css'):
    for filepath in glob.glob(os.path.join(src_dir, '**', ext), recursive=True):
        replace_in_file(filepath)

# Also check tailwind config
if os.path.exists('tailwind.config.ts'):
    replace_in_file('tailwind.config.ts')
