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
        <Route path='/home' exact component={Cards} />
        <Route path='/about' exact component={About} />  
        <Route path='/charts' exact component={Charts} /> 
        <Route path='/' exact component={Cards} />
      </Switch>
    </>
  );
}

export default App;
