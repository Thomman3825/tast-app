import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div>
    <Header headings='YO YO ALAN'></Header>
    <div className="App">
      <header className="App-header">
        <div className='box-1'><h1>YO YO SAGAR</h1></div>
        <div className='box-2'><h1>YO YO THOMA</h1></div>
      </header>
      <Footer ftr='&#169; Thomas'></Footer>
    </div>
    </div>
  );
}

export default App;
