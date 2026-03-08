export default function InnovationCard({ title, date, subtitle, program, imgSrc, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 6px 14px rgba(23,26,31,.18)',
        display: 'flex',
        gap: 0,
        overflow: 'hidden',
        cursor: 'pointer',
        maxWidth: 520,
        transition: 'transform .15s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
    >
      <div style={{ padding: '20px 24px', flex: 1 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#252525', marginBottom: 6 }}>
          {title}
        </div>
        <div style={{ fontSize: 13, color: '#888', marginBottom: 4 }}>{date}</div>
        <div style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>{subtitle}</div>
        <div style={{ fontSize: 14, color: '#7878f4', fontWeight: 600 }}>{program}</div>
      </div>
      {imgSrc && (
        <div style={{ width: 175, minHeight: 140, overflow: 'hidden', flexShrink: 0 }}>
          <img src={imgSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
    </div>
  );
}
