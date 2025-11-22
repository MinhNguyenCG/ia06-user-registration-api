import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Hàm đăng ký người dùng mới
  async register(createUserDto: CreateUserDto): Promise<{ message: string }> {
    const { email, password } = createUserDto;
    // 1. Kiểm tra email đã tồn tại chưa
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('Email đã được đăng ký');
    }
    // 2. Hash mật khẩu trước khi lưu (dùng bcrypt)
    const hashedPassword = await bcrypt.hash(password, 10);
    // 3. Tạo đối tượng user mới theo model
    const newUser = new this.userModel({
      email: email,
      password: hashedPassword,
      // createdAt sẽ được tự động thêm (do schema đặt default hoặc timestamps)
    });
    // 4. Lưu user vào cơ sở dữ liệu
    await newUser.save();
    // 5. Trả về thông báo thành công
    return { message: 'Đăng ký thành công' };
  }

  // (Có thể có thêm các hàm khác như findAll, findByEmail... nếu cần)
}
