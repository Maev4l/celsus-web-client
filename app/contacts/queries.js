export const ListContacts = `query ListContacts { 
    contacts {
        id,
        nickname,
        thumbnail
    } 
}`;

export const AddContact = `mutation AddContact($contact: ContactInput!){
    addContact(contact: $contact) {
        id
    }
}`;

export const FetchContact = `query FetchContact($id: ID!) { 
    contact(id:$id) {
        id, nickname, thumbnail
    } 
}`;

export const UpdateContact = `mutation UpdateContact($contact: ContactInput!) {
    updateContact(contact: $contact) 
}`;
