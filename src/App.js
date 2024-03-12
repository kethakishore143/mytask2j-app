import { Route, Switch, BrowserRouter } from "react-router-dom";
import Allproducts from "./components/Allproducts";
import Productdetails from "./components/Productdetails";
import "./App.css";

const App = () => (
  
    <Switch>
      <Route exact path="/mytask2j-app" component={Allproducts} />
      <Route exact path="/products/:id" component={Productdetails} />
    </Switch>
  
);

export default App;
