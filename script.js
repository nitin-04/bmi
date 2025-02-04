const form = document.querySelector('form');
const result = document.querySelector('#results');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get height and weight values
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);

    // Validate inputs
    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please provide a valid height.";
        return;
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please provide a valid weight.";
        return;
    }

    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Determine BMI category
    let message = `Your BMI is ${bmi}. `;
    if (bmi <= 18.5) {
        message += "You are underweight.";
    } else if (bmi > 18.5 && bmi <= 24.9) {
        message += "You have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        message += "You are overweight.";
    } else {
        message += "You are obese.";
    }

    // Display result
    result.innerHTML = `<span>${message}</span>`;
});
