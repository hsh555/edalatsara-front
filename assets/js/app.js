(function () {
  $(".navbar-toggler").click(function () {
    $(".mobile-menu").addClass("mobile-menu--active");
    $(".mobile-menu-overlay").fadeIn();
  });

  $(".mobile-menu__close").click(function () {
    $(".mobile-menu").removeClass("mobile-menu--active");
    $(".mobile-menu-overlay").fadeOut();
  });

  $(".header__search-form__btn").click(function (e) {
    if ($(window).width() < 768) {
      e.preventDefault();
      $(".mobile-search").fadeIn();
      $(".mobile-search .form-control").focus();
    }
  });

  $(".mobile-search").click(function (e) {
    if (e.target.closest(".mobile-search__inner") == null) {
      $(".mobile-search").fadeOut();
    }
  });
})();
