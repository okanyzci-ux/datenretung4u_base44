import Home from './pages/Home';
import Datenrettung from './pages/Datenrettung';
import Preise from './pages/Preise';
import Ablauf from './pages/Ablauf';
import UeberUns from './pages/UeberUns';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import datenrettungWien from './pages/datenrettung-wien';
import datenrettungLinz from './pages/datenrettung-linz';
import datenrettungGraz from './pages/datenrettung-graz';
import datenrettungSalzburg from './pages/datenrettung-salzburg';
import datenrettungInnsbruck from './pages/datenrettung-innsbruck';
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
    "datenrettung-wien": datenrettungWien,
    "datenrettung-linz": datenrettungLinz,
    "datenrettung-graz": datenrettungGraz,
    "datenrettung-salzburg": datenrettungSalzburg,
    "datenrettung-innsbruck": datenrettungInnsbruck,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};