import Ablauf from './pages/Ablauf';
import Datenrettung from './pages/Datenrettung';
import Datenschutz from './pages/Datenschutz';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Kontakt from './pages/Kontakt';
import Preise from './pages/Preise';
import UeberUns from './pages/UeberUns';
import handyDatenRettungGraz from './pages/handy-daten-rettung-graz';
import handyDatenRettungInnsbruck from './pages/handy-daten-rettung-innsbruck';
import handyDatenRettungLinz from './pages/handy-daten-rettung-linz';
import handyDatenRettungSalzburg from './pages/handy-daten-rettung-salzburg';
import handyDatenRettungWien from './pages/handy-daten-rettung-wien';
import Leistungen from './pages/Leistungen';
import iphoneDatenrettung from './pages/iphone-datenrettung';
import samsungDatenrettung from './pages/samsung-datenrettung';
import androidDatenrettung from './pages/android-datenrettung';
import wasserschadenDatenrettung from './pages/wasserschaden-datenrettung';
import displaySchadenDatenrettung from './pages/display-schaden-datenrettung';
import platinenschadenDatenrettung from './pages/platinenschaden-datenrettung';
import geloeschteDatenWiederherstellen from './pages/geloeschte-daten-wiederherstellen';
import iphoneVsSamsungDatenrettung from './pages/iphone-vs-samsung-datenrettung';
import geloeschteFotosWiederherstellen from './pages/geloeschte-fotos-wiederherstellen';
import handyStartetNicht from './pages/handy-startet-nicht';
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
    "handy-daten-rettung-graz": handyDatenRettungGraz,
    "handy-daten-rettung-innsbruck": handyDatenRettungInnsbruck,
    "handy-daten-rettung-linz": handyDatenRettungLinz,
    "handy-daten-rettung-salzburg": handyDatenRettungSalzburg,
    "handy-daten-rettung-wien": handyDatenRettungWien,
    "Leistungen": Leistungen,
    "iphone-datenrettung": iphoneDatenrettung,
    "samsung-datenrettung": samsungDatenrettung,
    "android-datenrettung": androidDatenrettung,
    "wasserschaden-datenrettung": wasserschadenDatenrettung,
    "display-schaden-datenrettung": displaySchadenDatenrettung,
    "platinenschaden-datenrettung": platinenschadenDatenrettung,
    "geloeschte-daten-wiederherstellen": geloeschteDatenWiederherstellen,
    "iphone-vs-samsung-datenrettung": iphoneVsSamsungDatenrettung,
    "geloeschte-fotos-wiederherstellen": geloeschteFotosWiederherstellen,
    "handy-startet-nicht": handyStartetNicht,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};