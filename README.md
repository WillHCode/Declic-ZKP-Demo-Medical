# Zero-Knowledge Proof Demo

A demonstration project illustrating the principles and applications of Zero-Knowledge Proofs (ZKPs) in both Web 2 and Web 3 contexts. Developed for an oral presentation at a conference, this repository provides a simple, live demo of generating and verifying a ZKP in a medical-data access scenario.

---

## ⚠️ Disclaimer

> **This project intentionally includes security weaknesses and minimal verification logic**. It is **for demonstration purposes only** and **should not** be used as a template for production code.

---

## 📖 Overview

In this demo, we showcase how a ZKP protocol can be used within a medical institution to grant access to patient data without revealing sensitive information. The process involves:

1. **Proof Generation**: A client-side application generates a ZKP based on user credentials and input data.
2. **Proof Verification**: A verifier component validates the proof via an API endpoint.
3. **Protected Resource Access**: Upon successful verification, the client is redirected to a protected AI model interface.

We simulate a ZKP-based login system, culminating in access to a [Hugging Face AI Model Space](https://huggingface.co/WillHbx/ks_workshop_medical_ai/tree/main) where sample patient data can be entered and the AI predicts the stage of thyroid cancer.

---

## 🚀 Features

* **Proof Generation**: A minimal implementation of ZKP creation.
* **API-Based Verification**: Simple HTTP endpoint to validate proofs.
* **Web Demo UI**: HTML + JavaScript login/register form for interactive testing.
* **AI Model Integration**: Homegrown model inference hosted on Hugging Face.

---

## 🏗️ Architecture

```plain
+----------------+        +--------------------+        +-------------------------+
|  Demo UI (HTML)|  <---> | Verifier API (HTTP)|  <---> |  Protected AI Service   |
|  & JS Forms    |        |  (Express)         |        | (Hugging Face Model)    |
+----------------+        +--------------------+        +-------------------------+
```

1. **Demo UI**: Login/Register form triggers proof creation or submission.
2. **Verifier API**: Receives proof, runs minimal checks, returns success/failure.
3. **AI Service**: On success, UI redirects to AI interface for prediction.

---

## 🎥 Demo Presentation

The original presentation (in French) is available as a PDF:

[Déclic – Démo ZKP (PDF)](https://github.com/user-attachments/files/21490932/Declic.-.Demo.ZKP.pptx.pdf)

> My part, who use this code as a showcase, was the technical one.

---

## 📖 Learning Ressources
[Circom documentation](https://docs.circom.io/getting-started/installation/)
