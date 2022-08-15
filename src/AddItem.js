import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
       <div className="mt-6 md:mt-0 md:col-span-2">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white block flex-centre ">
            <div className="my-4 ml-2">    
        <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="text-sm font-medium text-gray-700"
        />
      </div>
      <div className="my-4 ml-2">
        <label htmlFor="item-description" className="block text-sm font-medium text-gray-700">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="text-sm font-medium text-gray-700"
        />
      </div>
      <div className="my-4">
        <div className="ml-2">{props.valid}</div>
        <input type="submit" className="ml-2 inline-flex justify-center my-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" value="Добавить" />
      </div>
      </div>
     </div>
     </div>
    </form>
  );
}
