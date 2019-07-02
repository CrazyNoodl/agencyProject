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









/*



function CheckActive(){
  $('.list-el').each(function(){
    if($('.list-el').is('.is-active')){
      $(this).removeClass('is-active');
    }
  })
}

function CheckActiveTeam(){
  $('.img-btn').each(function(){
    if ($('.img-btn').is('.is-activeP')) {
      $(this).removeClass('is-activeP')
    }

  })
}

function ChangeTeamPhoto1(){
  $('.main-photo').hide();
  $('.main-photo').attr("src", "img/team/t1.jpg");
  $('.main-photo').fadeIn();
  $('.team-name').hide();
  $('.team-name').text("Tony Stark")
  $('.team-name').fadeIn();
}

function ChangeTeamPhoto2(){
  $('.main-photo').hide();
  $('.main-photo').attr("src", "img/team/t2.jpg");
  $('.main-photo').fadeIn();
  $('.team-name').hide();
  $('.team-name').text("mark waugh")
  $('.team-name').fadeIn();
}

function ChangeTeamPhoto3(){
  $('.main-photo').hide();
  $('.main-photo').attr("src", "img/team/t3.jpg");
  $('.main-photo').fadeIn();
  $('.team-name').hide();
  $('.team-name').text("Abdul al Fatir")
  $('.team-name').fadeIn();
}

function ChangeTeamPhoto4(){
  $('.main-photo').hide();
  $('.main-photo').attr("src", "img/team/t4.jpg");
  $('.main-photo').fadeIn();
  $('.team-name').hide();
  $('.team-name').text("Henry Strong")
  $('.team-name').fadeIn();
}

function Menu(){
  $('.view-spans').toggleClass('is-active');
    $('.span0').toggleClass('is-active');
    $('.span1').toggleClass('is-active');
    $('.span2').toggleClass('is-active');
    $('.view-navigation').toggleClass('is-active');
}



$(document).ready(function(){

  $('.menu-item').on('click tap',function(){
    Menu();
  });

  $('.view-spans').on('click tap', function() {
    Menu();
  });

  $('html').keydown(function(chars){
      if (chars.keyCode == 27) {
        $('.view-spans').removeClass('is-active');
        $('.view-navigation').removeClass('is-active');
        $('.span0').removeClass('is-active');
        $('.span1').removeClass('is-active');
         $('.span2').removeClass('is-active');
      }
  });

  $('.list-el').on('click tap',function(){
    CheckActive();
    $(this).addClass('is-active');
    var ElId = $(this).attr('id');
    if (ElId == 'all') {
      $('.product').each(function(){
        $(this).show();
      })
    }

    if (ElId == 'print'){
      $('.product').each(function(){
        $(this).show();
        $(this).not('.print').hide();
      })
    }

    if (ElId == 'webT'){
      $('.product').each(function(){
        $(this).show();
        $(this).not('.webT').hide();
      })
    }

    if (ElId == 'ui'){
      $('.product').each(function(){
        $(this).show();
        $(this).not('.ui').hide();
      })
    }

    if (ElId == 'mockup'){
      $('.product').each(function(){
        $(this).show();
        $(this).not('.mockup').hide();
      })
    }
  })

  $('.img-btn').on('click tap', function(){
    CheckActiveTeam();
    $(this).addClass('is-activeP');
    var teamId = $(this).attr('id');
    if (teamId == 'photo1') {
      ChangeTeamPhoto1();
    }
    if (teamId == 'photo2') {
      ChangeTeamPhoto2();
    }
    if (teamId == 'photo3') {
      ChangeTeamPhoto3();
    }
    if (teamId == 'photo4') {
      ChangeTeamPhoto4();
    }
  })

  var PhotoID;
  var number;

  $('.arrow-btn').on('click tap', function(){
    var arrowId = $(this).attr('id');
    if (arrowId == 'arrow-right') {
      PhotoID = $('.is-activeP').attr('id');
      number = PhotoID.slice(-1);
      number++;
      PhotoID = 'photo' + number;
      console.log(number);
      console.log(PhotoID);

      if (number=4) {
        number = 1;
        ChangeTeamPhoto1();
        CheckActiveTeam();
        $('#photo1').addClass('is-activeP');
      }

      if (PhotoID == 'photo2') {
        ChangeTeamPhoto2();
        CheckActiveTeam();
        $('#photo2').addClass('is-activeP');
      }
      if (PhotoID == 'photo3') {
        ChangeTeamPhoto3();
        CheckActiveTeam();
        $('#photo3').addClass('is-activeP');
      }
      if (PhotoID == 'photo4') {
        ChangeTeamPhoto4();
        CheckActiveTeam();
        $('#photo4').addClass('is-activeP');
      }

    }

    if (arrowId == 'arrow-left') {
      PhotoID = $('.is-activeP').attr('id');
      number = PhotoID.slice(-1);
      number= number - 1;
      PhotoID = 'photo' + number;
      console.log(number);
      console.log(PhotoID);

      if (number = 1) {
         number = 3;
        ChangeTeamPhoto4();
        CheckActiveTeam();
        $('#photo4').addClass('is-activeP');

      }
      if (PhotoID == 'photo2') {
        ChangeTeamPhoto2();
        CheckActiveTeam();
        $('#photo2').addClass('is-activeP');
      }
      if (PhotoID == 'photo3') {
        ChangeTeamPhoto3();
        CheckActiveTeam();
        $('#photo3').addClass('is-activeP');
      }
      if (PhotoID == 'photo1') {
        ChangeTeamPhoto1();
        CheckActiveTeam();
        $('#photo1').addClass('is-activeP');
      }
    }
  })
*/

