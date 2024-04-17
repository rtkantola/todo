

const tasks = [

]

// Create task
const createTask = (name, description, priority) => {
    const task = {};
    task.name = name;
    task.description = description;
    task.priority = priority
    console.log("createtask")
    return task;
}
const dog = createTask("wuf", "asd", "asd")
console.log(dog.name);
// Delete task
const deleteTask = (task) => {
    //// miten poistetaa
}

// Modify task

const modifyName = (task, newName) => {
    task.name = newName;
}
const modifyDescription = (task, newDescription) => {
    task.description = newDescription;
}
const modifyDeadline = (task, newDeadline) => {
    task.deadline = newDeadline;
}


//Muokkaa taskin nimea, prioritya, deadlinea ja descriptionia -- Muunna kaikki omiksi functioiksi
export { createTask }