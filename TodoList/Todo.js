// This file for the classes
// set up basic oprations
class Todo {
    constructor() {
       this.todoList = [] 
    }
    addTodo(newValue) {
        this.todoList.push({id: parseInt(Math.random()*1000).toString(), newValue})
    }
    deleteTodo(id) {
        this.todoList = this.todoList.filter((todo)=> todo.id !== id)
    }
    updateTodo(idToUpdate,  newValueToUpdate) {
        this.todoList = this.todoList.map((todo) => { // itrating each elemet of  array using map function
            if(todo.id === id) return {id: idToUpdate, newValue: newValueToUpdate}
            return todo//if element matches given id then we are returning a new
        })

    }

    isEmpty() {
        return this.todoList.length === 0
    }


    getTodos() {
        return this.todoList
    }

    
}

// Math.floor-- with 34.7...
// reset the aaray with map-- 7z itrate the toddolist