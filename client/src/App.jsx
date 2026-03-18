import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Form from "./pages/Form.jsx";
import "./App.css";

function App() {
  // set useState
const [allFoodTrucks, setAllFoodTrucks] = useState([]);


  // start with boilerplate fetch request API code
  // try catch sandwich

const getAllFoodTrucks = async () => {
  try {
      `api/get-all-food-trucks`
    const response = await fetch(`api/get-all-food-trucks`);
    const data = await response.json();
    console.log(data);
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
        <Routes>yncAwait
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
