import Ablauf from './pages/Ablauf';
import Datenrettung from './pages/Datenrettung';
import Datenschutz from './pages/Datenschutz';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Kontakt from './pages/Kontakt';
import Leistungen from './pages/Leistungen';
import Preise from './pages/Preise';
import Ratgeber from './pages/Ratgeber';
import UeberUns from './pages/UeberUns';
import androidBootloopStartetNicht from './pages/android-bootloop-startet-nicht';
import androidDatenrettung from './pages/android-datenrettung';
import displaySchadenDatenrettung from './pages/display-schaden-datenrettung';
import geloeschteDatenWiederherstellen from './pages/geloeschte-daten-wiederherstellen';
import geloeschteFotosWiederherstellen from './pages/geloeschte-fotos-wiederherstellen';
import handyDatenRettungGraz from './pages/handy-daten-rettung-graz';
import handyDatenRettungInnsbruck from './pages/handy-daten-rettung-innsbruck';
import handyDatenRettungLinz from './pages/handy-daten-rettung-linz';
import handyDatenRettungSalzburg from './pages/handy-daten-rettung-salzburg';
import handyDatenRettungWien from './pages/handy-daten-rettung-wien';
import handyDisplayDefektDatenwichtig from './pages/handy-display-defekt-datenwichtig';
import handyStartetNicht from './pages/handy-startet-nicht';
import handyWasserschadenDatenrettung from './pages/handy-wasserschaden-datenrettung';
import iphoneDatenrettung from './pages/iphone-datenrettung';
import iphoneVsSamsungDatenrettung from './pages/iphone-vs-samsung-datenrettung';
import platinenschadenDatenrettung from './pages/platinenschaden-datenrettung';
import samsungDatenrettung from './pages/samsung-datenrettung';
import wasserschadenDatenrettung from './pages/wasserschaden-datenrettung';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Ablauf": Ablauf,
    "Datenrettung": Datenrettung,
    "Datenschutz": Datenschutz,
    "Home": Home,
    "Impressum": Impressum,
    "Kontakt": Kontakt,
    "Leistungen": Leistungen,
    "Preise": Preise,
    "Ratgeber": Ratgeber,
    "UeberUns": UeberUns,
    "android-bootloop-startet-nicht": androidBootloopStartetNicht,
    "android-datenrettung": androidDatenrettung,
    "display-schaden-datenrettung": displaySchadenDatenrettung,
    "geloeschte-daten-wiederherstellen": geloeschteDatenWiederherstellen,
    "geloeschte-fotos-wiederherstellen": geloeschteFotosWiederherstellen,
    "handy-daten-rettung-graz": handyDatenRettungGraz,
    "handy-daten-rettung-innsbruck": handyDatenRettungInnsbruck,
    "handy-daten-rettung-linz": handyDatenRettungLinz,
    "handy-daten-rettung-salzburg": handyDatenRettungSalzburg,
    "handy-daten-rettung-wien": handyDatenRettungWien,
    "handy-display-defekt-datenwichtig": handyDisplayDefektDatenwichtig,
    "handy-startet-nicht": handyStartetNicht,
    "handy-wasserschaden-datenrettung": handyWasserschadenDatenrettung,
    "iphone-datenrettung": iphoneDatenrettung,
    "iphone-vs-samsung-datenrettung": iphoneVsSamsungDatenrettung,
    "platinenschaden-datenrettung": platinenschadenDatenrettung,
    "samsung-datenrettung": samsungDatenrettung,
    "wasserschaden-datenrettung": wasserschadenDatenrettung,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};