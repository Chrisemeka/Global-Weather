const key = 'pB3RH4ATSjAy26X7ZLzGmi1fF2UnXRAb';

//get weather information
const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';//base url of the API endpoint we are making a request to
    const query = `${id}?apikey=${key}`;//query string of the API endpoint we are making a request to

    const response = await fetch(base + query);//making a request to the API endpoint
    const data = await response.json();//getting the data from the API endpoint\

    return data[0];//returning the data
};


//get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';//base url of the API endpoint we are making a request to
    const query = `?apikey=${key}&q=${city}`;//query string of the API endpoint we are making a request to

    const response = await fetch(base + query);//making a request to the API endpoint
    const data = await response.json();//getting the data from the API endpoint

    return data[0];//returning the data
};

