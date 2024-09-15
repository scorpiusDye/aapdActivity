import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



//----nav切換偵測開始
document.addEventListener('DOMContentLoaded', function () {
    // 根據不同頁面設置 currentPage 值
    // 可以在各自頁面上設置這個變量，例如在 index.html 是 'today'
    let currentPage = '';
  
    // 根據 URL 自動檢測當前頁面
    if (window.location.pathname.includes('index.html')) {
      currentPage = 'today';
    } else if (window.location.pathname.includes('record.html')) {
      currentPage = 'record';
    } else if (window.location.pathname.includes('search.html')) {
      currentPage = 'search';
    } else if (window.location.pathname.includes('setting.html')) {
      currentPage = 'setting';
    }
  
    // 獲取所有的 nav 項目
    const navItems = document.querySelectorAll('#main-nav ul.d-flex li');
  
    // 遍歷每個 nav 項目，切換圖片和 nav-title 樣式
    navItems.forEach(navItem => {
      const navTitle = navItem.querySelector('.nav-title');
      const defaultImg = navItem.querySelector('.default-img');
      const activeImg = navItem.querySelector('.active-img');
  
      const isActive = navTitle.dataset.nav === currentPage;
  
      // 切換圖片
      toggleNavItem(defaultImg, activeImg, isActive);
  
      // 切換 nav-title 樣式
      toggleNavTitle(navTitle, isActive);
    });
  });
  
  // 封裝一個簡單的函數來切換圖片
  function toggleNavItem(defaultImg, activeImg, isActive) {
    if (isActive) {
      defaultImg.classList.add('d-none');
      activeImg.classList.remove('d-none');
    } else {
      defaultImg.classList.remove('d-none');
      activeImg.classList.add('d-none');
    }
  }
  
  // 封裝一個函數來切換 nav-title 樣式
  function toggleNavTitle(navTitle, isActive) {
    if (isActive) {
      navTitle.classList.remove('default');
      navTitle.classList.add('active');
    } else {
      navTitle.classList.remove('active');
      navTitle.classList.add('default');
    }
  }
//----nav切換偵測結束


// offcanvas 打開後觸發 body 內的 animation
document.getElementById('offcanvasRight-coffee').addEventListener('shown.bs.offcanvas', function () {
  // 當 offcanvas 被打開時，啟動動畫
  document.querySelector('.chart').classList.add('animate');
});

document.getElementById('offcanvasRight-coffee').addEventListener('hidden.bs.offcanvas', function () {
  // 當 offcanvas 被關閉時，移除動畫 class (以便下次打開時重新觸發動畫)
  document.querySelector('.chart').classList.remove('animate');
});