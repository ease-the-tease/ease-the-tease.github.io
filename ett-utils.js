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