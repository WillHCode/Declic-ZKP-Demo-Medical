import './style.css'
import {generate_proof, verify_proof} from './data_validation.js'


document.querySelector('#app').innerHTML = `
  <div>
    <form id="proofForm" method="post">
        <label for="medical_license">Medical License:</label>
        <input type="password" id="medical_license" name="medical_license" required>
        <br><br>
        <button type="submit">Generate Proof</button>
    </form>
    
    <br><br>
    
    <form id="proofFile" method="post">
        <label for="proof_file">Proof File:</label>
        <input type="file" id="proof_file" name="proof_file" required>
        <br><br>
        <button type="submit">Verify Proof</button>
    </form>
  </div>
`

document.querySelector('#proofForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const medical_license = document.querySelector('#medical_license').value
    generate_proof(medical_license)
})

document.querySelector('#proofFile').addEventListener('submit', (event) => {
    event.preventDefault()
    const proof_file = document.querySelector('#proof_file').files[0]
    verify_proof(proof_file)
})
