/// <reference types="multer" />
/// <reference types="express-serve-static-core" />
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthForgetDTO } from './dto/auth-forget.dto';
import { AuthResetDTO } from './dto/auth-reset.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { FileService } from 'src/file/file.service';
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    private readonly fileService;
    constructor(userService: UserService, authService: AuthService, fileService: FileService);
    login({ email, password }: AuthLoginDTO): Promise<{
        accessToken: string;
    }>;
    register(body: AuthRegisterDTO): Promise<{
        accessToken: string;
    }>;
    forget({ email }: AuthForgetDTO): Promise<boolean>;
    reset({ password, token }: AuthResetDTO): Promise<{
        accessToken: string;
    }>;
    me(user: any): Promise<{
        user: any;
    }>;
    uploadPhoto(user: any, photo: Express.Multer.File): Promise<{
        photo: Express.Multer.File;
    }>;
    uploadFiles(user: any, files: Express.Multer.File[]): Promise<Express.Multer.File[]>;
    uploadFilesFields(user: any, files: {
        photo: Express.Multer.File;
        documents: Express.Multer.File[];
    }): Promise<{
        photo: Express.Multer.File;
        documents: Express.Multer.File[];
    }>;
}
