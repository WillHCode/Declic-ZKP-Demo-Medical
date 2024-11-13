import * as circomlibjs from "circomlibjs";
import * as snarkjs from "snarkjs";

export async function generate_proof(inputString) {
    // Generate the hash required for the proof
    const poseidon = await circomlibjs.buildPoseidon();
    const inputArray = Array.from(inputString).map(char => char.charCodeAt(0));
    const hash = poseidon.F.toString(poseidon(inputArray));
    console.log("Hash:", hash);
    console.log("Input Array:", inputArray);

    // Generate the proof
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        { in: inputArray, hash: hash },
        "./zkp/build/poseidon_hasher_js/poseidon_hasher.wasm",
        "./zkp/circuit_0000.zkey");

    const proofJson = { proof, publicSignals };
    const proofJsonString = JSON.stringify(proofJson);
    const blob = new Blob([proofJsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "proof.json";
    a.click();

    // verify the proof
    const result = await fetch("http://localhost:3000/verify-proof", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ publicSignals, proof })
    });

    clearForm();
    if (result.ok) {
        alert("Proof verified. You will be redirected to the next page. Click OK to continue.");
        await new Promise(r => setTimeout(r, 2000));
        location.href = "https://huggingface.co/spaces/WillHbx/ThyroidCancer"
    } else {
        alert("Proof verification failed. Please try again.");
    }
}

function clearForm() {
    document.getElementById("medical_license").value = "";
}

export async function verify_proof(proof_file) {
    const proofJson = await proof_file.text();
    const { proof, publicSignals } = JSON.parse(proofJson);

    const result = await fetch("http://localhost:3000/verify-proof", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ publicSignals, proof })
    });

    if (result.ok) {
        alert("Proof verified. You will be redirected to the next page. Click OK to continue.");
        await new Promise(r => setTimeout(r, 2000));
        location.href = "https://huggingface.co/spaces/WillHbx/ThyroidCancer"
    } else {
        alert("Proof verification failed. Please try again.");
    }
}
