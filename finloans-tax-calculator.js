function calculateTaxSavings() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestPaid = parseFloat(document.getElementById("interestPaid").value);
    const principalPaid = parseFloat(document.getElementById("principalPaid").value);
    const taxSlab = parseFloat(document.getElementById("taxSlab").value);
    const taxRegime = document.getElementById("taxRegime").value;

    let taxSavings = 0;

    // Conditions for Old Regime
    if (taxRegime === "old") {
        // Section 80C: Maximum ₹1.5 Lakh principal repayment deduction
        const section80CDeduction = Math.min(principalPaid, 150000);
        
        // Section 24(b): Maximum ₹2 Lakh interest deduction for self-occupied property
        const section24Deduction = Math.min(interestPaid, 200000);
        
        // Total tax savings based on the tax slab
        taxSavings = (section80CDeduction + section24Deduction) * taxSlab;
    }

    // In the New Regime, no deductions are allowed, so tax savings will be ₹0
    if (taxRegime === "new") {
        taxSavings = 0;
    }

    // Display the calculated tax savings
    document.getElementById("taxSavings").innerText = taxSavings.toFixed(2);
}
