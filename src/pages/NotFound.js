import Nav from "../components/Nav";
import "../Sass/components/_NofFound.scss"

const NotFound = () => {
    return (
        <>
        <Nav></Nav>
        <section>
            
            <div id="NotFound">
                <div id="container">
                    <h1>Error 404</h1>
                    <p>Page Not found</p>
                    <a href="/">Return to Home</a>
                </div>
            </div>
        </section>
        </>
    );
};

export default NotFound;