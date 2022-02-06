import React, { useEffect, useState} from 'react';
import axios from 'axios';
import '../Sass/components/_MeteoComponent.scss';
import MeteoCard from './MeteoCard';

const MeteoComponent = () => {

    const [data, setData] = useState('');
    const [ville, setVille]= useState('paris');

    useEffect(() => {
        axios.get(
            'https://api.openweathermap.org/data/2.5/weather?q='+ville+'&appid=ea47585d5d7af6136536556b8101c20d&units=metric&lang=fr'
            )
        .then((res) => {
            setData(res.data)
        });
        
    }, [ville]);

    function submit(){
        const InputVille = document.getElementById('villeinput').value
        setVille(InputVille)
    }

    return ( 
        <div id='MeteoComponent'>
            <div>
                <h2>Quelle ville cherchez vous ?</h2>
                <div id='input'>
                    <input type="text" id='villeinput' placeholder='Votre ville...' />
                    <input type="submit" value="Valider" onClick={()=>submit()}/>
                </div>
                {(()=> {
                    if(data !== ''){
                        return(
                            <MeteoCard temp={data.main.temp} name={data.name} icon={data.weather[0].icon} />
                        )
                    }   
                })()}
                
            </div>
        </div>
    );
};

export default MeteoComponent;