import "../Sass/components/_Nav.scss";
import Dark from "../img/icon/moon.png";
import Light from "../img/icon/sun.png";
import { NavLink } from 'react-router-dom';

const Nav = () => {

    const ChangeMode = () =>{
        if(localStorage.getItem('mode') === "light"){
            localStorage.setItem('mode', 'dark')
            window.location.reload();
        }else{
            localStorage.setItem('mode', 'light')
            window.location.reload();
        }
    }

    return (
        <section id="Nav">
            <div>
                <a href="/">
                    <h1>Alexandre Caramel</h1>
                </a>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
                    <li><NavLink exact to="/cv" activeClassName="active">CV</NavLink></li>
                    <li><NavLink exact to="/projets" activeClassName="active">Projets</NavLink></li>
                    <li><NavLink exact to="/quizz" activeClassName="active">Quizz</NavLink></li>
                    <li><NavLink exact to="/meteo" activeClassName="active">Météo</NavLink></li>
                    {(()=>{
                        if(localStorage.getItem('mode') === 'light'){
                            return(
                                <li><img src={Dark} alt="dark" onClick={()=>ChangeMode()}/></li>
                            )
                        }else{
                            return(
                                <li><img src={Light} alt="light" onClick={()=>ChangeMode()}/></li>
                            )
                        }
                    })()}
                </ul>
            </div>
        </section>
    );
};

export default Nav;