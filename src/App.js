import Footer from './components/Footer';
import Nav from './components/Nav';
import Router from './routes/Routes';
import "./Sass/helpers/_reset.scss"

function App() {

  const body = document.body

  if(localStorage.getItem('mode') === null){
    localStorage.setItem('mode', 'light')
  }

  if(localStorage.getItem('mode') === 'dark'){
    body.className = "dark"
  }else{
    body.className = "light"
  }

  return (
    <div>
      <Nav/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
