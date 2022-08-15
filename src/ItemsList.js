import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <div className="mt-6 md:mt-0 md:col-span-2">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
              <div className="col-span-6 sm:col-span-3"></div>
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
          className="inline-flex justify-center ml-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
    </div>
    </div>
    </div>
  );
}