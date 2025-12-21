import Home from './pages/Home';
import Datenrettung from './pages/Datenrettung';
import Preise from './pages/Preise';
import Ablauf from './pages/Ablauf';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Datenrettung": Datenrettung,
    "Preise": Preise,
    "Ablauf": Ablauf,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};