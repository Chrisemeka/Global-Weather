class Weather{
    constructor(){
        this.key = 'pB3RH4ATSjAy26X7ZLzGmi1fF2UnXRAb';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityInfo = await this.getCity(city);// getting city data for the API
        const weatherInfo = await this.getWeather(cityInfo.Key);// getting the weather info of the city using the city key data 
    
        return {// return the information gotten as objects for easie use
            cityInfo: cityInfo,
            weatherInfo: weatherInfo
        };
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;//query string of the API endpoint we are making a request to
        const response = await fetch(this.cityURI + query);//making a request to the API endpoint
        const data = await response.json();//getting the data from the API endpoint

        return data[0];//returning the data
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;//query string of the API endpoint we are making a request to
    
        const response = await fetch(this.weatherURI + query);//making a request to the API endpoint
        const data = await response.json();//getting the data from the API endpoint\
    
        return data[0];//returning the data
    }
}


