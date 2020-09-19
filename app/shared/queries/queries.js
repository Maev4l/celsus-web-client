export const DeleteBook = `mutation DeleteBook($id: ID!) {
    removeBook(id: $id)
}`;

export const ResizeImage = `mutation ResizeImage ($image: Image!) {
    resizeImage(image:$image)
}`;
