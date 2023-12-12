window.addEventListener('DOMContentLoaded', (event) => {
  new PagefindUI({ 
    element: "#search", 
    showSubResults: true, 
    showImages: false,
  });
  document.getElementsByClassName('pagefind-ui__search-input')[0].focus();
});