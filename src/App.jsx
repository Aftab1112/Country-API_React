// import CountryCard from './components/CountryCard';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchMenu from './components/SearchMenu';

import './App.css';
import CountriesList from './components/CountriesList';


function App() {
  return (
  <>
  <Header/>
  <main>
  <div className="search-filter-container">
  <SearchBar/>
  <SearchMenu/>
  </div>
  <CountriesList/>
  </main>
  </>
  )
}

export default App;
