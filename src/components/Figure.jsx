import { COLORS } from '../data/concepts06.js';

// 스펙 4장 레이어 순서: zone → halo → 본선 → 표시/각 → 꼭짓점/라벨 → 히트
export default function Figure({ concept, activeKey, onHover }) {
  const active = activeKey ? concept.infos[activeKey] : null;
  const hl = active ? active.highlights : {};

  const haloColor = {};
  (hl.halos || []).forEach(([id, colorName]) => { haloColor[id] = COLORS[colorName]; });
  const mainColor = {};
  (hl.mains || []).forEach(([id, colorName]) => { mainColor[id] = COLORS[colorName]; });
  const arcOn = new Set(hl.arcs || []);
  const markOn = new Set(hl.marks || []);
  const zoneOn = new Set(hl.zones || []);

  const pt = name => concept.points[name];
  const segCoords = seg => {
    const [x1, y1] = pt(seg.from);
    const [x2, y2] = pt(seg.to);
    return { x1, y1, x2, y2 };
  };

  return (
    <svg viewBox={concept.viewBox}>
      {/* 1. 도형 면 zone */}
      {concept.zones.map(z => (
        <polygon
          key={z.id}
          className={`zone hoverable ${zoneOn.has(z.id) ? z.onClass : ''}`}
          points={z.points.map(p => pt(p).join(',')).join(' ')}
          onMouseEnter={() => onHover(z.id)}
          onClick={() => onHover(z.id)}
        />
      ))}

      {/* 2. 후광 */}
      {concept.segments.map(seg => (
        <line
          key={`halo-${seg.id}`}
          className="halo"
          {...segCoords(seg)}
          style={haloColor[seg.id] ? { stroke: haloColor[seg.id], opacity: 0.55 } : undefined}
        />
      ))}

      {/* 3. 본선 */}
      {concept.segments.filter(s => s.main).map(seg => (
        <line
          key={`main-${seg.id}`}
          className="main"
          {...segCoords(seg)}
          style={mainColor[seg.id] ? { stroke: mainColor[seg.id] } : undefined}
        />
      ))}

      {/* 4. 평행 표시 / 각 호 */}
      {concept.marks.map(m => (
        <polygon key={m.id} className="pmark" points={m.points}
          style={markOn.has(m.id) ? { opacity: 1 } : undefined} />
      ))}
      {concept.arcs.map(a => (
        <path key={a.id} className="arc" d={a.d}
          style={arcOn.has(a.id) ? { stroke: COLORS.GOLD } : undefined} />
      ))}

      {/* 5. 꼭짓점 + 라벨 */}
      <g>
        {Object.values(concept.points).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#fff" />
        ))}
        {concept.labels.map((l, i) => (
          <text key={i} className={l.kind} x={l.x} y={l.y}>{l.text}</text>
        ))}
      </g>

      {/* 6. 히트 레이어 (맨 위) */}
      {concept.hits.map((h, i) => {
        if (h.type === 'segment') {
          const seg = concept.segments.find(s => s.id === h.seg);
          return (
            <line key={i} className="hit hoverable" {...segCoords(seg)}
              onMouseEnter={() => onHover(h.key)} onClick={() => onHover(h.key)} />
          );
        }
        return (
          <circle key={i} className="arc-hit hoverable" cx={h.cx} cy={h.cy} r={h.r}
            onMouseEnter={() => onHover(h.key)} onClick={() => onHover(h.key)} />
        );
      })}
    </svg>
  );
}
