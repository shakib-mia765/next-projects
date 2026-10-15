import { constants } from "node:crypto";
import { LoginDto } from "./auth.dto";

@Injectable()
export class AuthSevice {

    private readonly users = [];
    constructor(private readonly jwtService: JwtService) {}
    try{
        const{email, password, Name} = SignUpDto;
        const existingUser = this.users.find(user => user.email === email);
        if (existingUser) {
            throw new ConflictException('User with this email already exist');
        }
const newUser =  {id: Date.now.toString(), email, password, Name};
this.users.push(newUser);

const {password: -, ...userWithoutPassword} = newUser;
return {message: 'User registered Successfully', user: userWthoutPassword};
} catch (error) {
      if (error instanceof ConflictException) throw error;
      throw new InternalServerErrorException('Something went wrong during signup');
    }
}

async LoginDto(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = this.users.find(u => u.email === email); 
    if (!user) {
      throw new UnauthorizedException('Invalid credentials'); 

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      message: 'Login successful',
      accessToken,
      user: { id: user.id, name: user.name, email: user.email }
    };
  }
}
    }