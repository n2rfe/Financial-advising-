// Event listener for the calculate button
document.getElementById('calculateButton').addEventListener('click', function() {
    // Capture user inputs
    const annualIncome = parseFloat(document.getElementById('annualIncome').value) || 0;
    const livingCost = parseFloat(document.getElementById('livingCost').value) || 0;
    const dependentsCost = parseFloat(document.getElementById('dependentsCost').value) || 0;
    const debts = parseFloat(document.getElementById('debts').value) || 0;
    const monthlyRepayment = parseFloat(document.getElementById('monthlyRepayment').value) || 0;
    const emergencyFund = parseFloat(document.getElementById('emergencyFund').value) || 0;
    const retirementSavings = parseFloat(document.getElementById('retirementSavings').value) || 0;
    const otherSavings = parseFloat(document.getElementById('otherSavings').value) || 0;

    // Basic validation
    if (annualIncome <= 0 || livingCost < 0) {
        document.getElementById('result').innerText = "Please enter valid values for income and living cost.";
        return;
    }

    // Calculate total costs and remaining budget
    const totalCosts = livingCost + dependentsCost + (monthlyRepayment * 12) + debts;
    const remainingBudget = annualIncome - totalCosts;
    const totalSavingsPerYear = (emergencyFund + retirementSavings + otherSavings) * 12;

    // Prepare the feedback message
    let message = '';
    if (remainingBudget > 0) {
        message = `You have a surplus of $${remainingBudget.toFixed(2)} for the year.`;
    } else if (remainingBudget < 0) {
        message = `You are short by $${Math.abs(remainingBudget).toFixed(2)} for the year. Consider reducing expenses.`;
    } else {
        message = "Your budget is perfectly balanced.";
    }

    message += ` You will save a total of $${totalSavingsPerYear.toFixed(2)} this year from your contributions.`;

    // Display the result
    document.getElementById('result').innerText = message;
});