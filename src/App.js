import React, { useState } from "react";
import List from "./List";
import "./App.css";

const App = () => {
  const [currentItem, setCurrentItem] = useState("");
  const localItem = JSON.parse(localStorage.getItem("itemList"));
  const [itemList, setItemList] = useState(localItem ? localItem : []);
  const addItemToList = () => {
    setItemList([
      ...itemList,
      { item: currentItem, id: Math.floor(Math.random() * 1000000) },
    ]);
    localStorage.setItem("itemList", JSON.stringify(itemList));
    setCurrentItem("");
  };
  return (
    <div className="App">
      <div className="App-header">
        <div className="wrapper">
          <div className="input-wrapper">
            <input
              value={currentItem}
              placeholder="write note here.."
              onChange={(e) => setCurrentItem(e.target.value)}
            />
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} setItemList={setItemList} />
        </div>
      </div>
    </div>
  );
};

export default App;
