import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { PhoneModule } from './phone/phone.module';
import { PaymentModule } from './payments/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'resources'),
      exclude: ['/api*'],
      serveRoot: '/resources',
    }),
    PhoneModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
