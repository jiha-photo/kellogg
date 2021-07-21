createMap();

function createMap() {
    // 37.5550411287637, 126.93596527732909
    var mapContainer = document.getElementById('map'); // 지도의 중심좌표
    var mapOption = {
            center: new kakao.maps.LatLng(37.01865814032983, 127.25346443992277), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도에 마커를 표시합니다 
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(37.01870039855845, 127.25334605880718)
    });


    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다 
    var content = '<div class="info">' +
        '<div class="top_info">' +
            '<h3>농심켈로그(주) 안성공장</h3>' + 
            '<button class="btn_close" type="button">정보창닫기</button>' + 
        '</div>' + 
        '<div class="mid_info">' +
            '<dl>' +
                '<dt>·주소</dt>' + 
                '<dd>17567 경기도 안성시 공단2로 29 (경기도 안성시 신소현동 142번지) </dd>' +
                '<dt>·전화번호</dt>' +
                '<dd>+82316735588</dd>' +
                '<dt>·대중교통</dt>' +
                '<dd>안성중대역 하차 후 택시로 10분소요</dd>' +
            '</dl>' +
        '</div>' +
    '</div>' ;

   
    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, 'click', function () {
        overlay.setMap(map);
    });

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
    function closeOverlay() {
        overlay.setMap(null);
    }

    // closeOverlay(); 내부 함수이므로 외부에서 인라인 이벤트로 호출불가하므로 내부에서 클릭이벤트를 바인딩하여 함수호출
    document.querySelector('.info .btn_close').addEventListener('click', function(){
        closeOverlay();
    });





}