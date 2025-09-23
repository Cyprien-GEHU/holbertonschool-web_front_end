// function take 1 argument (numbersOfStudent)

function createClassRoom(numbersOfStudents){
    function studentSeat(seat) {
        return function () {
            return(seat);
        }
    }
    let students = [];
    for (let interation = 0; interation < numbersOfStudents; interation++) {
        students.push(studentSeat(interation + 1));
    }
    return students;
}

let classRoom = createClassRoom(10);
