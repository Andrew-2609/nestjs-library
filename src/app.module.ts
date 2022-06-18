import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './book.model';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '172.17.0.2',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest_library',
      autoLoadModels: true,
      synchronize: true,
    }),

    SequelizeModule.forFeature([Book]),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
