import FoodTruckCard from "../components/FoodTruckCard.jsx";


function Home({ allFoodTrucks, foodTrucksCount }) {
  return (
    <>
      {foodTrucksCount && (<h2>Number of food trucks in your area: {foodTrucksCount.count}</h2>)}
    <div className="card-container">
      {allFoodTrucks && allFoodTrucks.map((uniqueFoodTruck, index) =>  <FoodTruckCard uniqueFoodTruck={uniqueFoodTruck} key={index} /> )}
      </div>

    </>
  );
}




export default Home;
