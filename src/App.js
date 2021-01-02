import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ShipingForm from './views/ShipingForm';
import ListShipings from './views/ListShipings';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar navLink={{ path: "/orders", Lable: "View Orders" }} />
            <ShipingForm />
          </Route>
          <Route path="/orders">
            <NavBar navLink={{ path: "/", Lable: "Home" }} />
            <ListShipings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App