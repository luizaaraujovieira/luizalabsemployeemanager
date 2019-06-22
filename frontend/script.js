const container = document.querySelector('#items-employee')



fetch(`http://localhost:8000/employee`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    data.forEach(employee => {
      console.log(data)

      const mediaItem = document.createElement('div');
      mediaItem.setAttribute('class', 'media mb-4');
      mediaItem.innerHTML = `
            <div class="media-body>
                <h5 class="mt-0"><strong>${employee.name}</strong></h5>
                <br>
                ${employee.email}
                <br>
                ${employee.department}
              </div>`
      container.appendChild(mediaItem)
      const buttonDelete = document.createElement('button');
      buttonDelete.textContent = 'Delete';
      buttonDelete.setAttribute('data-id', employee._id)
      mediaItem.appendChild(buttonDelete)
      buttonDelete.addEventListener('click', () => {
        fetch(`http://localhost:8000/employee/${employee._id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then((response) =>{
          console.log(response)
          if(response.status === 204){
            window.location.reload()
          } else{
            window.alert("Ops! Button Delete error. Please, refresh the page and try again.")
          }
        })
      })
    }
    )
  }
  )
  .catch((erro) => {
    console.log(erro)
  })
const buttonRegister = document.querySelector('#registerNewEmployee')
buttonRegister.addEventListener("click", registerNewEmployee)
function registerNewEmployee() {
  const name = document.querySelector("#name_input").value
  const email = document.querySelector("#email_input").value
  const department = document.querySelector("#department_input").value
  const employee = {
    name, email, department
  }
  fetch(
    'http://localhost:8000/employee',
    {
      method: 'POST',
      body: JSON.stringify(employee),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then((response) =>{
    console.log(response)
    if(response.status === 200){
      window.location.reload()
    } else{
      window.alert('All fields are required.')
    }
  })
}