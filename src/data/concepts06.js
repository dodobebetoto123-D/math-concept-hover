// 06-1 삼각형에서 평행선 사이의 선분의 길이의 비
// 기준본 test-concept-hover.html v2의 좌표/문장을 그대로 옮긴 데이터

export const COLORS = {
  GOLD: '#ffc93c',
  BLUE: '#40b4ff',
  GREEN: '#39d98a',
  ORANGE: '#ffb02e',
};

export const concept06_1 = {
  id: '06-1',
  title: '06-1 삼각형에서 평행선 사이의 선분의 길이의 비',
  guide: '조작하는 게 아니야. 그림에 커서를 올려보는 거야.<br>선 → 대응변·평행 / 도형 → 닮음·합동 / 각 → 대응각',
  formula: 'BC <b>∥</b> DE 이면 &nbsp; AB : AD = AC : AE = BC : DE = <b>2 : 1</b>',
  viewBox: '0 0 560 370',
  points: {
    A: [280, 35], B: [100, 325], C: [460, 325], D: [190, 180], E: [370, 180],
  },
  // 모든 선분은 halo를 가진다. main:true 인 것만 본선이 그려진다.
  segments: [
    { id: 'ab', from: 'A', to: 'B', main: true },
    { id: 'ac', from: 'A', to: 'C', main: true },
    { id: 'ad', from: 'A', to: 'D' },
    { id: 'ae', from: 'A', to: 'E' },
    { id: 'db', from: 'D', to: 'B' },
    { id: 'ec', from: 'E', to: 'C' },
    { id: 'de', from: 'D', to: 'E', main: true },
    { id: 'bc', from: 'B', to: 'C', main: true },
  ],
  zones: [
    { id: 'trap', points: ['D', 'B', 'C', 'E'], onClass: 'trap-on' },
    { id: 'small', points: ['A', 'D', 'E'], onClass: 'small-on' },
  ],
  marks: [
    { id: 'pm-de', points: '280,173 292,180 280,187' },
    { id: 'pm-bc', points: '280,318 292,325 280,332' },
  ],
  arcs: [
    { id: 'b', d: 'M 122,289 A 42 42 0 0 1 142,325' },
    { id: 'd', d: 'M 206,154 A 30 30 0 0 1 220,180' },
    { id: 'c', d: 'M 418,325 A 42 42 0 0 1 438,289' },
    { id: 'e', d: 'M 340,180 A 30 30 0 0 1 354,154' },
    { id: 'a', d: 'M 262,66 A 34 34 0 0 0 298,66' },
  ],
  labels: [
    { x: 272, y: 24, text: 'A', kind: 'vlabel' },
    { x: 82, y: 348, text: 'B', kind: 'vlabel' },
    { x: 462, y: 348, text: 'C', kind: 'vlabel' },
    { x: 162, y: 176, text: 'D', kind: 'vlabel' },
    { x: 378, y: 176, text: 'E', kind: 'vlabel' },
    { x: 253, y: 172, text: 'DE = 4', kind: 'slabel' },
    { x: 253, y: 348, text: 'BC = 8', kind: 'slabel' },
    { x: 196, y: 112, text: 'AD = 5', kind: 'slabel' },
    { x: 330, y: 112, text: 'AE = 5', kind: 'slabel' },
  ],
  hits: [
    { type: 'segment', seg: 'ab', key: 'ab' },
    { type: 'segment', seg: 'ac', key: 'ac' },
    { type: 'segment', seg: 'de', key: 'de' },
    { type: 'segment', seg: 'bc', key: 'de' },
    { type: 'circle', cx: 128, cy: 312, r: 20, key: 'angB' },
    { type: 'circle', cx: 432, cy: 312, r: 20, key: 'angC' },
    { type: 'circle', cx: 280, cy: 62, r: 18, key: 'angA' },
  ],
  infos: {
    de: {
      highlights: {
        halos: [['de', 'GREEN'], ['bc', 'GREEN']],
        mains: [['de', 'GREEN'], ['bc', 'GREEN']],
        marks: ['pm-de', 'pm-bc'],
      },
      info: {
        tag: '선분 DE · BC',
        title: 'DE와 BC — <span class="green">평행</span> + 대응변',
        desc: '<b>DE ∥ BC</b> — 가운데 화살표 표시가 같은 두 선은 평행이야.<br>그리고 DE는 작은 삼각형 △ADE의 밑변, BC는 큰 삼각형 △ABC의 밑변이라 <b>서로 대응변</b>이야.<br>길이 비는 <b>DE : BC = 4 : 8 = 1 : 2</b>',
      },
    },
    ab: {
      highlights: {
        halos: [['ab', 'GOLD'], ['ad', 'BLUE']],
        mains: [['ab', 'GOLD']],
      },
      info: {
        tag: '선분 AB',
        title: 'AB — 전체 변, 대응은 AD',
        desc: '큰 삼각형 △ABC의 변이야. 작은 삼각형에서 <b>대응변은 AD</b> (파란 후광 부분).<br><b>AD : AB = 5 : 10 = 1 : 2</b> — DE가 BC의 절반인 것과 같은 비야.<br>남은 아랫부분이 DB이고, AD : DB = 1 : 1 이야.',
      },
    },
    ac: {
      highlights: {
        halos: [['ac', 'GOLD'], ['ae', 'BLUE']],
        mains: [['ac', 'GOLD']],
      },
      info: {
        tag: '선분 AC',
        title: 'AC — 전체 변, 대응은 AE',
        desc: '큰 삼각형 △ABC의 변이야. 작은 삼각형에서 <b>대응변은 AE</b> (파란 후광 부분).<br><b>AE : AC = 5 : 10 = 1 : 2</b> — AB 쪽과 똑같은 비가 나와.<br>세 변 모두 비가 1:2로 같으니까 두 삼각형은 닮음이야.',
      },
    },
    angB: {
      highlights: {
        arcs: ['b', 'd'],
        halos: [['de', 'GREEN'], ['bc', 'GREEN']],
        marks: ['pm-de', 'pm-bc'],
      },
      info: {
        tag: '각 ∠B · ∠ADE',
        title: '∠ADE = ∠B — <span class="gold">대응각 (동위각)</span>',
        desc: 'DE와 BC가 <b>평행</b>이라서 같은 방향에 있는 각(동위각)이 같아져.<br>∠B에 올리면 대응하는 ∠ADE도 같이 빛나 — 둘 다 <b>약 58°</b>로 같아.<br>이게 △ADE ∽ △ABC인 이유 중 하나야 (AA 닮음).',
      },
    },
    angC: {
      highlights: {
        arcs: ['c', 'e'],
        halos: [['de', 'GREEN'], ['bc', 'GREEN']],
        marks: ['pm-de', 'pm-bc'],
      },
      info: {
        tag: '각 ∠C · ∠AED',
        title: '∠AED = ∠C — <span class="gold">대응각 (동위각)</span>',
        desc: '오른쪽도 마찬가지야. DE ∥ BC라 <b>∠AED = ∠C</b>, 둘 다 약 58°.<br>왼쪽 각 쌍까지 두 쌍의 각이 같으니까 <b>AA 닮음</b>이 성립해.',
      },
    },
    angA: {
      highlights: { arcs: ['a'] },
      info: {
        tag: '각 ∠A',
        title: '∠A — 두 삼각형의 <span class="gold">공통각</span>',
        desc: '꼭짓점 A는 작은 삼각형과 큰 삼각형이 <b>같이 쓰는 각</b>이야.<br>공통각 1쌍 + 동위각 1쌍 = 두 쌍이 같으니까 AA 닮음 완성.',
      },
    },
    small: {
      highlights: { zones: ['small'], halos: [['de', 'BLUE']] },
      info: {
        tag: '도형 △ADE',
        title: '△ADE <span class="blue">∽</span> △ABC — 닮음 (합동 아님)',
        desc: '위에 있는 작은 삼각형이야. 큰 삼각형 △ABC와 <b>닮음</b>이야.<br>닮음비는 <b>1 : 2</b> (모든 변이 절반). 크기가 다르니까 <b>합동은 아니야</b>.<br>합동이 되려면 닮음비가 1 : 1 이어야 해.',
      },
    },
    trap: {
      highlights: {
        zones: ['trap'],
        halos: [['de', 'GREEN'], ['bc', 'GREEN']],
        marks: ['pm-de', 'pm-bc'],
      },
      info: {
        tag: '도형 DBCE',
        title: '사다리꼴 DBCE — 윗변과 아랫변이 평행',
        desc: '아래쪽 사각형은 <b>사다리꼴</b>이야. 한 쌍의 대변 <b>DE ∥ BC</b> 라서 그래.<br>큰 삼각형 △ABC에서 작은 삼각형 △ADE를 빼면 이 사다리꼴이 남아.<br>옆변 DB와 EC는 평행이 아니야 — 그래서 사다리꼴이지 평행사변형은 아니야.',
      },
    },
  },
};
