import CircleProgress from './CircleProgress';

export default function SkillCard({ label, value, color, onClick }) {
  return (
    <div
      className="skill-card"
      onClick={onClick}
      style={{
        background: '#fff',
        overflow: 'visible',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
        borderRadius: 8,
        padding: 12,
        opacity: 1,
        cursor: 'pointer',
        alignSelf: 'flex-start',
        minWidth: 350,
        order: 1,
        minHeight: 280,
        maxHeight: 400,
        width: 350,
        flexGrow: 1,
        height: 'max-content',
        marginLeft: 24,
        marginTop: 12,
        marginRight: 24,
        marginBottom: 50,
        zIndex: 6,
        boxShadow: '0 20px 30px rgba(23,26,31,.18)',
        transition: 'transform .15s',
        position: 'relative',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
    >
      <span style={{ color: '#aaa', fontSize: 14, position: 'absolute', bottom: 12, right: 12 }}>/5</span>
      <span style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#11102f' }}>{label}</span>
      <CircleProgress value={value} color={color} />
    </div>
  );
}
