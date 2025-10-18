import User from "./User.js";

class Admin extends User {
    public readonly role: string;

    constructor(details: { name: string; email: string }) {
        super(details);
        this.role = "admin";
    }

    deleteUser(userToDelete: User): void {
        console.log(`${this.name} deleted user ${userToDelete.name}`);
    }

}

export default Admin;