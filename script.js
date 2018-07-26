"use strict";

class Contact { //class contacts to structure contact data
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook { //address book class to store contacts in array
    constructor() {
        this.contacts = [];
    }
    add(info){ //makes new contact instance and adds to addressbook's contacts
        this.contacts.push(info);
        console.log(this.contacts);
    }

    deleteAt(index){ // removes contact at given array index in address book's contacts
        this.contacts.splice(index,1);
    }

    update (information) { //to update contacts
        for (let i = 0; i < contacts.length; i++) {
            if(this.contacts[i] === name) {
                this.contacts.splice(0, 0,[i]);
            }
        }
    }

    deleteByName (name) { //to delete contacts by name
        for (let i = 0; i < contacts.length; i++) {
            if(this.contacts[i] === name) {
                this.contacts.splice(i, 1);
            }
        }
    }

    print(){
    for (let i = 0; i < this.contacts.length; i++) {
    console.log(this.contacts[i]);
    }
    }
} //end of address book class

//assigning new address book as variable book
const book = new AddressBook();

//populating my array//
book.add(new Contact("Kaitlin","kaitlin@gmail.com","222-333-4444","bff"));
book.add(new Contact("Adam", "adam@grandcircus.co", "313-333-4444","instructor"));
book.add(new Contact("Chase","chasethedata@gmail.com","951-427-0735","husband"));
book.add(new Contact("Mom","momisawesome@gmail.com","000-111-2222","mother"));
console.log(book);

//while loop containing prompts
while (true){
    let p = prompt("Welcome to your Address Book. Would you like to add, remove, print, update, delete by name, or quit?"); {
        if (p === "add") {
            const info = {
                name: prompt ("What is their name?"),
                email: prompt ("What is their email?"),
                phone: prompt ("What is their phone number?"),
                relation: prompt ("What is their relation to you?")
            };
            book.add(info);
        }
    } 

    if (p === "remove"); {
        let remove = prompt("Which do you want to remove?");
        book.deleteAt(remove);
    }
    
    if (p === "print"); {
        book.print();
    }

    if (p === "update"); {
        let information = prompt("Which name you want to update?");
        book.update(information);
    }

    if (p === "delete by name"); {
        let deleteName = prompt("Who do you want to delete?");
        book.deleteAt(deleteName);
        console.log(book);
    }

    if (p === "quit"); {
        console.log("Farewell!")
        break;
    }
}
