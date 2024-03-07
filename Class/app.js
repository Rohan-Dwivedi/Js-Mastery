/*
You are creating a website for your college. Create a class user with 2 properties, name and email.
it also method class viewData() that allow user to view their website.
*/

let userData = "Information about the user";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(userData);
    }
}

let user1 = new User("Rohan","dwivedirohan810@gmail.com")
let user2 = new User("Rohit","rohit_203017@saitm.org")

/*
Create a new class called admin which inherits from user. Add a new method called editData to admin
that allows it to edit website data.
*/

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData(){
        userData = "Information about the admin";
    }
}

let admin1 = new Admin("Rohan-Admin","admin@saitm.org")