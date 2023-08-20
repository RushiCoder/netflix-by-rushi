
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// login
// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');
// const btnPopup = document.querySelector('.btn');
// const iconClose = document.querySelector('.icon-close');
//login




// Select tab content
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));


//login
registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});
//login



