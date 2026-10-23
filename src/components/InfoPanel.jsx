export default function InfoPanel({ info }) {
  const current = info || {
    tag: '안내',
    title: '어디든 커서를 올려봐',
    desc: '선분, 삼각형 안쪽, 사다리꼴 안쪽, 각 표시 — 올려보는 순간 오른쪽에<br><b>뭐랑 대응하는지, 뭐랑 평행한지, 어떤 도형이랑 닮았는지</b>가 떠.',
  };
  return (
    <div className="panel">
      <span className="tag">{current.tag}</span>
      <h2 dangerouslySetInnerHTML={{ __html: current.title }} />
      <p dangerouslySetInnerHTML={{ __html: current.desc }} />
      <p className="hint">
        모바일이면 탭해도 같은 정보가 떠.<br />
        커서를 떼면 마지막으로 본 정보가 남아 있어.
      </p>
    </div>
  );
}
