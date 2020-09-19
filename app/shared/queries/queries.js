/* eslint-disable import/prefer-default-export */
export const DeleteBook = `mutation DeleteBook($id: ID!) {
    removeBook(id: $id)
}`;
