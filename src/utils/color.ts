export function isColor (hex: string, minHue: number, maxHue: number, minSaturation: number, minLightness: number): boolean {
  const [r, g, b] = hexToRgb(hex)
  const [h, s, l] = rgbToHsl(r, g, b)

  return h >= minHue && h <= maxHue && s >= minSaturation && l >= minLightness
}

export function isPink (hex: string): boolean {
  return isColor(hex, 280, 330, 0.5, 0.5)
}

export function hexToRgb (hex: string): number[] {
  return [
    hex.substring(1, 3),
    hex.substring(3, 5),
    hex.substring(5)
  ].map(s => parseInt(s, 16))
}

export function rgbToHsl (r: number, g: number, b: number): number[] {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b); const min = Math.min(r, g, b)

  let h = (max + min) / 2
  let s = (max + min) / 2
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  return [h * 360, s, l]
}
