import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alias } from 'typeorm/query-builder/Alias';
import { User } from './user.entity';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(alias: string): Promise<User> {
    const usernameUser = await this.usersRepository.findOne({where: {username: alias}});
    const emailuser = await this.usersRepository.findOne({where: {email: alias}})
    if (usernameUser){
      return usernameUser;
    } else if (emailuser){
      return emailuser;
    }
    return null;
  }

  createOne(userDto: any) {
    return this.usersRepository.save(userDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

}
