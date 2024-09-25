const forms = document.querySelector('form');

forms.addEventListener('submit', function (e) {
    e.preventDefault();

    const hght = parseInt(document.querySelector('#height').value)
    const wght = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (hght === '' || hght <= 0 || isNaN(hght)) {
        result.innerHTML = "please give a valid height"
    }
    else if (wght === '' || wght <= 0 || isNaN(wght)) {
        result.innerHTML = "please give a valid Weight"
    }
    else {
        const bmi = (wght / ((hght * hght) / 10000)).toFixed(2);
        let message = `Your BMI is ${bmi}.`;
        if (bmi <= 18.5) {
            message += "You are under-Weight"
        }
        else if (bmi > 18.5 && bmi <= 24.9) {
            message += "You have a Normal Weight"
        }
        else {
            message += "You are Over-Weight"
        }
        result.innerHTML = `<span>${message}</span>`;
    }
});
