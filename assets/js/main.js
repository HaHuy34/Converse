// Animation wweb
AOS.init();

// Slider
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
    disableOnInteraction: false, // vẫn tiếp tục tự động chuyển slide sau khi người dùng tương tác
  },
});

var swiper = new Swiper(".leverSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 100000, // 1 giây
    disableOnInteraction: false, // vẫn tiếp tục tự động chuyển slide sau khi người dùng tương tác
  },
});

// JavaScript để theo dõi vị trí cuộn
window.addEventListener("scroll", function () {
  var headerBottom = document.querySelector(".header-botttom");
  if (window.scrollY > 50) {
    // Khi cuộn quá 50px
    headerBottom.classList.add("scrolled");
  } else {
    headerBottom.classList.remove("scrolled");
  }
});

// Back To Top
// Hiển thị nút khi cuộn xuống 300px
window.onscroll = function () {
  let backToTopButton = document.getElementById("backToTop");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Hàm để cuộn lên đầu trang
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Block Message
// Select elements
var blockMess = document.getElementById("mess-cuss");
var mainContentMessage = document.getElementById("main-content-message");
var noneMess = document.getElementById("none-mess");

// Show chat interface on click
blockMess.addEventListener("click", () => {
  mainContentMessage.style.display = "block"; // Make visible
  mainContentMessage.classList.add("block-mess-main"); // Trigger slide-up animation
});

// Hide chat interface on click

noneMess.addEventListener("click", () => {
  mainContentMessage.style.display = "none";
});
const timeReal = document.getElementById("time-real");

// Hàm để lấy thời gian hiện tại và hiển thị trong `#time-real`
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}`;

  timeReal.textContent = timeString;
}

// Gọi hàm lần đầu tiên để hiển thị thời gian ngay lập tức
updateTime();

// Cập nhật thời gian mỗi phút
setInterval(updateTime, 60000); // 60000ms = 1 phút

// Lấy các phần tử input và danh sách tin nhắn
const chatInput = document.getElementById("chat-content-cus");
const messageList = document.getElementById("message-list");
const faq = document.getElementById("adsd");
const botChat = document.getElementById("bot-content");
// Lắng nghe sự kiện nhấn phím "Enter"
chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu nếu đang trong một biểu mẫu
    const messageText = chatInput.value.trim(); // Lấy và loại bỏ khoảng trắng đầu/cuối
    if (messageText) {
      // Chỉ thêm nếu không rỗng
      faq.style.display = "none";
      botChat.style.display = "none";
      timeReal.style.display = "none";
      // Tạo nội dung tin nhắn
      const newMessage = document.createElement("li");

      // Tạo nội dung tin nhắn
      const messageContent = document.createElement("span");
      messageContent.textContent = messageText;
      messageList.appendChild(newMessage); // Thêm tin nhắn mới vào danh sách

      // Lấy thời gian hiện tại
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const timeString = `${hours}:${minutes}`;

      // Tạo phần tử chứa thời gian
      const timeElement = document.createElement("p");
      timeElement.textContent = timeString;

      // Thêm tin nhắn và thời gian vào thẻ <li>
      newMessage.appendChild(messageContent);
      newMessage.appendChild(timeElement);
      messageList.appendChild(newMessage);

      chatInput.value = ""; // Xóa trường input

      // Cuộn đến tin nhắn mới
      messageList.lastElementChild.scrollIntoView({ behavior: "smooth" });
    }
  }
});

const search = document.getElementsByClassName("search-main-abs")[0];
const searchIcon = document.getElementsByClassName("search")[0];
const cancleSearch = document.getElementById("check-can");
cancleSearch.addEventListener("click", () => {
  search.style.display = "none";
});
searchIcon.addEventListener("click", () => {
  search.style.display = "block";
});

