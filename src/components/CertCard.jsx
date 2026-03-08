export default function CertCard({ name, certId, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 200,
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 6px 14px rgba(23,26,31,.22)',
        cursor: 'pointer',
        background: '#fff',
      }}
    >
      <div
        style={{
          background:
            'linear-gradient(135deg,#3baa6b 0%,#3baa6b 30%,#e8ebf8 30%,#e8ebf8 70%,#3b4ea0 70%)',
          height: 110,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '8px 10px',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 4 }}>
          <span style={{ fontSize: 7, fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
            SINGAPORE
            <br />
            BIODESIGN
          </span>
          <span style={{ fontSize: 11, fontWeight: 800, color: '#fff' }}>Lumi</span>
        </div>
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            color: '#111',
            background: 'rgba(255,255,255,.85)',
            borderRadius: 3,
            padding: '2px 4px',
          }}
        >
          Certificate of Distinction
        </div>
      </div>
      <div style={{ padding: '8px 10px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#252525' }}>{name}</div>
        <div style={{ fontSize: 10, color: '#888' }}>Certification ID: {certId}</div>
      </div>
    </div>
  );
}
