const course = {
    courseName: 'Modern Application Development 2',
    courseCode: 'mad2'
};

const student = {
    __proto__: course,           // student inherits from course
    studentName: 'Rakesh',
    studentCity: 'Delhi'
};

// To get inherited property, use dot or bracket notation
console.log(student.courseName);           // Modern Application Development 2

// OR using destructuring with default value (if you really want destructuring)
const { courseName = "not found" } = student;
console.log(courseName);                   // Modern Application Development 2