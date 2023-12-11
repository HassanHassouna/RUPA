class Renderer {
    constructor() {
        this.data = {}
    }

    renderData(data) {
        $('.user-container').empty();
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(data.user);
        $('.user-container').append(newHTML);

        $('.friends-container').empty();
        const source2 = $('#friends-template').html();
        const template2 = Handlebars.compile(source2);
        const newHTML2 = template2({friends: data.friends});
        $('.friends-container').append(newHTML2);

        $('.quote-container').empty();
        const source3 = $('#quote-template').html();
        const template3 = Handlebars.compile(source3);
        const newHTML3 = template3({quote: data.quote});
        $('.quote-container').append(newHTML3);

        $('.pokemon-container').empty();
        const source4 = $('#pokemon-template').html();
        const template4 = Handlebars.compile(source4);
        const newHTML4 = template4(data.pokemon);
        $('.pokemon-container').append(newHTML4);

        $('.meat-container').empty();
        const source5 = $('#meat-template').html();
        const template5 = Handlebars.compile(source5);
        const newHTML5 = template5({meat: data.meat});
        $('.meat-container').append(newHTML5);
    }
}


