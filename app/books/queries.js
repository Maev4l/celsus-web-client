// eslint-disable-next-line import/prefer-default-export
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
