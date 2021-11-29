export function getLinearGradient(
  from: string,
  to: string,
  alpha?: number
): string {
  const [fromColor, toColor] = [from, to].map(color =>
    alpha ? `rgb(${color} / ${alpha})` : `rgb(${color})`
  )

  return `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`
}
