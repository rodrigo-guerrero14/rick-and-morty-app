import './App.css';
import {Route} from 'wouter'
import Header from './components/Header'
import Characters from './components/Characters'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/list-chars" component={Characters} ></Route>
      <Route path="/search" component={Search}></Route>
    </div>
  );
}

export default App;
