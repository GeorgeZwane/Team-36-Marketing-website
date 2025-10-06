// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navItems = document.querySelector(".nav-items")

mobileMenuBtn.addEventListener("click", () => {
  navItems.classList.toggle("active")
})

// Close mobile menu when clicking a nav item
const navLinks = document.querySelectorAll(".nav-item")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.classList.remove("active")
  })
})

// Active nav item on scroll
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
