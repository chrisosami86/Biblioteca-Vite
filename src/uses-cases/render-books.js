import { book } from '../models/book-model';
import { createBookHtml } from "../store/create-book-html";


let element;

/**
 * 
 * @param {String} elementId 
 * @param {book} books 
 */
export const renderBooks = ( elementId, books = [] ) => {
    if(!element){
        element = document.querySelector( elementId );
    }

    if ( !element ){
        throw new Error(`Element ${elementId} is not found`);
     }

    element.innerHTML = '';

    books.forEach( (book) => {
        element.append( createBookHtml( book ) );
    });
}