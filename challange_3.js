
function calculateNetSalary( basicSalary, benefits )

{

// Calculate gross salary

const grossSalary = basicSalary + benefits;

// Calculate nhif deductions ( of 2023 )

let nhifDeduction;

if ( grossSalary<=5999 )
{


nhifDeduction = 150;

}

else if ( grossSalary <= 7999 )

{

nhifDeduction = 300;
}

else if(grossSalary<=11999 )

{

nhifDeduction = 400;

else if (grossSalary<=14999) {

nhifDeduction = 500;

}
else if (grossSalary<=19999)
{

nhifDeduction = 600;

}

else if ( grossSalary<=24999 )
{
//nhif deduction
nhifDeduction=750;

}
else if ( grossSalary<=9999 )
{
//nhif deduction
nhifDeduction=850;
//end
}
//nhif deduction
else if ( grossSalary<=34999 )

_nhifDeduction_ = 900;

} else if (_grossSalary_ <=39999) {

_nhifDeduction_ = 950;

}

else if (_grossSalary_<= 44999 )
{


_nhifDeduction_=1000;


}

else if ( grossSalary<=49999 )

{


nhifDeduction=1100;

}

else if ( grossSalary<=59999 )
{

nhifDeduction= 1200;


}

else if ( grossSalary <=69999 )

{

nhifDeduction = 1300;
}

else if ( grossSalary <= 79999 )

{

nhifDeduction = 1400;

}
else if ( grossSalary <= 89999 )

{

nhifDeduction = 1500;

}

else if ( grossSalary <= 99999 )

{





nhifDeduction = 1600;

}

else

{

nhifDeduction= 700;
}

// calculate nssf deductions ( of 2023 )

const nssfDeduction = Math.min ( grossSalary * 0.06, 2000 );

// Calculate paye using Kra tax rates ( of 2023 )

const taxableIncome = grossSalary-nhifDeduction-nssfDeduction;
let payee = 0;


if ( taxableIncome <= 24000 )

{

console.log

payee = taxableIncome * 0.1;

}

else if ( taxableIncome <= 32333)

payee = 2400 + ( taxableIncome - 24000 ) * 0.25;

}
else
{

payee = 5208.33 + (taxableIncome - 32333) * 0.3;

}

// Calculate net salary



const netSalary = grossSalary - nhifDeduction - nssfDeduction - payee;

// show results

console.log( `Gross Salary: ${ grossSalary.toFixed (2 ) } ` );

console.log( ` nhif Deduction: ${nhifDeduction.toFixed(2)}`);

console.log( ` nssf Deduction: ${nssfDeduction.toFixed(2)}`);





console.log( ` paye: ${payee.toFixed(2)}`);

console.log( ` net Salary: ${ netSalary.toFixed ( 2 ) } ` );

}

const basicSalary = 50000;

const benefits = 10000;
calculateNetSalary( basicSalary, benefits );
