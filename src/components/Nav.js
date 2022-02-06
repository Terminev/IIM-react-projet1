import "../Sass/components/_Nav.scss";
import { NavLink } from 'react-router-dom';
import DarkModeSwitcher from "./DarkModeSwitcher";

const Nav = () => {

    return (
        <section id="Nav">
            <div>
                <NavLink exact to="/">
                    <h1>Alexandre Caramel</h1>
                </NavLink>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
                    <li><NavLink exact to="/cv" activeClassName="active">CV</NavLink></li>
                    <li><NavLink to="/projets" activeClassName="active">Projets</NavLink></li>
                    <li><NavLink to="/quizz" activeClassName="active">Quizz</NavLink></li>
                    <li><NavLink exact to="/meteo" activeClassName="active">Météo</NavLink></li>
                    <DarkModeSwitcher/>
                </ul>
            </div>
        </section>
    );
};
export default Nav;