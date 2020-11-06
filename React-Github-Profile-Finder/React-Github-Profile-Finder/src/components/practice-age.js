import React, { useState } from "react";

function AgeComponent() {
  const [age, setAge] = useState(22);

  function onClick() {
    setAge(age+1);
  }

  return (
    <div>
      <h2>제 나이는 {age}입니다.</h2>
      <button onClick={onClick}>떡국 한 입</button>
    </div>
  );
}

export default AgeComponent;