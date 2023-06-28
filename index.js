const arrowContainer = document.getElementById("arrowContainer");
const menu = document.getElementById("menu");
// const sections = document.querySelectorAll('.event');
// const menuItems = document.querySelectorAll('#menu li');

arrowContainer.addEventListener("click", function () {
  menu.classList.toggle("open");
});
// menuItems.forEach(function(menuItem) {
//   menuItem.addEventListener('click', function() {
//     const target = this.getAttribute('data-target');
//     sections.forEach(function(event) {
//       event.classList.remove('active');
//     });
//     document.getElementById(target).classList.add('active');
//     menu.classList.remove('open');
//   });
// });

/// desktop view
var timeline = document.querySelector(".timeline");
var children = timeline.querySelectorAll(".year");
children.forEach((child) => {
  child.addEventListener("click", function (ele) {
    console.log(child.innerHTML);
    document.getElementById("carouselDesktopIndicators2018").style.display = "none";
    document.getElementById("carouselDesktopIndicators2019").style.display = "none";
    document.getElementById("carouselDesktopIndicators2020").style.display = "none";
    document.getElementById("carouselDesktopIndicators2021").style.display = "none";
    document.getElementById("carouselDesktopIndicators2022").style.display = "none";
    document.getElementById("carouselDesktopIndicators2023").style.display = "none";
    document.getElementById("carouselDesktopIndicators"+child.innerHTML).style.display = "block";
    

  });
});
// console.log(children)
