var userFlow = {
  currentSection: 1,
  scrollToSection: function (mode) {
    var totalSections = $('section.module').length;
    if (mode === 'up') {
      if (userFlow.currentSection >= 1) {
        $('html, body').animate({
          scrollTop: $('section.module:nth-child(' + (userFlow.currentSection) + ')').offset().top
        }, 1500);
      }
    } else {
      if (userFlow.currentSection < totalSections) {
        $('html, body').animate({
          scrollTop: $('section.module:nth-child(' + (userFlow.currentSection + 1) + ')').offset().top
        }, 1500);
      }
    }
  },
  initScrollPage: function () {
    $(document).on('scroll', function () {
      $('section.module').each(function () {
        var top = $(this).offset().top;
        var bottom = top + $(this).outerHeight(true);
        var scrollTop = $(window).scrollTop();
        if (top <= scrollTop && bottom >= scrollTop) {
          userFlow.currentSection = $(this).index() + 1;
        }
      });
    });
    $(document).on('keyup', function (e) {
      if (e.which == 38) {
        userFlow.scrollToSection('up');
      }
      if (e.which == 40) {
        userFlow.scrollToSection('down');
      }
    });
  }
};