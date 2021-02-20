// Global pollution, terrible
import 'lightgallery.js/dist/css/lightgallery.css'
import 'lightgallery.js'

console.log('Loaded ')

lightGallery(document.querySelector('#gallery'), {
  download: false,
})
