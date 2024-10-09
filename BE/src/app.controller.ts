import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<any> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }): Promise<any> {
    return this.authService.login(body.email, body.password);
  }
}

@Controller('users')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':userId')
  async getUserInfo(@Param('userId') userId: string): Promise<User> {
    const user = await this.authService.validateUser({ username: userId });
    if (!user) {
      throw new Error('授權失敗，請重新登入。');
    }
    return user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':userId')
  async updateUserInfo(
    @Param('userId') userId: string,
    @Body() updateData: Partial<RegisterDto>,
  ): Promise<any> {
    const existingUser = await this.authService.validateUser({
      username: userId,
    });
    if (!existingUser) {
      throw new Error('授權失敗，請重新登入。');
    }

    const { id } = updateData;
    const updatedUser = await this.authService.updateUserInfo(id, updateData);
    return {
      message: '使用者資訊更新成功',
      user: {
        username: updatedUser.username,
        email: updatedUser.email,
        account: updatedUser.account,
      },
    };
  }
}
