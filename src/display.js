import { useState } from "react";

function Display() {
  const [items, setItems] = useState([
    {
      title: "hello",
      description: "hfuihwioweh",
      tech: "hoiewfhwoifhwieo",
      repoLink: "iloveu",
      demoLink: "tellmeyourname",
      image: "iowihweowh",
    },
  ]);

  return (
    <div>
      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}

export default Display;
