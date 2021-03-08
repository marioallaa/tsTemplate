
import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {


  constructor(private userService: UserService) {}
    
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('create')
  async postCreate(@Body() u: any) {
    return await this.userService.createOne(u);
  }


}
