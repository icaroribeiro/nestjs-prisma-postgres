import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create({ email, name, password, birthAt, role }: CreateUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birth_at: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }>;
    list(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birth_at: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }[]>;
    show(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birth_at: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }>;
    update(data: UpdatePutUserDTO, id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birth_at: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }>;
    updatePartial(data: UpdatePatchUserDTO, id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birth_at: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birth_at: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }>;
}
