window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuCurrentSection(home)
  activateMenuCurrentSection(services)
  activateMenuCurrentSection(about)
  activateMenuCurrentSection(contact)
  // activateMenuCurrentSection(services)
}

function activateMenuCurrentSection(section) {
  // LINHA ALVO
  const targetLine = scrollY + innerHeight / 2

  // TOPO DA SEÇÃO
  const sectionTop = section.offsetTop

  // ALTURA DA SEÇÃO
  const sectionHeight = section.offsetHeight

  // TOPO DA SEÇÃO CHEGOU OU ULTRAPASSOU A LINHA ALVO
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // INFORMAÇÕES DOS DADOS E DA LÓGICA
  console.log(
    'O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetLine
  )

  // SEÇÃO TERMINA ONDE?
  const sectionEndsAt = sectionTop + sectionHeight

  // FINAL DA SEÇÃO PASSOU DA LINHA ALVO
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // LIMITES DA SEÇÃO
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)
