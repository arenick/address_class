"use strict";

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info){ //makes new contact instance and adds to addressbook's contacts
        this.contacts.push(info);
    }

    deleteAt(index){ // removes contact at given array index in address book's contacts
        this.contacts.splice(index,1);
    }

    update (information) {
        this.contacts.splice(0,0,information);
    }

    deleteByName (name) {
        for (let i = 0; i < contacts.length; i++) {
            if(this.contacts[i] === name) {
                this.contacts.splice(i, 1);
            }
        }
    }

    print(){ //logs all of this addressbook's contacts to console
        //print all the items inside of the array
        //loop and print through this.contacts and log each of them
    for (let i = 0; i < contacts.length; i++) {
    console.log(this.contacts[i]);
    }
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const book = new AddressBook();

book.update(new Contact);

book.deleteAt(new Contact);

book.add(new Contact("Kaitlin","kaitlin@gmail.com","222-333-4444","bff"));
book.add(new Contact("Adam", "adam@grandcircus.co", "313-913-4444","instructor"));
book.add(new Contact("Chase","chasethedata@gmail.com","951-427-0735","husband"));
book.add(new Contact("Mom","momisawesome@gmail.com","000-111-2222","mother"));
console.log(book);

let question = prompt("Add, Remove, Print, or Quit?");
    while (question.toLowerCase === "Add") {
        prompt ("Name?");
    }