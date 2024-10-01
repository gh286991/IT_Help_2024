import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  async register(
    @Body() registerDto: RegisterDto, // {{ edit_1 }}
  ): Promise<{ message: string }> {
    await this.appService.register(registerDto);
    return { message: '註冊成功' }; // 修改這裡，返回一個包含訊息的物件
  }
}
