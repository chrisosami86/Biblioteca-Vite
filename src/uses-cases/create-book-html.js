

export const createBookHtml = ( book ) => {
    if ( !book ) throw new Error ('A Book object is required');

    const html = `
            <input class="toggle" type="checkbox">
            <label>${ book.name }</label>
        `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', book.idBook);
    liElement.classList.add('nombreLabel');
    if ( book.done ){
        liElement.classList.add('completed');
    }

    return liElement;
}