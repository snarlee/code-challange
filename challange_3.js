 
//initialising calculation

function calculateNetSalary( basicSalary, benefits ) {

    //calculate gross salary

    const grossSalary = basicSalary + benefits;

    // Calculate NHIF deductions based on monthly gross salary  
    
    let nhifDeduction;

    if (grossSalary <= 5999) {
        nhifDeduction = 150;

    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;

    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;

    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;

    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;

    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;

    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;

    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;

    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;

    } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;

    } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;

    } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;

    } else if (grossSalary <= 69999) {
        nhifDeduction = 1300

    } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;

    } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;

    } else if (grossSalary <= 99999) { 
        nhifDeduction = 1600;

    } else {
        nhifDeduction = 1700;

    }
    // Calculate NSSF deductions (currently 6% of gross salary) 

     const nssfDeduction = grossSalary * 0.06;
    // Calculate PAYE using KRA tax rates 

    let taxableIncome = grossSalary - nhifDeduction - nssfDeduction;

    let payee = 0;

    if (taxableIncome <= 24000) { 
        payee = taxableIncome * 0.1; 

    } else if (taxableIncome <= 32333) {
         payee = 2400 + (taxableIncome - 24000) * 0.25; 

    } else { 
        payee = 5208.33 + (taxableIncome - 32333) * 0.3; }

// Calculate net salary    

const netSalary = grossSalary - nhifDeduction - nssfDeduction - payee;

// Display results    

console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);console.log(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`);

console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);

console.log(`PAYE: ${payee.toFixed(2)}`);

console.log(`Net Salary: ${netSalary.toFixed(2)}`);

}
