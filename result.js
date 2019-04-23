const createElements = () => {
  let container = document.createElement('div')
  container.className = 'tp-result-container'

  let strong = document.createElement('strong')
  strong.textContent = '8.0'

  let title = document.createElement('h3')
  title.textContent = 'Aprobado'
  title.appendChild(strong)
  container.appendChild(title)

  return container
}

document.addEventListener("DOMContentLoaded", function(event) {
  let body = document.getElementsByTagName("BODY")[0] 
  body.appendChild(createElements())
});