import {CountriesType} from "../../../shared/lib/types.ts";
import {FC} from "react";
import {Button, Card} from "react-bootstrap";
import styles from './Country-Card.module.css';

type CountryCardProps = CountriesType & {
    onClick: () => void;
}

export const CountryCard: FC<CountryCardProps> = ({ name, capital, flag, onClick }) => {

    const { common } = name;

    return (
        <Card style={{ width: '18rem' }} className={styles.card}>
            <Card.Body>
                <Card.Title>{common} {flag}</Card.Title>
                <Card.Text>
                    Capital: {capital[0]}
                </Card.Text>
                <Button variant="primary" onClick={onClick}>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};