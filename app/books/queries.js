export const FetchLibraryBooks = `query FetchLibraryBooks ($id: ID!, $page:Int!) {
    library(id:$id, page:$page) {
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
