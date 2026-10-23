# 수학 개념 hover 탐색 사이트

중2 수학 개념을 그림에 커서를 올려보며 배우는 사이트. 조작(슬라이더)이 아니라 **표시/탐색**이다.
선에 올리면 대응변·평행, 도형에 올리면 닮음·합동, 각에 올리면 대응각을 알려준다.

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 빌드 (dist/)
```

## 상태

- 1단계 (현재): 프로젝트 뼈대 + **06-1 삼각형에서 평행선 사이의 선분의 길이의 비** 구현 완료
- 2단계 예정: 06 나머지 → 07 무게중심 → 08 닮음의 활용 → 09 피타고라스 → 10 경우의 수 → 11 확률

## 설계 기준

- 디자인/상호작용 기준본: `docs/test-concept-hover.html` v2
- 스펙 문서: `docs/OPENCODE_SPEC.md`, 개념 전수 목록: `docs/CONCEPTS.md`

## 구조

```
src/
  App.jsx            단원 네비게이션
  components/
    ConceptPage.jsx  제목/공식/무대+패널, activeInfo 상태
    Figure.jsx       개념 데이터로 SVG 6개 레이어를 그리는 공용 렌더러
    InfoPanel.jsx    정보 패널
  data/
    concepts06.js    장별 개념 데이터 (좌표, hover 관계, 설명 문장)
```
