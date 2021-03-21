import './App.css';
import {Route} from 'wouter'
import Header from './components/Header'
import Characters from './components/Characters'
import Search from './components/Search'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Header />
      
      <Route path="/" component={Home} />
      <Route path="/list-chars" component={Characters} ></Route>
      <Route path="/search" component={Search}></Route>
    </div>
  );
}

export default App;
