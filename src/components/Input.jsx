import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBody, setTitle, setTodo } from '../redux/modules/todos';
import uuid from 'react-uuid';

function Input() {
    //title, onchangeTitle, body, onchangeBody, clickHandler
    const dispatch = useDispatch();
    const { todo, title, body } = useSelector((state) => ({
        todo: state.todo,
        title: state.title,
        body: state.body
    }));

    const clickHandler = (event) => {
        if(title && body) {
            const newTodo = {
                id: uuid(),
                title: title,
                body: body,
            };
            dispatch(setTodo([newTodo,...todo]));
            dispatch(setTitle(""));
            dispatch(setBody(""));
        } else {
            alert("제목과 내용을 입력해주세요");
        }
    };
    
  return (
    <div>
        <p>제목 : <input value={title} onChange={(e) => {
            dispatch(setTitle(e.target.value));
        }}/></p>
        <p>내용 : <input value={body} onChange={(e) => {
            dispatch(setBody(e.target.value));
        }}/></p>
        <button onClick={clickHandler}></button>
    </div>
  )
}

export default Input