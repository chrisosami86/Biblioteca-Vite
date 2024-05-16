export class book {
    idBook;
    name;
    description;
    urlImg;
    done;

    constructor(name, description, urlImg = ''){
        this.idBook = 1;
        this.name = name;
        this.description = description;
        this.done = false;
        this.urlImg = urlImg;

    }
}