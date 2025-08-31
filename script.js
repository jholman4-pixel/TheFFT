
document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const yNodes = document.querySelectorAll('.year');
  yNodes.forEach(n => n.textContent = year);

  const nav = document.querySelector('.links');
  const burger = document.querySelector('#burger');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
  }
});
