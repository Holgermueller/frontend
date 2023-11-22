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
        <div key={i}>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Display;
