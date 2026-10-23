import { useState } from 'react';
import ConceptPage from './components/ConceptPage.jsx';
import { concept06_1 } from './data/concepts06.js';

// 1단계: 뼈대 + 06-1만 구현. 나머지는 CONCEPTS.md 순서대로 2단계에서 확장.
const READY = [concept06_1];
const CHAPTERS = [
  { label: '06 평행선 사이의 비', ready: true },
  { label: '07 무게중심', ready: false },
  { label: '08 닮음의 활용', ready: false },
  { label: '09 피타고라스', ready: false },
  { label: '10 경우의 수', ready: false },
  { label: '11 확률', ready: false },
];

export default function App() {
  const [current, setCurrent] = useState(READY[0]);
  return (
    <>
      <nav className="nav">
        {CHAPTERS.map(ch => (
          <button
            key={ch.label}
            disabled={!ch.ready}
            className={ch.ready && current === READY[0] ? 'active' : ''}
            onClick={() => ch.ready && setCurrent(READY[0])}
          >
            {ch.label}{ch.ready ? '' : ' (준비 중)'}
          </button>
        ))}
      </nav>
      <ConceptPage concept={current} />
    </>
  );
}
