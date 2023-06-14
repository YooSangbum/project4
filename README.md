<img src="https://raw.githubusercontent.com/YooSangbum/project4/master/public/image/logo.png" width=200px>

## 공공 API를 활용한 React 웹사이트(MAPsMART)

---

> ### PC 반응형
>
> <img src=https://raw.githubusercontent.com/YooSangbum/project4/master/public/readmeimg/mockup.jpg width=300 >
> 프로젝트4_Map'SMart<a href="https://yoosangbum.github.io/project4/"> ACTIVE 클릭!!</a>

---

### 미리보기

> <img src="https://github.com/YooSangbum/project4/blob/master/public/readmeimg/mapsmart.gif?raw=true" width='550px' alt='demo' >

---

### 프로젝트 기간

> 2023.04.10일 ~ 2023.04.28일

---

### 프로젝트 목적 및 내용 요약

> 공공 API를 활용하여 React 웹사이트를 만드는 것으로, 대전의 관광지, 음식점, 숙박시설, 쇼핑센터 등의 정보를 알 수 있다. 카카오맵 API를 활용하여 가져온 데이터의 정보로 지도에 마커로 표시하고, 사용자가 필터링하여 원하는 정보를 얻을 수 있도록 제공한다. </br>
> 이 프로젝트를 통해서 React와 공공 API에 대한 이해도를 높이는 것이 목표이다.

---

### 프로젝트 내 역할

> 기획, 프론트앤드(디자인은 팀원이 담당함)

---

### 프로젝트 내 사용 툴

> <img src="https://img.shields.io/badge/피그마-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>
> <img src="https://img.shields.io/badge/피그잼-purple?style=flat-square&logo=Figma&logoColor=white"/> 
> <img src="https://img.shields.io/badge/AdobePhotoshop-31A8FF?style=flat-square&logo=Adobe Photoshop&logoColor=white"/> 
> <img src="https://img.shields.io/badge/Adobelllustrator-FF9A00?style=flat-square&logo=Adobe Illustrator&logoColor=white"/> 
> <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>

---

### 프로젝트 내 사용언어

> <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> 
> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> 
> <img src="https://img.shields.io/badge/JS-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/>
> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/>

---

### 프로젝트 구현 기능

1. 공공 API 불러오기( KAKAO MAP, 대전시 문화시설 데이터)
2. 지역, 카테고리 분류, 원하는 정보 필터링을 이용한 구분
3. 부트스트랩을 이용해 디테일한 정보 제공하기

---

### 프로젝트 개발 이슈

1. 데이터 세분화

- 총 네개의 각자 다른 api를 불러와서 하나의 데이터로 합쳤을 때, 각각의 객체 속성 값이 달라 데이터 활용에 어려움이 있었음

2. useState 빈 배열 문제

- useState를 비동기가 아닌 동기적으로 사용하기 위해선 useEffect를 사용하는 방벙으로 해결

---
