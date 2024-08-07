
export interface UserProps {
    name: string
    email: string
    password: string
}
export class User {
    private props: UserProps;

    get name() {
        return this.props.name
    }
    get email() {
        return this.props.email
    }
    get password() {
        return this.props.password
    }

    constructor(props: UserProps) {
        const errors: string[] = [];

        if (props.name.length < 4) {
            errors.push('name');
        }
        if (props.email.length < 4) {
            errors.push('email');
        }
        if (props.password.length < 4) {
            errors.push('password');
        }

        if (errors.length > 0) {
            throw new Error(`The following fields require a minimum of 4 characters: ${errors.join(', ')}`);
        }

        this.props = props;
    }
}


