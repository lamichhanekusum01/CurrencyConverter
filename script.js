function convertUSDToCAD() {
    // Get the amount in USD entered by the user
    var usAmount = document.getElementById('usAmount').value;

    // Perform the conversion using a conversion function (replace this with your actual conversion logic)
    var cadAmount = usAmount * 1.25; // Example conversion rate (1 USD = 1.25 CAD)

    // Update the text content of the <p> element with the calculated rate
    document.getElementById('cadRate').value = cadAmount.toFixed(3); // Limit to 2 decimal places
}
