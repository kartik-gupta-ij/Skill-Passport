export default function CircleProgress({ value, max = 5, color = '#00E39C', size = 160 }) {
  const r = 45;
  const cx = 55,
    cy = 50;
  const pct = Math.min(Math.max(value / max, 0), 1);
  const angle = pct * 360;
  const rad = (angle - 90) * (Math.PI / 180);
  const ex = cx + r * Math.cos(rad);
  const ey = cy + r * Math.sin(rad);
  const large = angle > 180 ? 1 : 0;
  const d =
    pct === 0
      ? `M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy - r}`
      : `M ${cx} ${cy - r} A ${r} ${r} 0 ${large} 1 ${ex} ${ey}`;
  const arcLength = pct * 2 * Math.PI * r;

  return (
    <svg viewBox="0 0 110 100" width={size} height={size} style={{ maxWidth: '100%' }}>
      {pct > 0 && (
        <path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={8}
          strokeLinecap="round"
          strokeDasharray={arcLength}
          strokeDashoffset={arcLength}
          style={{ animation: 'circleProgressDraw 0.7s ease-out forwards' }}
        />
      )}
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dy="0.4em"
        style={{ fontSize: 22, fill: '#333', fontWeight: 600, fontFamily: 'inherit' }}
      >
        {value}
      </text>
    </svg>
  );
}
