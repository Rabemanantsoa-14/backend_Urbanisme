import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        Message: string;
        message?: undefined;
    } | {
        message: string;
        Message?: undefined;
    }>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        message: string;
        user?: undefined;
    } | {
        message: string;
        user: import("./entities/user.entity").User;
    }>;
    remove(id: string): string;
}
