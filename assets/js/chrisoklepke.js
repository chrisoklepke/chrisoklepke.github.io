// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


function toggleNav() {
    var element = document.getElementById("myNav");
    if (element.style.display == "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}
