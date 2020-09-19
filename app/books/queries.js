export const FetchLibraryBooks = `query FetchLibraryBooks ($id: ID!, $page:Int = 1, $pageSize: Int = 20) {
    library(id:$id, page:$page, pageSize:$pageSize) {
        name, 
        content {
            books {
                id,
                title,
                thumbnail,
                library {
                    id,
                    name
                }
            },
            total, 
            itemsPerPage
        }
    }
}`;

export const FetchBook = `query FetchBook($id: ID!) {
    book(id:$id) {
        id,
        title,
        authors,
        thumbnail,
        description,
        isbn10,
        isbn13,
        thumbnail,
        tags,
        bookSet,
        bookSetOrder,
        language,
        library {
            id,
            name,
        }
    }
}`;

export const AddBook = `mutation AddBook($book: BookInput!) {
    addBook(book: $book) {
        id
    }
}`;

export const UpdateBook = `mutation UpdateBook($book: BookInput!) {
    updateBook(book: $book)
}`;
