// Import the CSS
import '../css/variables.css'
import '../css/normalize.css'
import '../css/simple.css'
import '../css/styles.scss'

import './vendor/modernizr-3.11.2.min'
import './plugins'
import 'spotlight.js'

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis')
      }
    })
  },
  {
    threshold: 0.3,
  }
)

const images = document.querySelectorAll('.spotlight')
images.forEach((img) => {
  observer.observe(img)
})
