import Dark from "../img/icon/moon.png";
import Light from "../img/icon/sun.png";

const DarkModeSwitcher = () => {
    // Permets de changer d'etat entre le dark mode et le light mode
    const ChangeMode = () =>{
        if(localStorage.getItem('mode') === "light"){
            localStorage.setItem('mode', 'dark')
            window.location.reload();
        }else{
            localStorage.setItem('mode', 'light')
            window.location.reload();
        }
    }

    // Afficher l'image en fonction du mode actuel
    if(localStorage.getItem('mode') === 'light'){
        return(
            <li><img src={Dark} alt="dark" onClick={()=>ChangeMode()}/></li>
        )
    }else{
        return(
            <li><img src={Light} alt="light" onClick={()=>ChangeMode()}/></li>
        )
    }
};

export default DarkModeSwitcher;