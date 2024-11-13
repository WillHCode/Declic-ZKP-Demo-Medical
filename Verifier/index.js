const express = require("express");
const snarkjs = require("snarkjs");
const fs = require("fs").promises;
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/verify-proof", async (req, res) => {
    const { publicSignals, proof } = req.body;
    try {
        const vKey = await fs.readFile("../zkp/verification_key.json", "utf-8").then(JSON.parse);
        const isValid = await snarkjs.groth16.verify(vKey, publicSignals, proof);
        res.json({ valid: isValid });
    } catch (error) {
        console.error("Error verifying proof:", error);
        res.status(500).json({ error: "Failed to verify proof" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
