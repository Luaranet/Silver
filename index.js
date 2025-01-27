const CryptoJS = require("crypto-js");

//texto para criptografar
const originalText = "Texto confidencial";

//criptografia
const encryptedText = CryptoJS.AES.encrypt(originalText, secretKey).toString();

//chave secreta
const secretKey = "chave-secreta";

//descriptografia
const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

console.log("Texto Original:", originalText);
console.log("Texto Criptografado:", encryptedText);
console.log("Texto Descriptografado:", decryptedText);