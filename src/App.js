import Header from "./components/header/Header";
import Body from './components/body/Body';
import Footer from './components/progress/ProgressBar';
import Try from './components/progress/Try';
import Last from './components/Last/Last';
import './App.css';
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
      <Try />
      <Blog/>
      <Contact/>
      <Last/>
    </div>
  );
}

export default App;
