import { Item } from "../lib/types";

export const ItemToShow = ({ element }: { element: Item }) => {
  //
  ////UI
  return (
    <>
      <li className="item-to-show" key={element.id}>
        <div>
          <p className="who-name">{element.name}</p>
          <p className="who-purpose">{element.purpose}</p>
        </div>
        <div>
          <p className="who-staff"> {element.collected}</p>
        </div>
      </li>
    </>
  );
};
