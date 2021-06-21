import { useState } from "react";

export default function Button() {
  const [message, setMessage] = useState("버튼이 눌리지 않음");
  return (
    <div>
      <button onClick={click}>button</button>
      <p>{message}</p>
    </div>
  );
  function click() {
    setMessage("버튼이 방금 눌림");
  }
}
