import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import data from "./data";

function App() {
  const [myData, setData] = useState(data);

  function removeCard(id) {
    const newTours = myData.filter((tour) => tour.id !== id);
    setData(newTours);
  }

  if (myData.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col w-screen h-screen gap-1">
        <h2>No Tours Left</h2>
        <button
          onClick={() => setData(data)}
          className="border bg-gray-200 py-0.5 px-8 rounded-md"
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="bg-slate-200 py-3 flex flex-col items-center">
      <h1 className="text-5xl font-bold border-dashed border-4 border-blue-500 p-3 rounded-xl">
        Plan with Love
      </h1>
      <Cards myData={myData} removeCard={removeCard} />
    </div>
  );
}

export default App;
