export const countriesApi = {
    getCountries: () => {
        return fetch('https://restcountries.com/v3.1/all');
    },
    getCountry: (name: string) => {
        return fetch(`https://restcountries.com/v3.1/name/${name}`)
    }
}