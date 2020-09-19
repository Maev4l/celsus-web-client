export const FetchLibraryBooks = `query FetchLibraryBooks ($id: ID!, $page:Int = 1, $pageSize: Int = 20) {
    library(id:$id, page:$page, pageSize:$pageSize) {
        content {
            books {
                id,
                title,
                thumbnail
            },
            total, 
            itemsPerPage
        }
    }
}`;

export const DeleteBook = `mutation DeleteBook($id: ID!) {
    removeBook(id: $id)
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
