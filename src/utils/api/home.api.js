class HomeApi {

    async checkHomePageIsAvailable(baseUrl) {

        const response = await fetch(baseUrl);

        return response.status;
    }

}

module.exports = new HomeApi();
