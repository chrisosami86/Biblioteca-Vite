import { v4 as uuid } from "uuid";

export class book {
    idBook;
    name;
    description;
    urlImg;
    done;

    constructor(name, description, urlImg = ''){
        this.idBook = uuid();
        this.name = name;
        this.description = description;
        this.done = false;
        this.urlImg = urlImg;

    }
}