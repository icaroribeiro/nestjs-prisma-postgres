import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // async create({ email, name, password }: CreateUserDTO) {
  async create(data: CreateUserDTO) {
    const salt = await bcrypt.genSalt();

    console.log({ salt });

    data.password = await bcrypt.hash(data.password, salt);

    return await this.prisma.user.create({
      // data: {
      //   email,
      //   name,
      //   password,
      // },
      data,
      // select: {
      //   id: true,
      //   name: true,
      // },
    });
  }

  async list() {
    return await this.prisma.user.findMany({
      // where: {
      //   email: {
      //     contains: '@gmail.com',
      //   },
      // },
    });
  }

  async show(id: number) {
    await this.exists(id);

    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    { email, name, password, birthAt, role }: UpdatePatchUserDTO,
  ) {
    // console.log({ email, name, password });
    // if (email === undefined) {
    //   email = '';
    // }
    // if (!birthAt) {
    //   birthAt = null;
    // }
    // if (!(await this.show(id))) {
    //   throw new NotFoundException(`O usuário ${id} não existe.`);
    // }
    await this.exists(id);

    const salt = await bcrypt.genSalt();

    password = await bcrypt.hash(password, salt);

    return await this.prisma.user.update({
      data: {
        email,
        name,
        password,
        birth_at: birthAt ? new Date(birthAt) : null,
        role,
      },
      where: { id },
    });
  }

  async updatePartial(
    id: number,
    { email, name, password, birthAt, role }: UpdatePatchUserDTO,
  ) {
    // console.log({ data });
    // if (!(await this.show(id))) {
    //   throw new NotFoundException(`O usuário ${id} não existe.`);
    // }
    await this.exists(id);

    const data: any = {};

    if (email) {
      data.email = email;
    }

    if (name) {
      data.name = name;
    }

    if (password) {
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(password, salt);
    }

    if (birthAt) {
      data.birth_at = new Date(birthAt);
    }

    if (role) {
      data.role = role;
    }

    return await this.prisma.user.update({ data, where: { id } });
  }

  async delete(id: number) {
    // if (!(await this.show(id))) {
    //   throw new NotFoundException(`O usuário ${id} não existe.`);
    // }
    await this.exists(id);

    return await this.prisma.user.delete({ where: { id } });
  }

  async exists(id: number) {
    if (
      !(await this.prisma.user.count({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O usuário ${id} não existe.`);
    }
  }
}
