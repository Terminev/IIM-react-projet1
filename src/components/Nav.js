import "../Sass/components/_Nav.scss";

const Nav = () => {

    const currentURL = window.location.pathname

    return (
        <section id="Nav">
            <div>
                <a href="/">
                    <h1>Alexandre Caramel</h1>
                </a>
                {/* Verifier sur quel URL nous nous trouvons */}
                {(()=> {
                    if (currentURL === '/') {
                        return (
                            <ul>
                                <li><a href="/" className="active">Accueil</a></li>
                                <li><a href="/cv">CV</a></li>
                                <li><a href="/projets">Projets</a></li>
                                <li><a href="/quizz">Quizz</a></li>
                                <li><a href="/meteo">Météo</a></li>
                            </ul>
                        )
                    }
                    else if (currentURL === '/cv') {
                        return (
                            <ul>
                                <li><a href="/">Accueil</a></li>
                                <li><a href="/cv" className="active">CV</a></li>
                                <li><a href="/projets">Projets</a></li>
                                <li><a href="/quizz">Quizz</a></li>
                                <li><a href="/meteo">Météo</a></li>
                            </ul>
                        )
                    }
                    else if (currentURL === '/projets') {
                        return (
                            <ul>
                                <li><a href="/">Accueil</a></li>
                                <li><a href="/cv">CV</a></li>
                                <li><a href="/projets" className="active">Projets</a></li>
                                <li><a href="/quizz">Quizz</a></li>
                                <li><a href="/meteo">Météo</a></li>
                            </ul>
                        )
                    }else if (currentURL === '/quizz') {
                        return (
                            <ul>
                                <li><a href="/">Accueil</a></li>
                                <li><a href="/cv">CV</a></li>
                                <li><a href="/projets">Projets</a></li>
                                <li><a href="/quizz" className="active">Quizz</a></li>
                                <li><a href="/meteo">Météo</a></li>
                            </ul>
                        )
                    }else if (currentURL === '/meteo') {
                        return (
                            <ul>
                                <li><a href="/">Accueil</a></li>
                                <li><a href="/cv">CV</a></li>
                                <li><a href="/projets">Projets</a></li>
                                <li><a href="/quizz" >Quizz</a></li>
                                <li><a href="/meteo" className="active">Météo</a></li>
                            </ul>
                        )
                    }else{
                        return (
                            <ul>
                                <li><a href="/">Accueil</a></li>
                                <li><a href="/cv">CV</a></li>
                                <li><a href="/projets">Projets</a></li>
                                <li><a href="/quizz">Quizz</a></li>
                                <li><a href="/meteo">Météo</a></li>
                            </ul>
                        )
                    }
                })()}
            </div>
        </section>
    );
};

export default Nav;