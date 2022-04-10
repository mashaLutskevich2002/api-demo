import {getData} from "./fetchData";

export const getToken = async () => {
    let newToken = await getData('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    return newToken.token
}
