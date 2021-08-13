class GetApi {
    static searchMeal(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(resp => {
                return resp.json();
            })
            .then(respJson => {
               return (respJson.meals ? Promise.resolve(respJson.meals) : Promise.reject(`${keyword} is not found`));
            })
    }
}

export default GetApi;