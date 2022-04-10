import { useState } from "react";

export const Inventory = () => {
  const [book, setBook] = useState(5);
  const [notebook, setNotebook] = useState(6);
  const [pen, setPen] = useState(7);


  function Like(num, varr, set){
    set(varr+num);
  }

  // let total;
  function Total(book,notebook,pen){
    return  book+notebook+pen;
  }
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "30px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>Like(1, book, setBook)}>+</button>
        <button className="circlularButton" onClick={()=>Like(-1, book, setBook)}>-</button>
        <span>{book}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton"  onClick={()=>Like(1, notebook, setNotebook)}>+</button>
        <button className="circlularButton" onClick={()=>Like(-1, notebook, setNotebook)}>-</button>
        <span>{notebook}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton"  onClick={()=>Like(1, pen, setPen)}>+</button>
        <button className="circlularButton" onClick={()=>Like(-1, pen, setPen)}>-</button>
        <span>{pen}</span>
      </div>
            {/*calculate total and show it*/}
      total: {Total(book,notebook,pen)}
    </div>
  );
};