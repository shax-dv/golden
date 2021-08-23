$(document).ready(function(){
    
	// $("#menu").on("click","a", function (event) {
	// 	//отменяем стандартную обработку нажатия по ссылке
	// 	event.preventDefault();

	// 	//забираем идентификатор блока с атрибута href
	// 	var id  = $(this).attr('href'),

	// 	//узнаем высоту от начала страницы до блока на который ссылается якорь
	// 		top = $(id).offset().top;
		
	// 	//анимируем переход на расстояние - top за 1500 мс
	// 	$('body,html').css({scrollTop: top}, 1500);
	// });

    
   $("#menu a").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
 });
 
 $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


});
