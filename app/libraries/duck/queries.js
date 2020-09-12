export const ListLibraries = `query ListLibraries { 
    libraries {
        id, name, description, booksCount
    } 
}`;

export const DeleteLibrary = `mutation DeleteLibrary($id: ID!) {
    removeLibrary(id: $id)
}`;

export const AddLibrary = `mutation AddLibrary($library: LibraryInput!) {
    addLibrary(library:$library) {
        id
    }
}`;
