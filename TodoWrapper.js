import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'
import { DeleteConfirmationModal } from './DeleteConfirmationModal' // Ensure this path is correct
uuidv4()

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const [taskToDelete, setTaskToDelete] = useState(null) // New state

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const confirmDeleteTodo = (task) => { // New function
        setTaskToDelete(task)
    }

    const deleteTodo = () => { // New function
        setTodos(todos.filter(todo => todo.id !== taskToDelete.id))
        setTaskToDelete(null)
    }

    const cancelDelete = () => { // New function
        setTaskToDelete(null)
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>Your To-Do List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={index} />
                ) : (
                    <Todo task={todo} key={index}
                        toggleComplete={toggleComplete}
                        deleteTodo={() => confirmDeleteTodo(todo)} // Updated prop
                        editTodo={editTodo} />
                )
            ))}
            <DeleteConfirmationModal // New component
                show={taskToDelete !== null}
                task={taskToDelete}
                onDelete={deleteTodo}
                onCancel={cancelDelete}
            />
        </div>
    )
}