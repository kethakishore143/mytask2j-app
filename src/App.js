import { Route, Routes} from "react-router-dom";

import Allproducts from "./components/Allproducts";
import Productdetails from "./components/Productdetails";

import "./App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<Allproducts />} />
    <Route exact path="/products/:id" element={<Productdetails />} />
  </Routes>
);

export default App;
