// UltraLock - Password Generator
// Author: @dante-el-gamer
// Fully works offline in the browser

const genBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const output = document.getElementById("output");

genBtn.addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const useSymbols = document.getElementById("symbols").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useUppercase = document.getElementById("uppercase").checked;

  let chars = "abcdefghijklmnopqrstuvwxyz";
  if (useUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useNumbers) chars += "0123456789";
  if (useSymbols) chars += "!@#$%^&*()-_=+[]{};:,.<>?/";

  if (length < 4 || length > 64) {
    output.value = "❌ Invalid length (4–64)";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  output.value = password;
});

copyBtn.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
  copyBtn.textContent = "Copied 😎";
  setTimeout(() => (copyBtn.textContent = "Copy 📋"), 1500);
});

