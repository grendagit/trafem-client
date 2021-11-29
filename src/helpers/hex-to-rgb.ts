export function hexToRgb(hex: string): number[] | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(
    shorthandRegex,
    (_, r: string, g: string, b: string) => r + r + g + g + b + b
  )

  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return rgb
    ? [parseInt(rgb[1], 16), parseInt(rgb[2], 16), parseInt(rgb[3], 16)]
    : null
}
