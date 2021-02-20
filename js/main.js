import 'smartphoto/css/smartphoto.min.css'
import SmartPhoto from 'smartphoto'

console.log('Loaded')

new SmartPhoto('#gallery a', {
  resizeStyle: 'fit',
})
