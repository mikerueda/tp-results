var data, inputBox, container
async function getData(dni){
  let request = await fetch('https://raw.githubusercontent.com/Marcreativo/tp-results/master/db.json')
  response = await request.json()
  let result = response.results.filter(e => e.students.includes(dni))[0]
  if (result){
    console.log(result)
  }else{
    alert('no hay resultados que mostrar para este número de documento')
  }
}

const createElements = () => {
  let input = document.createElement('input')
  input.id = 'searchBox'
  input.onkeypress = findResults

  inputBox = document.createElement('div')
  inputBox.className = 'search'
  inputBox.appendChild(input)

  container = document.createElement('div')
  container.className = 'tp-result-container'
  container.appendChild(inputBox)
  
  return container
}

const findResults = () => {
  if( event.keyCode === 13){
    let dni = parseInt(event.target.value)
    getData(dni)
  }
}
      
const styledScore = e => {
  let span = document.createElement('span')
  span.textContent = e
  span.className = e >= 7 ? 'check' : 'alert'
  return span
}

const createResult = () =>{
  let strong = document.createElement('strong')
  strong.textContent = Math.round((finalScore / observations.length)*10) / 10

  let title = document.createElement('h3')
  title.textContent = 'Aprobado'
  title.appendChild(strong)
  container.appendChild(title)
  
  let observationsList = document.createElement('ul')
  container.appendChild(observationsList)

  observations.forEach(e => {
    let item = document.createElement('li')
    item.textContent = e.label+': '
    item.appendChild(styledScore(e.score))
    observationsList.appendChild(item)
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  let body = document.getElementsByTagName("BODY")[0] 
  body.appendChild(createElements())
});
