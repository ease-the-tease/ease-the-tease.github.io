//Navbar Loading
var currentPage = $("body").attr("pagename");
$("#navbarCollapse").load('./navbar.html', setActiveNav);
//adds a listener to animate the mobile menu button
$('#menubutton').click(function(){
    this.classList.toggle("change");
});
//sets the current page to have the "active" class
function setActiveNav(){
    $("#main-navbar a:contains(" + currentPage +")").addClass('active');
}

//modified from tutorial at https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 0 || prevScrollpos > currentScrollPos) { //mobile sites allow negative scroll positions, navbar should appear in that case
    $("#main-navbar").css("top", "0");
  } else {
    $("#main-navbar").css("top", "-115px");
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function() { // adapted from https://stackoverflow.com/questions/10099422/flushing-footer-to-bottom-of-the-page-twitter-bootstrap
  setInterval(function() {
      var footerSelector = "footer.container";
      var docHeight = $(window).height();
      var footerHeight = $(footerSelector).height();
      var footerTop = $(footerSelector).position().top + footerHeight;
      var marginTop = (docHeight - footerTop + 10);

      if (footerTop < docHeight)
          $(footerSelector).css('margin-top', marginTop + 'px'); // padding of 30 on footer
      else
          $(footerSelector).css('margin-top', '0px');
      // console.log("docheight: " + docHeight + "\n" + "footerheight: " + footerHeight + "\n" + "footertop: " + footerTop + "\n" + "new docheight: " + $(window).height() + "\n" + "margintop: " + marginTop);
  }, 250);
});