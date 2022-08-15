import React, { useEffect, useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(() => {
    const total = localStorage.getItem("total")
    if (!total) {
      return 0
    }
    return Number.parseInt(total, 10)
  });

  const { info } = props;

  useEffect(()=>{
    localStorage.setItem("total",total)
    console.log(localStorage)
  },[total])

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="m-4">
      <div 
      className="flex items-stretch "
      >
        <h2 className="mr-4">{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="flex items-stretch space-x-2 my-4">
        <button
          className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500 disabled:opacity-30"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : "0"}</h3>
        <button 
          className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
          onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
