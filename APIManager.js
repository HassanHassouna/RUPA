const USER_API = 'https://randomuser.me/api/?results=7'
const KANYE_API = 'https://api.kanye.rest/'
const POKE_API = 'https://pokeapi.co/api/v2/'
const BACON_API = 'https://baconipsum.com/api/'

class APIManager {
    constructor() {
        this.data = {}
    }

    getUser() {
        return $.ajax({
            method: "GET",
            url: USER_API,
            success: (data) => {
                this.data.user = data.results[0]
            },
            error: function (xhr, text, error) {
                console.log(text)

            }
        })
    }

    getFriends() {
        return $.ajax({
            method: "GET",
            url: USER_API,
            success: (data) => {
                console.log(data, 45)
                this.data.friends = data.results.slice(1, 7)
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }

    getQuote() {
        return $.ajax({
            method: "GET",
            url: KANYE_API,
            success: (data) => {
                this.data.quote = data.quote
            },
            error: function (xhr, text, error) {
                console.log(text)

            }
        })
    }

    getPokemon() {
        return $.ajax({
            method: "GET",
            url: POKE_API + 'pokemon/' + Math.floor(Math.random() * 949),
            success: (data) => {
                this.data.pokemon = data
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }

    getMeat() {
        return $.ajax({
            method: "GET",
            url: BACON_API + '?type=meat-and-filler',
            success: (data) => {
                this.data.meat = data[0]

            },
            error: function (xhr, text, error) {
                console.log(text)

            }
        })
    }

    getAllData() {
        const promises = [this.getUser(), this.getFriends(), this.getQuote(), this.getPokemon(), this.getMeat()]
        return Promise.all(promises)
    }

}






