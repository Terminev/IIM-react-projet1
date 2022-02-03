import "../Sass/components/_Nav.scss";

const Nav = () => {

    const currentURL = window.location.pathname
    console.log(currentURL);

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
                            </ul>
                        )
                    }
                    else if (currentURL === '/cv') {
                        return (
                            <ul>
                                <li><a href="/">Accueil</a></li>
                                <li><a href="/cv" className="active">CV</a></li>
                                <li><a href="/projets">Projets</a></li>
                            </ul>
                        )
                    }
                    else if (currentURL === '/projets') {
                        return (
                            <ul>
                                <li><a href="/">Accueil</a></li>
                                <li><a href="/cv">CV</a></li>
                                <li><a href="/projets" className="active">Projets</a></li>
                            </ul>
                        )
                    }
                    return null
                })()}
            </div>
        </section>
    );
};

export default Nav;