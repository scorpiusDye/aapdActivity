import './assets/scss/all.scss';




//nav切換偵測
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
  