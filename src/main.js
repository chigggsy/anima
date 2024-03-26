// import animateTitle from './features/animateTitle'
// import createBadge from './features/createBasge'
import './styles/style.css'

const button = document.querySelector('.button')
const infoPanel = document.querySelector('.info_panel')

button.addEventListener('click', () => {
  button.style.display = 'none'
  infoPanel.style.display = 'flex'
})
