import React from 'react';
import Input from './Input';
import TodoList from './TodoList';

function Main() {
  return (
    <div>
        <Input/>
        <div className=''>
            <h3>할일</h3>
        </div>
        <TodoList/>

        <div className=''>
            <h3>완료</h3>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Main