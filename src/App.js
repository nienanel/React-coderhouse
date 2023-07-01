import './App.css';
import NavBar from './Components/NavBar';
import Greeting from './Components/PropGretting';
import SkiItemList from './Components/SkiesCatalogue';

function App() {

  return (
    <div className="App">
      <NavBar />
      <>
      <Greeting />
      </>
      <>
      <SkiItemList />
      </>
    </div>
    
  );
}

export default App;

