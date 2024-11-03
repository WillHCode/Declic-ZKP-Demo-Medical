import './style.css'
import { generate_proof } from './data_validation.js'

document.querySelector('#app').innerHTML = `
  <div>
    <form id="proofForm" method="post">
        <label for="medical_license">Medical License:</label>
        <input type="password" id="medical_license" name="medical_license" required>
        <br><br>
        <button type="submit">Generate Proof</button>
    </form>
  </div>
`

document.querySelector('#proofForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const medical_license = document.querySelector('#medical_license').value
    generate_proof(medical_license)
})
