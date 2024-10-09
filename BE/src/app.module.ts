import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { AuthModule } from './auth/auth.module';
import { UserController } from './app.controller'; // 新增

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:29017/ITHelp'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AuthModule,
  ],
  controllers: [AppController, UserController], // 新增
  providers: [AppService],
})
export class AppModule {}
