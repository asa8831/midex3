
jQuery(function ($) { 
  $('.js-hamburger ,js-hamburger a').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      $('.js-drawer-menu').fadeOut();
      $(this).removeClass('is-open');

    } else {

      $('.js-drawer-menu').fadeIn();
      $(this).addClass('is-open');
    }
  });

  const headerHeight = $(".header").height();
  const adjustHight = 50;

  // ページ外スムーススクロール
  const hash = location.hash;
  if (hash) {
    $("html, body").stop().scrollTop(0);
    setTimeout(function () {
      const target = $(hash),
        position = target.offset().top - headerHeight - adjustHight;
      $("html, body").animate({ scrollTop: position }, 600, "swing");
    });
  }

  // ページ内リンク
  $(document).on("click", 'a[href^="#"]', function () {
    //クリック部分のハッシュを取得
    const inHash = this.hash;
    if ($(inHash)[0]) {
      var positionIn = $(inHash).offset().top - headerHeight - adjustHight;
      $('html,body').animate({
        scrollTop: positionIn
      }, 600, "swing");
    }
  });


});
