$(function () {



	
	function createFullpage () {

		$('#ohiyo_full').fullpage({

			responsiveWidth: 767,
			scrollOverflow:true,
	
			//header 영역 바로가기 탭
			anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
	
			// dote 네비게이션
			navigation: true,
			navigationPosition: 'right',
	
			// section 배경색
			sectionsColor: ['#20ad3a', '#ece6da', '#ece6da', '#ece6da', '#ece6da'],
	
			// 섹션으로 이동한 뒤
			// afterLoad: function (anchorLink, index) {
			// 	console.log("현재 섹션 number  " + index);
			// 	if (index === 1) {
			// 		$('#hd .hd_logo a').removeClass('act');
			// 		$('#hd nav ul li a').removeClass('act');
			// 		$('#hd nav ul.nav_right li:first-child a').removeClass('act');
			// 		console.log('dsdsds');
			// 	} 
			// 	else {
			// 		$('#hd .hd_logo a').addClass('act');
			// 		$('#hd nav ul li a').addClass('act');
			// 		$('#hd nav ul.nav_right li:first-child a').addClass('act');
			// 	}
			// },
	
			// 섹션으로 떠날때
			onLeave: function (anchorLink, index) {
				if (index === 1) {
					$('#hd').removeClass('act');
					$('#hd .cart a').removeClass('act');
					$('.hamburger .line').removeClass('act');
					$('#hd .hd_logo a').removeClass('act');
					$('#hd nav ul li a').removeClass('act');
					$('#hd nav ul.nav_right li:first-child a').removeClass('act');
					$('#hd nav ul li .under_').css({
						'position': 'absolute',
						'content': '""',
						'display': 'block',
						'border-bottom': '3px solid #ece6da',
						'transition': 'width 250ms ease-in-out',
						'left': 'auto',
						'widht': '0'
					});
	
					$('#fp-nav ul li a span,.fp-slidesNav ul li a span').css('background', '#fff');
	
				} else {
					$('#hd').addClass('act');
					$('#hd .cart a').addClass('act');
					$('.hamburger .line').addClass('act');
					$('#hd .hd_logo a').addClass('act');
					$('#hd nav ul li a').addClass('act');
					$('#hd nav ul.nav_right li:first-child a').addClass('act');
					$('#hd nav ul li .under_').css({
						'position': 'absolute',
						'content': '""',
						'display': 'block',
						'border-bottom': '3px solid #20ad3a',
						'transition': 'width 250ms ease-in-out',
						'left': 'auto',
						'widht': '0'
					});
					$('#fp-nav ul li a span,.fp-slidesNav ul li a span').css('background', '#21AD3A');
				}
			},
	
			// 키보드제어 
			keyboardScrolling: true,
	
			// 스크롤 속도
			scrollingSpeed: 1300,
	
			// 무한 스크롤
			continuousVertical: false,
	
			// 스크롤효과 on/off
			autoScrolling: true,
		});
	}
	createFullpage(); // 풀페이지 함수 실행하기

	/* ++++++++++ section : section3 map ++++++++++ */
	// .li0 제외하고 나머지 li들 숨기기
	$('.sec3 ul li').not('.li0').css('display', 'none');

	$('.sec3 .pin0').click(function () {
		$('.sec3 ul li').not('li0').hide();
		$('.sec3 .li0').show();
	});

	$('.sec3 .pin1').click(function () {
		$('.sec3 ul li').not('li1').hide();
		$('.sec3 .li1').show();
	});

	$('.sec3 .pin2').click(function () {
		$('.sec3 ul li').not('li2').hide();
		$('.sec3 .li2').show();
	});

	$('.sec3 .pin3').click(function () {
		$('.sec3 ul li').not('li3').hide();
		$('.sec3 .li3').show();
	});

	$('.sec3 .pin4').click(function () {
		$('.sec3 ul li').not('li4').hide();
		$('.sec3 .li4').show();
	});

	$('.sec3 .pin5').click(function () {
		$('.sec3 ul li').not('li5').hide();
		$('.sec3 .li5').show();
	});

	$('.sec3 .pin6').click(function () {
		$('.sec3 ul li').not('li6').hide();
		$('.sec3 .li6').show();
	});

	$('.sec3 .pin7').click(function () {
		$('.sec3 ul li').not('li7').hide();
		$('.sec3 .li7').show();
	});

	$('.sec3 .pin8').click(function () {
		$('.sec3 ul li').not('li8').hide();
		$('.sec3 .li8').show();
	});

	$('.sec3 .pin9').click(function () {
		$('.sec3 ul li').not('li9').hide();
		$('.sec3 .li9').show();
	});

	$('.sec3 .pin10').click(function () {
		$('.sec3 ul li').not('li10').hide();
		$('.sec3 .li10').show();
	});

	$('.sec3 .pin11').click(function () {
		$('.sec3 ul li').not('li11').hide();
		$('.sec3 .li11').show();
	});

	// map-pin click event
	$('.sec3 .point_box figure').click(function () {
		$(this).addClass('act');
		$('.sec3 .point_box figure').not(this).removeClass('act');
	});

	// search event
	$("#search").keydown(function () {
		$('#ohiyo_full .sec3 .list li').hide();
	});
	$('#searchBtn').on('click', function () {
		const searchTxt = $('#search').val();
		const temp = $(".tit:contains('" + searchTxt + "')");

		// 기본
		// if(!searchTxt) {
		// 	alert('검색어를 입력하세요!');
		// } else {
		// 	$(temp).parent().parent().show();
		// 	console.log('show succes!');
		// }

		// 검색결과 없을때
		if (searchTxt && temp.length > 0) {
			$(temp).parent().parent().show();
		} else if ((searchTxt && temp.length === 0)) {
			alert('일치하는 검색어가 없습니다');
		} else {
			alert('검색어를 입력하세요');
		}
	});


/* ++++++++++++++++++++ Mobile JS ++++++++++++++++++++ */
	// tab menu area
	$(".hamburger").click(function () {
		$(this).toggleClass("is-active");
		$('#hd .mo_menu').toggleClass('act');
	});

	$('#hd .mo_menu .menu_inner a').click(function () {
		$('#hd .mo_menu').toggleClass('act');
		$('#ham').toggleClass("is-active");
		console.log('close');
	});

	$('#hd .hd_logo').click(function () {
		if ($('#hd .mo_menu').hasClass('act') === true) {
			$('#hd .mo_menu').toggleClass('act');
			$('#ham').toggleClass("is-active");
		}
	});








});