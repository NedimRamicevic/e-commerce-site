// Base Service fro fetching data

BASE_SERVICE_URL = "https://northwind.vercel.app/api/"



export default  get = async(url) => {

    const response = await fetch(BASE_SERVICE_URL + url);
    const data = await response.json();
    return data;
}