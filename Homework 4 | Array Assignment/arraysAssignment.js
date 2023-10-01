//Object required by instructions
const students = [

    { name: 'Alice', grades: [85, 92, 78, 90] },
   
    { name: 'Bob', grades: [75, 88, 95, 100] },
   
    { name: 'Charlie', grades: [60, 72, 68, 74] },
   
    { name: 'David', grades: [92, 88, 95, 98] },
   
    { name: 'Eve', grades: [100, 100, 100, 100] }
   
    ];

//Prints all students names
document.querySelector("p").innerHTML = "Student Name List: " + students.map(student => student.name); 
  
//If all students passed the class
//This defines the grades as a variable (const)
const allPassed = students.every(student => passClass(student.grades));
//This checks if the grades are better than 60
function passClass(grades) {
    return grades.every(grade => grade >= 60);
  }

//console.log(allPassed) (UNUSED)
//Still really don't know how to use docuemnt.querySelector//
document.querySelector('p:nth-of-type(2)').innerHTML = "All students have passed the class: " + allPassed;

//For if any student(s) got 100's (uses some)
const anyAced = students.some(student => aced(student.grades));
//Check for 100's
function aced(grades) {
    return grades.some(grade => grade === 100);
}

//console.log(anyAced) (UNUSED)
document.querySelector('p:nth-of-type(3)').innerHTML = "Any student with a perfect score: " + anyAced;

//For top student list
//This is to find the averages (Did own research and will use filter array for this)
function calculateAverage(grades) {
    const sum = grades.reduce((accumulator, grade) => accumulator + grade, 0);
    return sum / grades.length;
}


  //Filter an average of 90 (or higher)
  const ninetyOrMore = students.filter(student => calculateAverage(student.grades) >= 90);

document.querySelector('p:nth-of-type(4)').innerHTML = "Top student List (avg grade of 90 or higher): " + ninetyOrMore;

//Students names and average grades (reuses average grades from previous one?)
const studentInfo = students.map(student => {
    //return `${student.name}: Average Grade ${averageGrade}`; (UNUSED)
    //For loop (UNUSED)
    //for (const student of students) {
        const averageGrade = calculateAverage(student.grades);
        //Creates list items (li) in the ul
        const listItem = document.createElement("li");
            //Uses query selector
        listItem.innerHTML = `${student.name}, Average Grade: ${averageGrade}`;
        document.querySelector('ul').appendChild(listItem);
     // }
  });

//Total grades
const totalGrades = students.reduce((accumulator, students) => accumulator + students.grades.length, 0);
document.querySelector('p:nth-of-type(6)').innerHTML = "Total Number of Grades: " + totalGrades;