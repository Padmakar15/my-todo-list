import React from "react";
import "./List.css";

const List = ({ itemList, setItemList }) => {
  const deleteItemFromList = (id) => {
    const newList = itemList.filter((item) => item.id !== id);
    localStorage.setItem("itemList", JSON.stringify(newList));
    setItemList(newList);
  };
  return (
    <div>
      {itemList.map((item, index) => (
        <div key={index} className="item">
          <p>{item.item}</p>
          <button onClick={() => deleteItemFromList(item.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default List;
