/* eslint-disable import/prefer-default-export */
export const SearchBooks = `query SearchBooks($query: SearchBooksQuery!) { 
    searchBooks(searchQuery:$query) {
        total, 
        itemsPerPage, 
        books {
            id,
            title,
            thumbnail,
            library {
                id,
                name
            }
        }
    } 
}`;
