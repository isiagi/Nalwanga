import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";
import Last from './components/last/Last';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
      <Last/>
    </div>
  );
}

export default App;
