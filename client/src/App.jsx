import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Form from "./pages/Form.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import FoodTruckCard from "./components/FoodTruckCard.jsx";

function App() {
  // set useState
  const [allFoodTrucks, setAllFoodTrucks] = useState(null);
  const [foodTrucksCount, setFoodTrucksCount] = useState(null);

  // start with boilerplate fetch request API code
  // try catch sandwich

  const getAllFoodTrucks = async () => {
    try {
      const response = await fetch(`/api/get-all-food-trucks`);
      const data = await response.json();
      setAllFoodTrucks(data);
    } catch (error) {
      console.error('Oopsies! Error fetching data:', error);
    }
  };
  // function to handle state managment

 
  // api endpoint for counter /get-food-trucks-count
  const getAllFoodTrucksCount = async () => {
    try {
      const response = await fetch(`/api/get-food-trucks-count`);
      const data = await response.json();
      console.log(data, "food trucks count total");
      setFoodTrucksCount(data);
    } catch (error) {
      console.error('Oopsies! Error fetching data:', error);
    }
  };
    

  useEffect(() => {
    getAllFoodTrucks();
  }, []);
  
  useEffect(() => {
    getAllFoodTrucksCount();
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
        <Routes>
          <Route path="/" element={<Home allFoodTrucks={allFoodTrucks} foodTrucksCount={foodTrucksCount} />} />
          <Route path="/form" element={<Form />} />
        </Routes>

       
      </main>
    </>
  );
}

export default App;
