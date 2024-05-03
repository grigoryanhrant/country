import {useEffect, useState} from "react";
import {countriesApi} from "../../../shared";
import {CountriesType} from "../../../shared/lib/types.ts";
import {CountryCard} from "../../../entities/countries/ui/Country-Card.tsx";
import {Error} from "../../../shared/ui/Error/Error.tsx";
import styles from './Countries-List.module.css';
import { useNavigate } from "react-router-dom";

export const CountriesList = () => {

    const navigate = useNavigate();

    const [countries, setCountries] = useState<CountriesType[]>([])

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    useEffect(() => {
        countriesApi.getCountries().then((response) => {
            return response.json()
        }).then((data) => {
            setCountries(data.slice(0, 20))
        }).catch(() => {
            alert('Не удалось получить список стран, повторите пожалуйста позже.')
            setError(true);
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <div>
            {loading && !error ? <div>Loading...</div> : (
                <div className={styles.countries}>
                    {countries.map(({name, capital, flag, idd}) =>
                        <CountryCard key={idd?.suffixes} name={name} capital={capital} flag={flag} onClick={() => navigate(`${name.common}`)}/>)}
                </div>
            )}

            {error && <Error errorText={'Произошла ошибка при получении данных.'}/>}

            {!loading && !error && countries.length === 0 && (
                <div>Данные отсутствуют, повторите пожалуйста позже.</div>
            )}
        </div>
    );
};