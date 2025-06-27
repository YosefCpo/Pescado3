import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import "./i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import FooterTop from "./components/FooterTop";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./components/ProductPage";

function App() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("ar");

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [i18n, language]);

    return (
        <div className="app">
            <Navbar language={language} setLanguage={setLanguage} />
            <Routes>
                <Route path="/" element={<Home lang={language} />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/about" element={<AboutUs language={language} />} />
                <Route path="/contact" element={<ContactPage language={language} />} />
            </Routes>
            {/* <FooterTop language={language} /> */}
            <Footer language={language} />
        </div>
    );
}

export default App;
