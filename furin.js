var studentMarks= {
    Manisha  : 11,
    Nithisha : 36,
    Karthika : 76
};
for(var student in studentMarks)
{
    if(studentMarks.hasOwnProperty(student))
    {
        console.log(student + "'studentMarks:" + studentMarks[student]);
    }
}
