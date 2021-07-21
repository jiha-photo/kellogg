(function () {

    var sc = $(window).scrollTop();

    // depth1에 mouseeter시 on처리 / depth2열려야함
    $('.gnb .depth1').on('mouseenter', function() {
        $('#header').addClass('on');
    }).on('mouseleave', function() {
        $('#header').removeClass('on');
    });

    // 언어설정
    $('#header .util .lang').on('click', function() {
        $(this).toggleClass('on');
    });

    // 검색 모달 on off
    $('#header .btn_toggle').on('click', function() {
        $(this).toggleClass('on');
        $('body').toggleClass('on')

        if($(this).hasClass('on')) {
            $(this).text('전체검색 닫기');
            $('#dimm').stop().fadeIn();
            $('#header .total_search').stop().slideDown()
        } else {
            $(this).text('전체검색 열기')
            $('#dimm').hide();
            $('#header .total_search').stop().slideUp();
        }

    });

    

    

    // select 커스텀
    $('.custom_select li.init').on('click', function(e) {
        $('.custom_select li:not(.init)').toggle();
        e.preventDefault();
        $(this).closest('.custom_select').toggleClass('on')
    })

    // init이 아닌 리스트 클릭시 텍스트를 찾아서 init a에 넣어줌
    $('.custom_select li:not(.init)').on('click', function(e) {
        $('.custom_select li.init a').text($(this).text()); //get() set()
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.custom_select li:not(.init)').hide();
        $(this).closest('.custom_select').removeClass('on');
        $('.custom_select li.init a').data('val', $(this).find('a').data('val'));
    });


    // 전체검색 clear
    var btnClear = $('total_search .btn_clear');
    
    $('#inc_schKey').on('keydown', function() {
        if($(this).val()) {
            btnClear.show();
        } else {
            btnClear.hide();
        }
    });

    //패밀리 사이트
    $(document).ready(function () {
        var sw = true;

        $('.btn_family').click(function () {
            sw = !sw; 

            if (sw == true) {
                $('btn_family .list_family').hide();
            } else {
                $('btn_family .list_family').show();
            }
        });
    });

    // $('.btn_family').on('click', function() {
    //     $('.family .list_family').slideToggle();
    // });


  
    // swiper 초기화
    var mainSlider = new Swiper('.main_slider', {
        loop: true, 
        speed: 500,
        simulateTouch: false, 
        autoplay: {
            delay: 4000,
            disableOnInteraction: false, 
          },
        // 페이지네이션
        pagination: {
            el: '.swiper-pagination',
            clickable: true, 
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    
    // footer btn_top버튼 애니메이션
    $('#footer .btn_top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0},1000);
    });

    toggleBtnTop();
   
    function toggleBtnTop() {
        var btnTop = $('#footer .btn_top');

        btnTop.hide();

        $(window).scroll(function () {
            sc = $(this).scrollTop();

            if (sc >= 300) {
                btnTop.fadeIn();
            } else {
                btnTop.fadeOut();
            }

        }).trigger('scroll');

        btnTop.on('click', function (e) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: 0
            });

        });
    };

    /* store_search lnb fixde */

    var lnb = $('.lnb_wrap');

    $(window).scroll(function() {
        var sc = $(this).scrollTop() 
        console.log(sc);

        if(sc >= 170) {
            lnb.addClass('fixed')

        } else {
            lnb.removeClass('fixed')
        }

    }).trigger('scroll');

    // store_search lnb >> top버튼
    $('.lnb_wrap .top').on('click', function(e) {
        e.preventDefault();

        $('html,body').animate({scrolltop:0},1000, 'easeInOutQuint');
    });

    $(document).ajaxStop(function(){
        $("input").attr("title","input");
    });
    
})();