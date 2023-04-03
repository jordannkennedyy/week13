 

//1. find element
const bodyRef = document.body;

let students = []

// 2. funciton to respond 
function clicks(event){
    if (event.target.tagName === "BUTTON"){
        // how to find which button is clicked
        if(event.target.textContent === "Submit"){
            const firstnameinput = document.querySelector("#firstname");
            const lastnameinput = document.querySelector("#lastname");
            const programname = document.querySelector("#progname");

            let student = {
                firstName: firstnameinput.value,
                lastName: lastnameinput.value,
                progname: programname.value,
            };

            students.push(student);
            addStudent(student);
            // check if an entry with students info is in the array - dont push

            firstnameinput.value = '';
            lastnameinput.value = '';
            programname.value = '';

            console.log(student);

        }
        else if (event.target.id === "background_button"){
            // background button was clicked

        }
    }
   

}

//3. add event listner
bodyRef.addEventListener("click", clicks)


function addStudent(studentobject){
    // create li
    const new_li = document.createElement('li')
    // select two uls using ID
    const CIT = document.querySelector('#CIT')
    const CST = document.querySelector('#CST') 
    // update textContent of the li using students firstname and last name
    new_li.textContent = `${studentobject["firstName"]} ${studentobject['lastName']}`;
    if(studentobject['progname'] === 'CIT'){
        CIT.appendChild(new_li)
    } else if (studentobject['progname'] === 'CST'){
        CST.appendChild(new_li)
    }
    // using student progname decide which ul to append li to
}