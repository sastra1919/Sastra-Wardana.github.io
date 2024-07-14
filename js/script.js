// Function untuk smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });

  // parralax
  $(window).scroll(function (){
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
      'transform' : 'translate(0px, '+wScroll/10 +'%)'
    });
    $('.jumbotron h1').css({
      'transform' : 'translate(0px, '+wScroll/5 +'%)'
    });
    $('.jumbotron p').css({
      'transform' : 'translate(0px, '+wScroll/3 +'%)'
    })


  });