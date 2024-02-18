import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDTO): Promise<{
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
    update(id: number, { email, name, password, birthAt, role }: UpdatePatchUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        birth_at: Date;
        role: number;
        created_at: Date;
        updated_at: Date;
    }>;
    updatePartial(id: number, { email, name, password, birthAt, role }: UpdatePatchUserDTO): Promise<{
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
    exists(id: number): Promise<void>;
}
