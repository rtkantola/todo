import './styles.css';
import {createTask} from './TaskFunctions'


//popup form opening functionality
const tasks = [];

const formFunctions = (function () {
    const form = document.getElementById("form-popup")
    function openForm() {
        form.style.display = "block";
    }
    document.getElementById("createTaskButton").addEventListener("click", openForm);
    form.addEventListener("submit", (e) => {
    
        e.preventDefault();
        form.style.display = "none";
    
        let name = document.getElementById("taskName");
        let description = document.getElementById("taskDescription");
        let priority = document.getElementById("priority");
        
        const task = createTask(name.value, description.value, priority.value)
        tasks.push(task);
        console.log(tasks);
        
    })

})();












