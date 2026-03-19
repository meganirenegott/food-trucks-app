import { Link, Routes, Route } from "react-router-dom";
import FoodTruckCard from "./pages/FoodTruckCard.jsx";
import Form from "./pages/Form.jsx";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // set useState
const [allFoodTrucks, setAllFoodTrucks] = useState(null);

  // start with boilerplate fetch request API code
  // try catch sandwich

const getAllFoodTrucks = async () => {
  try {
    const response = await fetch(`/api/get-all-food-trucks`);
    const data = await response.json();
    console.log(data, "data from the all food trucks api call");
    setAllFoodTrucks(data);
    } catch (error) {
      console.error('Oopsies! Error fetching data:', error);
    }
  };
  // function to handle state managment

 useEffect(() => {
    getAllFoodTrucks();
  }, []);

  return (
    <>
      <header>
        <nav>
          <Link to="/">Food Trucks App 🚚</Link>
          <Link to="/form">Add Food Truck</Link>
        </nav>
      </header>
      <main>
        <Routes>ncAwait
          <Route path="/" element={<FoodTruckCard />} />
          <Route path="/form" element={<Form />} />
        </Routes>

        <div className="card-container">
        
          {allFoodTrucks && allFoodTrucks.map((uniqueFoodTruck, index) =>  <FoodTruckCard uniqueFoodTruck={uniqueFoodTruck} key={index} /> )}
          

        </div>
      </main>
    </>
  );
}

export default App;
