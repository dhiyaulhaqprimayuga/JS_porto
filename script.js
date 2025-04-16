document.addEventListener("DOMContentLoaded", () => {
  // Mengambil elemen yang diperlukan
  const hamburgerMenu = document.querySelector(".hamburger-menu")
  const hamburgerIcon = document.querySelector(".hamburger-icon")
  const navMenu = document.querySelector(".nav-menu")
  const navLinks = document.querySelectorAll(".nav-menu a")

  // Toggle menu saat hamburger icon diklik
  hamburgerMenu.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Menutup menu saat link navigasi diklik
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerIcon.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Menutup menu saat mengklik di luar menu
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = navMenu.contains(event.target)
    const isClickOnHamburger = hamburgerMenu.contains(event.target)

    if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains("active")) {
      hamburgerIcon.classList.remove("active")
      navMenu.classList.remove("active")
    }
  })
})
