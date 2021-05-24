import axios from 'axios';

class jokeApIServise {
    async getJoke() {
        let url = 'https://official-joke-api.appspot.com/jokes/random';
        let joke = await axios.get(url);
        console.log(joke);
        return joke.data;
    }

    async getJokeWithErrorHandling() {

        let url = 'https://official-joke-api.appspot.com/jokes/random';
        let joke = '';
        await axios
            .get(url)
            .then((response) => {
                joke = response.data;
            })
            .catch((response) => {
                console.log(response);
            });
        console.log(joke);

        return joke;
    }

    async getJokeWithRequest() {
        const options = {
            method: 'GET',
            url: 'https://official-joke-api.appspot.com/jokes/random',
        };

        let joke = '';
        await axios
            .request(options)
            .then((response) => {
                joke = response.data;
            })
            .catch((response) => {
                console.log(response);
            });
        console.log(joke);

        return joke;
    }
}

export default new jokeApIServise();
