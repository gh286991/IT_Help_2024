import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '../dto/register.dto';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<any> {
    const existingUser = await this.userModel.findOne({
      email: registerDto.email,
    });
    if (existingUser) {
      throw new Error('註冊失敗，該 email 已經被使用。');
    }

    const createdUser = new this.userModel(registerDto);
    await createdUser.save();

    return {
      message: '註冊成功',
      user: {
        id: createdUser._id,
        username: createdUser.username,
        email: createdUser.email,
        account: createdUser.account,
      },
    };
  }

  async login(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email });
    if (!user || user.password !== password) {
      throw new Error('帳號或密碼不正確。');
    }

    const payload: JwtPayload = { username: user.username };
    const access_token = this.jwtService.sign(payload);

    return {
      message: '登入成功',
      access_token,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return this.userModel.findOne({ username: payload.username });
  }

  async updateUserInfo(
    userId: string,
    updateData: Partial<RegisterDto>,
  ): Promise<UserDocument> {
    const { id } = updateData;
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new Error('用戶不存在');
    }
    Object.assign(user, updateData);
    return await user.save();
  }
}
