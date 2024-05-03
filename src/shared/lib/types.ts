export type CountriesType = {
    name: {
        common: string
    },
    capital: string[],
    flag: string,
    idd?: {
        suffixes: string,
    }
}