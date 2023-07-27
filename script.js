function generateCode() {
    const codeLength = document.getElementById("code-length").value;
    const includeNumbers = document.getElementById("include-numbers").checked;
    const includeSymbols = document.getElementById("include-symbols").checked;
  
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_-+=<>?/";
  
    let generatedCode = "";
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedCode += characters.charAt(randomIndex);
    }
  
    document.getElementById("generated-code").textContent = generatedCode;
  }
  