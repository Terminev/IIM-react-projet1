import "../Sass/components/_NofFound.scss"

const NotFound = () => {
    return (
        <div id="NotFound">
            <div id="container">
                <h1>Error 404</h1>
                <p>Page Not found</p>
                <a href="/">Return to Home</a>
            </div>
        </div>
    );
};

export default NotFound;