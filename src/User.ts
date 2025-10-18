interface userDetails{
    name:string;
    email:string;
}

interface newDetails{
    name?:string;
    email?:string;
}

export default class User {
    name: string;
    email: string;
    isLoggedIn: boolean;

    constructor(details: userDetails) {
        const { name, email } = details;
        this.name = name;
        this.email = email;
        this.isLoggedIn = false;
    }

    login(): this{
        this.isLoggedIn = true;
        console.log(`${this.name} has logged in.`);
        return this;
    }

    logout(): this{
        this.isLoggedIn = false;
        console.log(`${this.name} has logged out.`);
        return this;
    }

    updateProfile(newDetails: newDetails): this {
        Object.assign(this, newDetails);
        console.log(`${this.name}'s profile updated`);
        return this;
    }
}