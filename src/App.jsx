import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchMenu from './components/SearchMenu';


function App() {
  return (
  <>
  <Header/>
  <main>
  <div className="search-filter-container">
  <SearchBar/>
  <SearchMenu/>
  </div>
  </main>
  </>
  )
}

export default App;
