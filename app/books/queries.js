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
