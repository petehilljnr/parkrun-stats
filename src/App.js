import './App.css';
import Cards from './pages/Cards';
import Charts from './pages/Charts';
import About from './pages/About';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>        
        <Route path='/about' exact><About/></Route>
        <Route path='/charts' exact><Charts/></Route>
        <Route path='/home' exact><Cards/></Route>
        <Route><Cards/></Route>
      </Switch>
    </>
  );
}

export default App;
