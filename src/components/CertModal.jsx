import { CERT_SIGNATURES } from '../constants';

export default function CertModal({ name, certId, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.55)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 16,
          width: 'min(750px,95vw)',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,.4)',
        }}
      >
        <div style={{ position: 'relative', padding: '40px 48px 32px', background: '#fff' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 120,
              bottom: 0,
              background: 'linear-gradient(180deg,#3baa6b,#5dd48a)',
              clipPath: 'polygon(0 0,80% 0,60% 50%,80% 100%,0 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 200,
              height: 180,
              background: 'linear-gradient(135deg,#c5caf0,#3b4ea0)',
              clipPath: 'polygon(40% 0,100% 0,100% 100%,60% 50%)',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3 }}>
                SINGAPORE
                <br />
                BIODESIGN
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800 }}>Lumi</div>
                <div style={{ fontSize: 10, color: '#666' }}>Igniting Futures</div>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 12px' }}>
                Certificate of Distinction
              </h2>
              <p style={{ fontSize: 15, color: '#555', marginBottom: 8 }}>
                This certificate is presented to
              </p>
              <p
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  borderBottom: '2px solid #333',
                  display: 'inline-block',
                  padding: '0 20px 4px',
                  marginBottom: 12,
                }}
              >
                {name}
              </p>
              <p style={{ fontSize: 14, color: '#444', marginBottom: 32 }}>
                for completing all requirements for Design Thinking Training
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {CERT_SIGNATURES.map(([nm, role]) => (
                  <div key={nm} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        height: 40,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        marginBottom: 6,
                      }}
                    >
                      <svg viewBox="0 0 120 40" width={120} height={40}>
                        <path
                          d="M10,30 Q40,5 60,20 Q80,35 110,10"
                          fill="none"
                          stroke="#333"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div style={{ borderTop: '1px solid #333', paddingTop: 6 }}>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{nm}</div>
                      <div style={{ fontSize: 11, color: '#666', whiteSpace: 'pre-line' }}>
                        {role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'right', marginTop: 20, fontSize: 11, color: '#aaa' }}>
                Certification ID: {certId}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: '#f5f5f5',
            padding: '14px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 15,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            ⬇ Download
          </button>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 15,
              color: '#444',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
