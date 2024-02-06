import uuid from "react-uuid";

export const TODO = TODO;
export const TITLE = TITLE;
export const BODY = BODY;

export const setTodo = (todo) => ({ type: TODO, todo });
export const setTitle = (title) => ({ type: TITLE, title });
export const setBody = (body) => ({ type: BODY, body });

const initialState = [
  {
    id: uuid(),
    title: "",
    body: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "TODO":
      return {
        ...state,
        todo: state.todo,
      }; //TODO: 여기 작성

    case "TITLE":
      return {
        ...state,
        title: action.title,
      }; //TODO: 여기 작성

    case "BODY":
      return {
        ...state,
        body: action.body,
      }; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
