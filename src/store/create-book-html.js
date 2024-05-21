

export const createBookHtml = ( book ) => {
    if ( !book ) throw new Error ('A Book object is required');

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${book.done ? 'checked': ''}>
            <label>${ book.description }</label>
        </div>
        `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', book.idBook);
    if ( book.done ){
        liElement.classList.add('completed');
    }

    return liElement;
}