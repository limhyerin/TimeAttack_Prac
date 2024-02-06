import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function TodoList() {
    const dispatch = useDispatch();
    const { todo } = useSelector((state) => ({
        todo: state.todo,
        title: state.title,
    }));
  return (
    <div>
        {
            todo.filter((item) => !item.isDone).map((item) => {
                return (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <div>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TodoList