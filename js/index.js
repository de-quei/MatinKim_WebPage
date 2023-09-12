// 스크롤 이벤트를 감지하고 헤더를 고정시키는 함수
function handleScroll() {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
  
    if (scrollY > 0) {
      // 스크롤이 발생하면 헤더의 클래스를 변경하여 고정합니다.
      header.classList.add('fixed');
    } else {
      // 스크롤이 위로 올라가면 고정 클래스를 제거합니다.
      header.classList.remove('fixed');
    }
  }
  
  // 스크롤 이벤트 리스너를 등록합니다.
  window.addEventListener('scroll', handleScroll);

// 햄버거 버튼
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("hamburger-sidebar");

menuIcon.addEventListener("click", () => {
    if (sidebar.style.left === "-250px" || sidebar.style.left === "") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }
});