 This repository contains JavaScript code implementations for three programming challenges:
 
 * Student Grade Generator: Calculates a student's grade based on their marks. 
 * Speed Detector: Determines the appropriate action based on a car's speed. 
 * Net Salary Calculator: Calculates an individual's net salary after deductions.
 * 
(a) Challenge 1: Description:

   Takes a student's marks as input. 
   Determines the corresponding grade based on a grading scale.
    
 Implementation: 
 
   The calculateGrade function takes the marks as input. 
   It uses a series of if-else conditions to check the mark range and assign the appropriate grade.
   
(b)Challenge 2: Speed Detector

Description:

  Takes a car's speed as input.
  Determines if the speed is within the speed limit.
  Calculates demerit points for exceeding the speed limit.
  Suspends the license if the demerit points exceed a threshold.
  
Implementation:

  The speedDetector function takes the car's speed as input.
  It checks if the speed is within the speed limit.
  If the speed exceeds the limit, it calculates demerit points based on the excess speed.
  It prints a message indicating the number of points or a license suspension if applicable.
  
(c)Challenge 3: Net Salary Calculator

Description:

  Takes a basic salary and benefits as input.
  Calculates the gross salary, NHIF deductions, NSSF deductions, and PAYE.
  Determines the net salary by subtracting deductions from the gross salary.
  
Implementation:

  The calculateNetSalary function takes the basic salary and benefits as input.
  It calculates the gross salary by adding the basic salary and benefits.
  It determines the NHIF deduction based on the gross salary using a series of if-else conditions.
  It calculates the NSSF deduction as a percentage of the gross salary, with a cap.
  It calculates the PAYE using tax brackets and rates.
  It subtracts the NHIF, NSSF, and PAYE deductions from the gross salary to get the net salary.
