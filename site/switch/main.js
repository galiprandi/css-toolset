function styleToggle() {
  document.querySelector('.switch').classList.toggle('active')
  const filename = 'css-toolset.css'
  const stylesheet = document.getElementById('stylesheet')
  const href = stylesheet.href.includes(filename) ? '' : filename
  stylesheet.href = href
}
