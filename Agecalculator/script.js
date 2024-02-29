const inputDate = document.getElementById('date');
const resultParagraph = document.getElementById('result');
function calculateAge() {
 
    const enteredDate = new Date(inputDate.value);
    const currentDate = new Date();
    const diff = currentDate - enteredDate;

    const ageDate = new Date(diff);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
     resultParagraph.textContent = `Your age is 😍: ${years} years, ${months} months, and ${days} days`;
}

const button = document.querySelector('button');
button.addEventListener('click', calculateAge);
