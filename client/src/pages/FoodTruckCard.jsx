import "../App.css";




function FoodTruckCard( {uniqueFoodTruck} ) {
  return (
    <>
      <div className="foodTruck-card">
      <h2>{uniqueFoodTruck.name}</h2>
      <p>{uniqueFoodTruck.id}</p>
      <p>{uniqueFoodTruck.current_location}</p>
      <p>{uniqueFoodTruck.daily_special}</p>
      <p>{uniqueFoodTruck.slogan}</p>
      <p>{uniqueFoodTruck.has_vegan_options}</p>
      <p>{uniqueFoodTruck.price_level}</p>
      <p>{uniqueFoodTruck.rating}</p>
    </div>

    </>
  );
}

export default FoodTruckCard;
