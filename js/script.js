document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.calculate-form');
    const luasElement = document.getElementById('Luas');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting normally

        // Get values from inputs
        const alas = parseFloat(document.getElementById('alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);

        // Calculate the area
        const luas = 0.5 * alas * tinggi;

        // Display the result
        luasElement.textContent = luas.toFixed(2);
    });

    //Keliling Segitiga
    const kelilingForm = document.querySelector('.calculate-form');
    const kelilingElement = document.getElementById('Keliling');

    kelilingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting normally

        // Get values from inputs
        const sisiA = parseFloat(document.getElementById('sisiA').value);
        const sisiB = parseFloat(document.getElementById('sisiB').value);
        const sisiC = parseFloat(document.getElementById('sisiC').value);

        // Calculate the area
        const keliling = sisiA + sisiB + sisiC;

        // Display the result
        kelilingElement.textContent = keliling.toFixed(2);
    });
});

document.getElementById('triangleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the values from the input fields
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Calculate the perimeter
    const perimeter = a + b + c;

    // Display the result
    document.getElementById('result').textContent = `Keliling Segitiga: ${perimeter}`;
});