var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1000, // 1 giây
      disableOnInteraction: false // vẫn tiếp tục tự động chuyển slide sau khi người dùng tương tác
    },
});

// JavaScript để theo dõi vị trí cuộn
window.addEventListener("scroll", function () {
    var headerBottom = document.querySelector(".header-botttom");
    if (window.scrollY > 50) { // Khi cuộn quá 50px
        headerBottom.classList.add("scrolled");
    } else {
        headerBottom.classList.remove("scrolled");
    }
});

