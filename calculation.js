document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const calculationTable = document.getElementById("calculationTable").getElementsByTagName("tbody")[0];
    const finalValueElement = document.getElementById("finalValue");

    calculateButton.addEventListener("click", function() {
        const numberInput = document.getElementById("numberInput").value;
        const inputNumber = parseInt(numberInput, 10);

        if (!isNaN(inputNumber) && inputNumber >= 0) {
            let totalValue = 0;
            let details = "";

            if (inputNumber <= 75) {
                totalValue = inputNumber * 4.85;
                details = "0 - 75";
            } else if (inputNumber <= 200) {
                totalValue = 75 * 4.85 + (inputNumber - 75) * 6.63;
                details = "76 - 200";
            } else if (inputNumber <= 300) {
                totalValue = 75 * 4.85 + 125 * 6.63 + (inputNumber - 200) * 6.95;
                details = "201 - 300";
            } else if (inputNumber <= 400) {
                totalValue = 75 * 4.85 + 125 * 6.63 + 100 * 6.95 + (inputNumber - 300) * 7.34;
                details = "301 - 400";
            }

            const addedValue = totalValue + (totalValue * 0.05);
            finalValueElement.textContent = `Final Value: ${addedValue.toFixed(2)}`;

            // Add row to the calculation table
            const newRow = calculationTable.insertRow();
            newRow.insertCell().textContent = details;
            newRow.insertCell().textContent = (details === "0 - 75") ? "4.85" : 
                                               (details === "76 - 200") ? "6.63" : 
                                               (details === "201 - 300") ? "6.95" : 
                                               "7.34";
            newRow.insertCell().textContent = totalValue.toFixed(2);
        } else {
            finalValueElement.textContent = "";
            calculationTable.innerHTML = "";
        }
    });
});
