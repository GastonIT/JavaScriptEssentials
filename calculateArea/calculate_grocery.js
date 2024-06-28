let grocery-1;
let grocery-2;
let grocery-3;

function CalculateAmount() {
    amount1 = parseFloat(document.getElementById('grocery-1').value);
    amount2 = parseFloat(document.getElementById('grocery-2').value);
    amount3 = parseFloat(document.getElementById('grocery-3').value);

    let total = grocery-1 + grocery-2 + grocery-3;
    document.getElementById('result').innerText = `The area of the rectangle is: ${total}`;
}