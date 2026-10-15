export class SignUpDto  {
    @IsNotEmpty({message: 'Name is required'})
    MaxLength(50,
    name:string
    )

    @IsEmail({}, {message: 'Invalid email address'})
    email: string;

    @MinLength(8, {message: 'password must be at least 8 characters long'})
    password: string;

}

export class LoginDto {
    IsEmail({}, {message: 'Invalid email address'})
    emaiil: string;

    IsNotEmtpy({message: 'password is required'})
    password: string;
}