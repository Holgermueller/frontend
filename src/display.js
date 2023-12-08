import { useState } from "react";
import demo from "./assets/images/demo.png";

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
    <section id="projectDisplay">
      {items.map((item, i) => (
        <div className="display-card" key={i}>
          <div className="text-container">
            <p>{item.title}</p>
            <p>{item.tech}</p>
            <p>{item.description}</p>
            <div className="links-container">
              <div>,ink</div>
            </div>
          </div>
          <div className="image-container">
            <img src={demo} alt="mypic" width={100}></img>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Display;
