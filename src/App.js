import React, { useEffect, useState, useLayoutEffect } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import './App.css';

function App() {
  const [items, setItems] = useState(() => {
    let value = JSON.parse(localStorage.getItem("items"));
    if (!value) {
      return [];
    }
    return value;
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    if (items.length === 0) {
      document.title = "Товары отсутсвуют";
    } else {
      document.title = items.length + " товаров";
    }
    console.log(items.length);
  }, [items]);

  console.log(localStorage);
  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: name,
        desc: desc
      }
    ]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="bg-gray-50 mx-8">
      <h2 className="ml-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight my-5" >
      <span className="block  mb-2" >"Best shop panel ever"</span>
      <span className="block text-indigo-600 " >Add items, customise description, delete them, feel free! </span>
    </h2>
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      <div
      className="m-4 "
      >{items.length === 0 && <p className="text-indigo-600">Добавьте первый товар</p>}</div>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
  </div> 
  );
}

export default App;


