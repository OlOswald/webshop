$(function () {
  $('#main-navigation').find('li').each(function (index, element) {
    var $el = $(element);
    if ($el.find('a').attr('href') === window.location.pathname) {
      $el.addClass('active');
    }
  });
});