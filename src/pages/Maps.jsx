import { useState } from 'react';
import { useEffect } from 'react';
const { kakao } = window;

function Kakao({ item }) {
  let [x, setX] = useState(null);
  let [y, setY] = useState(null);
  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(x, y), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(item.addr, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        setX(result[0].y);
        setY(result[0].x);
      } else {
        console.log('err');
      }
    });
    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(x, y);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, [x, y]);
  return (
    <>
      <div id="map"></div>
    </>
  );
}
export default Kakao;
