import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'resources'),
      exclude: ['/api*'],
      serveRoot: '/resources',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
