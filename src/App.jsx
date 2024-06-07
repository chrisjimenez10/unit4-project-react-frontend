import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Beverages from "./components/Beverages/Beverages";
import Meats from "./components/Meats/Meats";
import Produce from "./components/Produce/Produce";
import Snacks from "./components/Snacks/Snacks";


const App = () => {

  return (

    
    <main>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/produce" element={<Produce />}>Produce</Route>
          <Route path="/meats" element={<Meats />}>Meats</Route>
          <Route path="/beverages" element={<Beverages />}>Beverages</Route>
          <Route path="/snacks" element={<Snacks />}>Snacks</Route>
      </Routes>
    </main>

  )
}

export default App;
