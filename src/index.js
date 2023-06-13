class Student{
constructor(rollNo, firstName, lastName,totalMarks) {
this.rollNo = rollNo;
this.firstName = firstName;
this.lastName = lastName;
this.marksArr=[];
this.totalMarks=0;
}
import {Marks} from './Marks.js';

//sumOfMarks method
sumOfMarks(subjectName,mark){
const newMarks=new Marks(subjectName,mark);
this.marksArr.push(newMarks);
this.totalMarks += mark;
}

//Total marks calculation method
totalMarksCalculation(){
this.totalMarks=0;
this.marksArr.forEach((mark) => {
this.totalMarks +=mark.mark;
                              }
                  );
                       }
//Total percentage Calculation method
totalPercentageCalculation(){
return this.totalMarks/(this.marksArr.length *100)*100;

};
static studentWithDistinction = (students) => {
const studentWithDistinction=students.filter((student) => student.totalMarks >=200);
return studentWithDistinction.length;
};

static studentDetailsWithRollNo =(students,rollNo) => {
const student = students.find((student) => student.rollNo === rollNo);
if (student){
console.log(`${Student.rolNo} ${Student.firstName} ${Student.lastName}`);
}
else{
console.log("NO Data Found for Student");

};
}
}
//data of first student

const  firstStudent=new Student(01,'Emma','Watson');
firstStudent.sumOfMarks(70,'Maths');
firstStudent.sumOfMarks(60,'science');
firstStudent.sumOfMarks(50,'Social');

//data of second student

const  secondStudent=new Student(02,'Vin','Diesel');
secondStudent.sumOfMarks(90,'Maths');
secondStudent.sumOfMarks(85,'Science');
secondStudent.sumOfMarks(78,'Social');

//data of third student

const  ThirdStudent=new Student(03,'Jack','Sparrow');
ThirdStudent.sumOfMarks(70,'Maths');
ThirdStudent.sumOfMarks(65,'Science');
ThirdStudent.sumOfMarks(94,'Social');

// array of students
const students=[firstStudent,secondStudent,ThirdStudent];

students.forEach((student)=> student.totalMarksCalculation());
 const percentage= student.map((student) => student.totalPercentageCalculation());
 console.log('Percentage :' ,percentage);

 const studentWithDistinction = Student.studentWithDistinction(students);
 console.log(`Student with Distinction: ${studentWithDistinction}`);

 Student.studentDetailsWithRollNo(students,3);


