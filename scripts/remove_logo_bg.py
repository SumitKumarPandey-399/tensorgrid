"""Remove near-uniform background from logo PNG (corner sample + distance threshold).

Handles light grey/white backgrounds and solid black (#000) backgrounds.
"""
from __future__ import annotations

import sys
from pathlib import Path

try:
    from PIL import Image
    import numpy as np
except ImportError as e:
    print("Need pillow and numpy:", e, file=sys.stderr)
    sys.exit(1)


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    src = root / "public" / "brand" / "tensorgrids-mark-raw.png"
    out = root / "public" / "brand" / "tensorgrids-mark.png"
    if not src.exists():
        print(f"Missing {src}", file=sys.stderr)
        sys.exit(1)

    img = Image.open(src).convert("RGBA")
    arr = np.array(img, dtype=np.uint8, copy=True)
    h, w, _ = arr.shape

    corners = np.stack(
        [
            arr[0, 0, :3],
            arr[0, w - 1, :3],
            arr[h - 1, 0, :3],
            arr[h - 1, w - 1, :3],
        ],
        axis=0,
    )
    bg = np.median(corners, axis=0).astype(np.float32)

    rgb = arr[:, :, :3].astype(np.float32)
    dist = np.linalg.norm(rgb - bg, axis=2)

    lum = (0.299 * arr[:, :, 0] + 0.587 * arr[:, :, 1] + 0.114 * arr[:, :, 2]) / 255.0
    bg_lum = float(
        (0.299 * bg[0] + 0.587 * bg[1] + 0.114 * bg[2]) / 255.0
    )

    # Dark / black matte background (e.g. Gemini exports)
    if bg_lum < 0.12:
        mask = (dist < 52.0) | ((lum < 0.14) & (dist < 72.0))
    else:
        # Light grey / white background
        mask = (dist < 42.0) | ((lum > 0.88) & (dist < 55.0))

    arr[:, :, 3] = np.where(mask, 0, arr[:, :, 3])

    out_img = Image.fromarray(arr, "RGBA")
    out_img.save(out, optimize=True, compress_level=9)
    print(f"Wrote {out} ({w}x{h}), bg_lum={bg_lum:.3f}")


if __name__ == "__main__":
    main()
