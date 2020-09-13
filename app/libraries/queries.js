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

export const FetchLibrary = `query FetchLibrary($id:ID!) {
    library(id:$id) {
        id,
        name, 
        description,
    }
}`;

export const UpdateLibrary = `mutation UpdateLibrary($library: LibraryInput!) {
    updateLibrary(library: $library)
}`;
