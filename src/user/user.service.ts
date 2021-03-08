import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      email: 'john@ogier.io',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      email: 'maria@ogier.io',
      password: 'guess',
    },
  ];

  async findOne(alias: string): Promise<User | undefined> {
    if (this.users.find(user => user.username === alias)){
        return this.users.find(user => user.username === alias);
    } else if (this.users.find(user => user.email === alias)){
        return this.users.find(user => user.email === alias);
    }
    return null;
  }
}
