const students = [
    {
        name:"Rohit",
        marks: 99,
    },
    {
        name:"sanchit",
        marks: 95,
    },
    {
        name:"tanmay",
        marks:92,
    },
    {
        name:"fd",
        marks:20,
    },
];

function checkResult(students){
    for(let i=0;i<students.length;i++){
        if(students[i].marks > 90){
            console.log(`congrats ${students[i].name}! You have cleared the Exam`);
        }
    }
}

checkResult(students);