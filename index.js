const notifications = document.querySelectorAll('.notification');
const markBtn = document.querySelector('.mark-read');
const unreadCount = document.querySelector('.unread-count');

markBtn.addEventListener('click', () => {
  notifications.forEach(el => {
    el.classList.remove('unread');
  });
  unreadCount.textContent = 0;
});
