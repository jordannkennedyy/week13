 

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


function addStudent(){
    
}