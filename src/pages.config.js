import Home from './pages/Home';
import Datenrettung from './pages/Datenrettung';
import Preise from './pages/Preise';
import Ablauf from './pages/Ablauf';
import UeberUns from './pages/UeberUns';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Linz from './pages/Linz';
import Wien from './pages/Wien';
import Graz from './pages/Graz';
import Salzburg from './pages/Salzburg';
import Innsbruck from './pages/Innsbruck';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Datenrettung": Datenrettung,
    "Preise": Preise,
    "Ablauf": Ablauf,
    "UeberUns": UeberUns,
    "Kontakt": Kontakt,
    "Impressum": Impressum,
    "Datenschutz": Datenschutz,
    "Linz": Linz,
    "Wien": Wien,
    "Graz": Graz,
    "Salzburg": Salzburg,
    "Innsbruck": Innsbruck,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};