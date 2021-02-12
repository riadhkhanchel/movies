// this CSS file for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Components/Navbar/Navbar"
import MoviesList from "./Components/MoviesList/MoviesList"
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <MoviesList />
    </div>
  );
}

export default App;
