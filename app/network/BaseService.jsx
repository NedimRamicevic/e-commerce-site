// Base Service fro fetching data

const BASE_SERVICE_URL = "https://northwind.vercel.app/api/"

class BaseService {
    get = (url) => {
        console.log('get', url);
        return fetch(BASE_SERVICE_URL + url).then(response => {
            console.log('response', response);
            return response.json();
        });
    }
}

export default BaseService;
