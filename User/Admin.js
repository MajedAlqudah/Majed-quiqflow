import User from "./User.js";

class Admin extends User{

    constructor(userDetails){

        super(userDetails);
        this.role = 'admin';
    }

    deleteUser(userToDelete){

        console.log(`${this.name} deleted user ${userToDelete.name}`);
    }

}

export default Admin;
/*----------------------------------------------------------------------------*/
/* Usage */

// const adminUser = new Admin({name :'Vky', email:'Vky@admin.dev'});
// adminUser.Login();
// console.log(adminUser.isLoggedIn);
// console.log(adminUser.role);

// const userToDelete = new User({name: 'Ahmed', email:'Ahmed@gmail.com'});
// adminUser.deleteUser(userToDelete);