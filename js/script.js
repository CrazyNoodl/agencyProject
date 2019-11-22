var containerEl = document.querySelector('.container-filter');
var mixer = mixitup(containerEl);

$(document).ready(function () {
  $("#nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 500);
  });
});

var header = $("#navigation"),
  introH = $("#header").innerHeight(),
  scrollOffset = $(window).scrollTop();

checkScroll(scrollOffset);

$(window).on("scroll", function () {
  scrollOffset = $(this).scrollTop();
  checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
  if (scrollOffset >= introH) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
}
