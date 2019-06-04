var body, data, inputBox, container, scoreWrapper
async function getData(dni){
  let request = await fetch('https://raw.githubusercontent.com/Marcreativo/tp-results/gh-pages/db.json')
  response = await request.json()
  let data = response.results.filter(e => e.students.includes(dni))[0]
  if (data){
    localStorage.setItem('data', JSON.stringify(data))
    document.activeElement.blur();
    createResult(data.notes)
    setTimeout(() => showResults(), 500)
  }else{
    alert('no hay resultados que mostrar para este número de documento')
    inputBox.classList.remove('loading')
  }
}

const getScore = (data) => {
  let weights = 0;
  let prom = 0;
  data.forEach(e => { weights += e.weight; prom += (e.score * e.weight) })
  return Math.round((prom / weights)*10) / 10
}

const createSearchBox = () => {
  let input = document.createElement('input')
  input.id = 'searchBox'
  input.onkeypress = findResults

  let p = document.createElement('p')
  p.innerText = 'Ingresá tu documento'

  inputBox = document.createElement('div')
  inputBox.className = 'search'
  inputBox.appendChild(p)
  inputBox.appendChild(input)
  container.appendChild(inputBox)
}

const findResults = () => {
  if( event.keyCode === 13){
    let dni = parseInt(event.target.value)
    inputBox.classList.add('loading')
    getData(dni)
  }
}

const showResults = () => {
  container.style.height = `${scoreWrapper.clientHeight}px`
  inputBox ? inputBox.classList.add('hidden') : null
}

const createResult = (data) =>{
  scoreWrapper = document.createElement('div')
  scoreWrapper.className = 'scoreWrapper'
  container.appendChild(scoreWrapper)

  let strong = document.createElement('strong')
  strong.textContent = getScore(data)

  let title = document.createElement('h3')
  title.textContent = 'Aprobado'
  title.appendChild(strong)
  scoreWrapper.appendChild(title)
  
  let observationsList = document.createElement('ul')
  scoreWrapper.appendChild(observationsList)

  data.forEach(e => {
    let item = document.createElement('li')
    item.textContent = e.label+': '
    item.appendChild(styledScore(e.score))
    observationsList.appendChild(item)
  })
}

const styledScore = e => {
  let span = document.createElement('span')
  span.textContent = e
  span.className = e >= 7 ? 'check' : 'alert'
  return span
}

document.addEventListener('DOMContentLoaded', function(event) {
  body = document.getElementsByTagName('BODY')[0]
  container = document.createElement('div')
  container.className = 'tp-result-container'
  body.appendChild(container)

  let prevData = JSON.parse(localStorage.getItem('data'))
  if(prevData){
    createResult(prevData.notes)
    showResults()
  }else{
    createSearchBox()
  }
});
