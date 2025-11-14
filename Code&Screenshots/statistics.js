
function getNumbers() {
    const input = document.getElementById("numbers").value.trim();
    const errorDiv = document.getElementById("error");
    const outputDiv = document.getElementById("output");

    errorDiv.textContent = "";
    outputDiv.textContent = "";

    if (input === "") {
        errorDiv.textContent = "Error: Please enter at least one number.";
        return null;
    }


    let parts = input.split(/\s+/);

  
    let numbers = [];
    for (let p of parts) {
        if (isNaN(p)) {
            errorDiv.textContent = "Error: Input must contain only numbers.";
            return null;
        }
        numbers.push(parseFloat(p));
    }

    return numbers;
}
function calculateMean() {
    let nums = getNumbers();
    if (!nums) return;

    let mean = nums.reduce((a, b) => a + b, 0) / nums.length;

    document.getElementById("output").innerHTML =
        `Mean: <strong>${mean.toFixed(4)}</strong>`;
}


function calculateVariance() {
    let nums = getNumbers();
    if (!nums) return;

    let mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    let variance = nums.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / nums.length;

    document.getElementById("output").innerHTML =
        `Variance: <strong>${variance.toFixed(4)}</strong>`;
}


function calculateStdDev() {
    let nums = getNumbers();
    if (!nums) return;

    let mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    let variance = nums.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / nums.length;
    let stddev = Math.sqrt(variance);

    document.getElementById("output").innerHTML =
        Standard Deviation: <strong>${stddev.toFixed(4)}</strong>;
}
