const topBtn = document.getElementById('top-btn')
const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const projects = document.querySelectorAll('.project')
const urls = ['calc_project/index.html', 'snake_game/index.html']

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    topBtn.style.display = 'block'
  else topBtn.style.display = 'none'
}

window.onscroll = () => {
  scrollFunction()
}

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
  menuBtn.classList.toggle('active')
})

projects.forEach((e, i) => {
  e.addEventListener('click', () => {
    window.open(urls[i], '_blank')
  })
})
