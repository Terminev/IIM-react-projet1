import Footer from './components/Footer';
import Nav from './components/Nav';
import Router from './routes/Routes';
import "./Sass/helpers/_reset.scss"

function App() {
  return (
    <div>
      <Nav/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
