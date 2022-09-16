import './App.css';
import BookList from './Components/BookList';
import ThemeContextProvider from './Components/Contents/ThemeContext';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar/>
     <BookList/>
      </ThemeContextProvider>
   
    </div>
  );
}

export default App;
