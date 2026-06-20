interface Props {
  width: number
  height: number
  opacity?: number
}

export default function FootprintSVG({ width, height, opacity = 1 }: Props) {
  return (
    <svg viewBox="0 0 64 104" width={width} height={height} fill="#F0AE1E" opacity={opacity} aria-hidden="true">
      <ellipse cx="30" cy="76" rx="16" ry="22" />
      <ellipse cx="30" cy="46" rx="21" ry="22" />
      <ellipse cx="12" cy="22" rx="7" ry="9" />
      <ellipse cx="27" cy="12" rx="5.5" ry="7" />
      <ellipse cx="39" cy="12" rx="5" ry="6.5" />
      <ellipse cx="49" cy="17" rx="4.5" ry="6" />
      <ellipse cx="57" cy="24" rx="4" ry="5" />
    </svg>
  )
}
