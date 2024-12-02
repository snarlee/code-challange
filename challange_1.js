 function calculateGrade( marks )
 {
if ( marks>79 ){
    return 'A';
}
else if ( marks>=60 )
    {
return 'B';

}
else if ( marks>=50)
    {
return 'C';
}

else if ( marks>=40)
{
    return 'D';}


else 
{
    return'E';
}

 }

 const userMarks=parseInt( prompt )( "Enter Student Marks (0-100:");

 const grade=calculateGrade(userMarks);

 console.log( 'Grade: ${grade}' );
