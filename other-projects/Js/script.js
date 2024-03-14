    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const weight = parseFloat(document.getElementById('weight').value.replace(',', '.'));
        const height = parseFloat(document.getElementById('height').value.replace(',', '.'));

        const bmi = (weight / (height * height)).toFixed(2);

        const value = document.getElementById('value');

        value.classList.add('attention');

        document.getElementById('infos').classList.remove('hidden');

        value.textContent = bmi;

        if (bmi < 18.5) {
            description.textContent = 'Abaixo do peso';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            description.textContent = 'Peso normal';
            value.classList.remove('attention');
            value.classList.add('normal');
        } else if (bmi >= 25 && bmi <= 29.9) {
            description.textContent = 'Sobrepeso';
        } else if (bmi >= 30 && bmi <= 34.9) {
            description.textContent = 'Obesidade grau 1';
        } else if (bmi >= 35 && bmi <= 39.9) {
            description.textContent = 'Obesidade grau 2';
        } else {
            description.textContent = 'Obesidade grau 3';
        }
        
    });
