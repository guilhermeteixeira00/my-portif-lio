const openmenu = document.querySelector("#openmenu");
const closemenu = document.querySelector("#closemenu");

const menuinicio = document.querySelector("#inicioo");
const menuservicos = document.querySelector("#servicoss");
const menuprojetos = document.querySelector("#projetoss");
const menuskills = document.querySelector("#skillss");
const menuaprendizado = document.querySelector("#aprendizadoo");

menuinicio.addEventListener('click', () => {
  menuservicos.classList.remove('active');
  menuprojetos.classList.remove('active');
  menuskills.classList.remove('active');
  menuaprendizado.classList.remove('active');
  menuinicio.classList.add('active');
})

menuservicos.addEventListener('click', () => {
  menuinicio.classList.remove('active');
  menuprojetos.classList.remove('active');
  menuskills.classList.remove('active');
  menuaprendizado.classList.remove('active');
  menuservicos.classList.add('active');
})

menuprojetos.addEventListener('click', () => {
  menuinicio.classList.remove('active');
  menuservicos.classList.remove('active');
  menuskills.classList.remove('active');
  menuaprendizado.classList.remove('active');
  menuprojetos.classList.add('active');
})

menuskills.addEventListener('click', () => {
  menuinicio.classList.remove('active');
  menuservicos.classList.remove('active');
  menuprojetos.classList.remove('active');
  menuaprendizado.classList.remove('active');
  menuskills.classList.add('active');
})

menuaprendizado.addEventListener('click', () => {
  menuinicio.classList.remove('active');
  menuprojetos.classList.remove('active');
  menuskills.classList.remove('active');
  menuservicos.classList.remove('active');
  menuaprendizado.classList.add('active');
})

openmenu.addEventListener('click', () => {
  navbar.style.display = 'flex';
  openmenu.style.display = 'none';
  closemenu.style.display = 'flex';
  
  setTimeout(() => {
    navbar.style.opacity = '1';
  }, 10)
})

closemenu.addEventListener('click', () => {
  closemenu.removeAttribute('style');

  setTimeout(() => {
    openmenu.removeAttribute('style');
    navbar.removeAttribute('style');
  }, 200)
})