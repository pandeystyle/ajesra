/*our specility*/
$('.responsive').slick({
 centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToShow: 4,
    autoplay: true,
  autoplaySpeed: 1000,
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
        slidesToScroll: 1
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
/*our work*/
$('.responsivework').slick({
 centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToShow: 2,
    autoplay: true,
  autoplaySpeed: 1000,
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
        slidesToScroll: 1
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

// Modal Image Gallery
$(function onClick(element) {
    src=$("img01").src 
  src = element.src;
    var modal01=$("modal01").style.display
  modal01 = "block";
  var captionText = $("caption").val();
  captionText.innerHTML = element.alt;
});


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = $("mySidebar").val();

$(function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
});

// Close the sidebar with the close button
$(function w3_close() {
    mySidebar.style.display = "none";
});