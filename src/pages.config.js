import Ablauf from './pages/Ablauf';
import Datenrettung from './pages/Datenrettung';
import Datenschutz from './pages/Datenschutz';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Kontakt from './pages/Kontakt';
import Preise from './pages/Preise';
import UeberUns from './pages/UeberUns';
import handyDatenRettungWien from './pages/handy-daten-rettung-wien';
import handyDatenRettungLinz from './pages/handy-daten-rettung-linz';
import handyDatenRettungGraz from './pages/handy-daten-rettung-graz';
import handyDatenRettungSalzburg from './pages/handy-daten-rettung-salzburg';
import handyDatenRettungInnsbruck from './pages/handy-daten-rettung-innsbruck';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Ablauf": Ablauf,
    "Datenrettung": Datenrettung,
    "Datenschutz": Datenschutz,
    "Home": Home,
    "Impressum": Impressum,
    "Kontakt": Kontakt,
    "Preise": Preise,
    "UeberUns": UeberUns,
    "handy-daten-rettung-wien": handyDatenRettungWien,
    "handy-daten-rettung-linz": handyDatenRettungLinz,
    "handy-daten-rettung-graz": handyDatenRettungGraz,
    "handy-daten-rettung-salzburg": handyDatenRettungSalzburg,
    "handy-daten-rettung-innsbruck": handyDatenRettungInnsbruck,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};