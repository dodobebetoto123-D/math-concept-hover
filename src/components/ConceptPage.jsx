import { useState } from 'react';
import Figure from './Figure.jsx';
import InfoPanel from './InfoPanel.jsx';

export default function ConceptPage({ concept }) {
  // 커서를 떼도 마지막 정보 유지 — activeKey는 hover 때만 바뀐다 (스펙 1장 규칙 3)
  const [activeKey, setActiveKey] = useState(null);
  const activeInfo = activeKey ? concept.infos[activeKey].info : null;

  return (
    <>
      <h1>{concept.title}</h1>
      <p className="sub" dangerouslySetInnerHTML={{ __html: concept.guide }} />
      <div className="formula" dangerouslySetInnerHTML={{ __html: concept.formula }} />
      <div className="wrap">
        <div className="stage">
          <Figure concept={concept} activeKey={activeKey} onHover={setActiveKey} />
        </div>
        <InfoPanel info={activeInfo} />
      </div>
    </>
  );
}
