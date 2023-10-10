import React, { useState } from "react";
import "./App.css";
import TodoLists from "./components/TodoLists";

const App = () => {
  const [InputList, setInputLists] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputLists(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, InputList];
    });
    setInputLists("");
  };

  const deleteItems = (id) => {
    console.log('deleted')
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id
      })
    })
}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={InputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            <li>{InputList}</li>
            <ol>
              {Items.map((itemval, index) => {
                return <TodoLists key={index} id={index} text={itemval} onSelect={deleteItems} />;
              })}
            </ol>
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
