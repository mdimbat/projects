const numbers = '0123456789';
const specialChars = '!@$%&*_+~?-=';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const generatePassword = () => {
  const passwordLength = document.getElementById('length').value;
  let password = '';
  let characters = lowercase + uppercase;
  const numSpecial = Math.ceil(passwordLength * 0.33); // calculate the number of special characters needed
  let specialCount = 0;
  
  if (document.getElementById('numbers').checked) {
    characters += numbers;
  }
  if (document.getElementById('specialChars').checked) {
    characters += specialChars;
  }
  
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    let randomCharacter = characters.substring(randomNumber, randomNumber + 1);
    
    // ensure that at least 33% of the password contains special characters
    if (document.getElementById('specialChars').checked && specialChars.includes(randomCharacter) && specialCount < numSpecial) {
      specialCount++;
    } else {
      while (document.getElementById('specialChars').checked && !specialChars.includes(randomCharacter) && specialCount >= numSpecial) {
        randomNumber = Math.floor(Math.random() * characters.length);
        randomCharacter = characters.substring(randomNumber, randomNumber + 1);
      }
    }
    password += randomCharacter;
  }
  
  document.getElementById('password').innerText = password;
};

document.getElementById('generateBtn').addEventListener('click', generatePassword);

document.getElementById('copyBtn').addEventListener('click', () => {
  const passwordElement = document.getElementById('password');
  const password = passwordElement.innerText; // get password text instead of value
  navigator.clipboard.writeText(password) // use newer clipboard API instead of execCommand
    .then(() => {
      alert(`Copied the password: ${password}`);
    })
    .catch((error) => {
      console.error('Failed to copy password:', error);
    });
});
