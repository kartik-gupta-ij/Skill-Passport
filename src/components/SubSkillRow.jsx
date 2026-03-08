export default function SubSkillRow({ name, score }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 8px 8px rgba(23,26,31,.18)',
        padding: '18px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <span style={{ fontSize: 15, color: '#252525' }}>{name}</span>
      <span style={{ fontSize: 15, color: '#252525', fontWeight: 600 }}>{score}</span>
    </div>
  );
}
