class Account {

    constructor(name, document, email, password) {
        this.id;
        this.name = name;
        this.document = document;
        this.email = email;
        this.password = password;
    }

    printDataAccount() {
        console.table("The name: " + this.name);
        console.table("The document: " + this.document);
        console.table("The email: " + this.email);
        console.table("The password: " + this.password);
    }

}