export default function navbar() {
  window.addEventListener('scroll', onScroll);

  onScroll();
  
  function showBackToTopButton() {
    if(scrollY > 300){
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }

  const bx = document.querySelector('.bx');
  const menu_mobile = document.querySelector('.mobile');
  const link_mobile = document.querySelectorAll('.mobile__link');

  bx.addEventListener('click', () => {
    bx.classList.toggle('activebx');
    menu_mobile.classList.toggle('showmenu');
  });

  link_mobile.forEach((item) => {
    item.addEventListener('click', () => {
      menu_mobile.classList.remove('showmenu');
      bx.classList.remove('activebx');
    });
  });


  function onScroll() {
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(projects);
    activateMenuAtCurrentSection(experiencies);
    activateMenuAtCurrentSection(skills);
    showBackToTopButton();
  }

  function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.nav__menu li a[href*=${sectionId}]`);

    menuElement.classList.remove('active');

    if (sectionBoundaries) {
      menuElement.classList.add('active');
    }
  }
}