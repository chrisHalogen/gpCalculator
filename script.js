class Course {
    constructor(course_code = "ABC123", unit = 0, title = "Untitled", score = 0) {

        this.code = code;
        this.title = title;
        this.unit = unit;
        this.score = score;
        this.assignGrade(score);

    }

    assignGrade(grade) {
        if (grade >= 70)
            this.grade = "A";
        else if (grade >= 60)
            this.grade = "B";
        else if (grade >= 50)
            this.grade = "C";
        else if (grade >= 45)
            this.grade = "D";
        else if (grade >= 40)
            this.grade = "E";
        else
            this.grade = "F";
        this.assignPoints(this.grade);
    }

    assignPoints(grade) {
        if (grade == "A")
            this.points = 5;
        else if (grade == "B")
            this.points = 4;
        else if (grade == "C")
            this.points = 3;
        else if (grade == "D")
            this.points = 2;
        else if (grade == "E")
            this.points = 1;
        else
            this.grade = "F";
    }



}
const courselist = [];
const courselistDiv = document.getElementById('addedCourses');
let totalcourses = 0;
let totalunits = 0;
let totalscore = 0;
const form = document.getElementById('form');
const addCourseBtn = document.getElementById('btnAddCourse');

document.getElementById("btnCalc").disabled = true;

function addCourse(e) {
    e.preventDefault();
    const score = Number(form['score'].value);
    const code = form['code'].value;
    const title = form['title'].value;
    const unit = Number(form['unit'].value);
    const letters = /^([A-Za-z 1-9])+$/;
    const alphaNumeric = /^[A-Za-z0-9]+$/;

    if (score >= 0 && score <= 100) {

        if (unit > 0 && unit <= 6) {

            if (title.match(letters)) {

                if (code.match(alphaNumeric)) {


                    const course = new Course(code, unit, title, score);
                    totalunits += unit;
                    courselist.push(course);

                    let cont = document.getElementById("addedCourses");
                    let ttext = document.createElement("p");
                    ttext.innerHTML = "Course title:" + title;
                    let ctext = document.createElement("p");
                    ctext.innerHTML = "Course Code :" + code;
                    let utext = document.createElement("p");
                    utext.innerHTML = "Course Unit :" + unit;
                    let stext = document.createElement("p");
                    stext.innerHTML = "Course Score:" + score;
                    let idiv = document.createElement("div")
                    idiv.setAttribute("class", "eachCourse")
                    ttext.setAttribute("id", "summ");
                    ctext.setAttribute("id", "summ");
                    utext.setAttribute("id", "summ");
                    stext.setAttribute("id", "summ");
                    idiv.appendChild(ttext);
                    idiv.appendChild(ctext);
                    idiv.appendChild(utext);
                    idiv.appendChild(stext);
                    cont.appendChild(idiv);
                    let odiv = document.getElementById("summCourses");
                    let ttext1 = document.createElement("p");
                    ttext1.innerHTML = "Course title:" + title;
                    let ctext1 = document.createElement("p");
                    ctext1.innerHTML = "Course Code :" + code;
                    let utext1 = document.createElement("p");
                    utext1.innerHTML = "Course Unit :" + unit;
                    let stext1 = document.createElement("p");
                    stext1.innerHTML = "Course Score:" + score;
                    grade2 = "F";
                    point2 = "1";
                    if (score >= 70) {
                        grade2 = "A";
                        point2 = 5;
                    }
                    else if (score >= 60) {
                        grade2 = "B";
                        point2 = 4;
                    }
                    else if (score >= 50) {
                        grade2 = "C";
                        point2 = 3;
                    }
                    else if (score >= 45) {
                        grade2 = "D";
                        point2 = 2;
                    }
                    else if (score >= 40) {
                        grade2 = "E";
                        point2 = 1;
                    }
                    else {
                        grade2 = "F";
                        point2 = 0;
                    }

                    let grade1 = document.createElement("p");
                    grade1.innerHTML = "Course Grade:" + grade2;
                    let point1 = document.createElement("p");
                    point1.innerHTML = "Course Point:" + point2;
                    let pbu = unit * point2;
                    let pointbyunit = document.createElement("p");
                    pointbyunit.innerHTML = "Points By Unit:" + pbu;
                    let idiv1 = document.createElement("div")
                    idiv1.setAttribute("class", "eachCourse")
                    ttext1.setAttribute("id", "summ");
                    ctext1.setAttribute("id", "summ");
                    utext1.setAttribute("id", "summ");
                    stext1.setAttribute("id", "summ");
                    grade1.setAttribute("id", "summ");
                    point1.setAttribute("id", "summ");
                    pointbyunit.setAttribute("id", "summ");
                    idiv1.appendChild(ttext1);
                    idiv1.appendChild(ctext1);
                    idiv1.appendChild(utext1);
                    idiv1.appendChild(stext1);
                    idiv1.appendChild(grade1);
                    idiv1.appendChild(point1);
                    idiv1.appendChild(pointbyunit);
                    odiv.appendChild(idiv1);





                } else {
                    alert('Error! Code can only contain letters and numbers');

                }


            } else {
                alert('Error! Title should only contain letters');
            }

        } else {
            alert('Error! Unit can only be between 1 and 6');
        }


    } else {
        alert('Error! Score can only be between 0 and 100');
    }


    console.log(courselist);

    form['score'].value = "";
    form['code'].value = "";
    form['title'].value = "";
    form['unit'].value = "";

    if (courselist.length !== 0){
        document.getElementById("btnCalc").disabled = false;
    }

}
addCourseBtn.addEventListener('click', addCourse);
let btnCalc = document.getElementById("btnCalc");
function gpCalc() {
    document.getElementById("inputDiv1").style.display="none";

    o = courselist.length;
    let x = 0;
    let y = 0;
    for (let item = 0; item < courselist.length; item++) {
        x += courselist[item].unit;

        let point2 = 0;
        if (courselist[item].score >= 70) {
            point2 = 5;
        }
        else if (courselist[item].score >= 60) {
            point2 = 4;
        }
        else if (courselist[item].score >= 50) {
            point2 = 3;
        }
        else if (courselist[item].score >= 45) {
            point2 = 2;
        }
        else if (courselist[item].score >= 40) {
            point2 = 1;
        }
        else {
            point2 = 0;
        }
        y = y + (point2 * courselist[item].unit);

    }
    let ttext = document.createElement("h2");
    ttext.innerHTML = "Total number of Courses Taken: " + o;
    let ctext = document.createElement("h2");
    ctext.innerHTML = "Total number of Units Taken (x): " + x;
    let utext = document.createElement("h2");
    utext.innerHTML = "Total Points by Units Taken(y) :" + y;
    let stext = document.createElement("h2");
    stext.innerHTML = "GPA = y / x ";
    let gtext = document.createElement("h1");
    y = y / x;
    y = y.toFixed(2) ;
    gtext.innerHTML = y;

    let cont = document.getElementById("resultDiv");
    let idiv = document.createElement("div")
    ttext.setAttribute("id", "sun");
    ctext.setAttribute("id", "sun");
    utext.setAttribute("id", "sun");
    gtext.setAttribute("id", "result");
    stext.setAttribute("id", "sun");

    idiv.appendChild(ttext);
    idiv.appendChild(ctext);
    idiv.appendChild(utext);
    idiv.appendChild(stext);
    idiv.appendChild(gtext);
    cont.appendChild(idiv);

    document.getElementById("outputDiv1").style.display="flex";
    
}
btnCalc.addEventListener("click",gpCalc);
document.getElementById("calcAgain").addEventListener("click", function(){
    location.reload();
})