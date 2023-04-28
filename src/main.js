import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')
createApp(App).mount('#app')
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const birthdate = document.getElementById("birthdate").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    let errors = [];
    if (!name.trim()) {
      errors.push("Nome é obrigatório");
    }
    if (!email.trim()) {
      errors.push("E-mail é obrigatório");
    } else if (!isValidEmail(email)) {
      errors.push("E-mail inválido");
    }
    if (!password.trim()) {
      errors.push("Senha é obrigatória");
    } else if (password.length < 8) {
      errors.push("Senha deve ter no mínimo 8 caracteres");
    }
    if (password !== confirmPassword) {
      errors.push("Senhas não conferem");
    }
    if (!birthdate.trim()) {
      errors.push("Data de Nascimento é obrigatória");
    } else if (!isValidDate(birthdate)) {
      errors.push("Data de Nascimento inválida");
    }
    if (!address.trim()) {
      errors.push("Endereço é obrigatório");
    }
    if (!city.trim()) {
      errors.push("Cidade é obrigatória");
    }
    if (!state.trim()) {
      errors.push("Estado é obrigatório");
    }
    if (errors.length > 0) {
      const errorContainer = document.getElementById("error-container");
      errorContainer.innerHTML = "";
      for (let i = 0; i < errors.length; i++) {
        const errorMessage = document.createElement("div");
        errorMessage.className = "error";
        errorMessage.innerHTML = errors[i];
        errorContainer.appendChild(errorMessage);
      }
      return false;
    }
    return true;
  }
  function isValidEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  function isValidDate(birthdate) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthdate)) {
      return false;
    }
    const parts = birthdate.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    if (year < 1900 || year > new Date().getFullYear()) {
      return false;
    }
    if (month < 1 || month > 12) {
      return false;
    }
    if (day < 1 || day > 31) {
      return false;
    }
    return true;
  }