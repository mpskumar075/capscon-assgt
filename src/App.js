import logo from './logo.svg';
import './App.css';
import LeftNav from './components/LeftNav';
import BottomNavigation from './components/BottomNavigation';



function App() {
  return (
    <div className="App">
      <div>
      <LeftNav />
      </div>
      
      <BottomNavigation />
    
    </div>
  );
}

export default App;
