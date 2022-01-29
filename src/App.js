import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/restaurants/:id' component={RestaurantDetails} />
      </div>
    </Router>
  );
}

export default App;