import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from '../pages/NotFound';
import Home from '../pages/Home';
import Cv from '../pages/Cv';
import Projet from '../pages/Projet';
import ProjetOpen from '../pages/ProjetOpen';


const Rooter = () => (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/projets" component={Projet}/>
                <Route path="/projets/:projetId" component={ProjetOpen}/>
                <Route exact path="/cv" component={Cv}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
);

export default Rooter;