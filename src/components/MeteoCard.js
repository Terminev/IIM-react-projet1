import '../Sass/components/_MeteoCard.scss';

const MeteoCard = ({ville, temp, icon}) => {

    return ( 
        <div id='MeteoCard'>
            <div>
                <h2>{ville}</h2>
                
            </div>
        </div>
    );
};

export default MeteoCard;