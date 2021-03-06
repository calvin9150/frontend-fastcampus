import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../store/modules/todo";
import { done } from "../store/modules/todo";

export default function AllTodoList() {
  const list = useSelector((state) => state.todo.list).filter(
    (item) => !item.done
  );
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
          <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch(done(item.id))}>완료</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
