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
