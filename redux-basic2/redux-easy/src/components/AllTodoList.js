import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../store/modules/todo";

export default function AllTodoList() {
  const list = useSelector((state) => state.todo.list);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const createTodoItem = () => {
    dispatch(create({ id: list.length, text: inputRef.current.value }));
  };
  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={createTodoItem}>확인</button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
