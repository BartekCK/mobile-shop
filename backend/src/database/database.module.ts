import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return {
      module: this,
      imports: [
        MongooseModule.forRoot(
          `mongodb://localhost:27017/${process.env.MONGO_INITDB_DATABASE}`,
          {
            user: process.env.MONGO_INITDB_ROOT_USERNAME,
            pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            poolSize: 10,
            authSource: 'admin',
          },
        ),
      ],
    };
  }
}
