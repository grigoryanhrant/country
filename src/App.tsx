import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CountriesPage} from "./pages/Countries";
import {CountryDetailPage} from "./pages/Country-Detail";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CountriesPage />} />
                <Route path="/:name" element={<CountryDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
};