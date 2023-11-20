import { useState } from "react";

function Display() {
  const [items, setItems] = useState(["hello", "iloveu", "tellmeyourname"]);

  return (
    <div>
      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}

export default Display;
