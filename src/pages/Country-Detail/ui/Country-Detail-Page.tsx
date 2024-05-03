import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CountriesType} from "../../../shared/lib/types.ts";
import {countriesApi} from "../../../shared";
import {Error} from "../../../shared/ui/Error/Error.tsx";
import styles from "../../../entities/countries/ui/Country-Card.module.css";
import {Card} from "react-bootstrap";

type CountriesTypeExtended = CountriesType & {
    continents: string[],
    startOfWeek: string;
    population: number;
}

export const CountryDetailPage = () => {
    let { name } = useParams();

    const [country, setCountry] = useState<CountriesTypeExtended[]>()

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    useEffect(() => {
        if(!name) return

        countriesApi.getCountry(name).then((response) => {
            return response.json()
        }).then((data) => {
            setCountry(data)
        }).catch(() => {
            alert(`Не удалось получить данные о стране ${name}, повторите пожалуйста позже.`)
            setError(true);
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <>
            {loading && <div>Loading...</div>}

            {country && (
                <Card style={{ width: '18rem' }} className={styles.card}>
                    <Card.Body>
                        <Card.Title>{country[0].name?.common} {country[0].flag}</Card.Title>
                        <Card.Text>
                            Capital: {country[0].capital[0]}
                        </Card.Text>
                        <Card.Text>
                            Continents: {country[0].continents[0]}
                        </Card.Text>
                        <Card.Text>
                            Start Of Week: {country[0].startOfWeek}
                        </Card.Text>
                        <Card.Text>
                            Population {country[0].population}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}

            {error && <Error errorText={'Произошла ошибка при получении данных.'}/>}
        </>
    );
};