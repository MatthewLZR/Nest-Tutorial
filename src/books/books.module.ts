import { Module } from '@nestjs/common';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../utilities/auth.module';
import {
  makeCounterProvider,
  PrometheusModule,
} from '@willsoto/nestjs-prometheus'; 

@Module({
  imports: [TypeOrmModule.forFeature([Book]),AuthModule,PrometheusModule.register(),], 
  providers: [BooksService,makeCounterProvider({
    name: 'books_served',
    help: 'books_help',
  })], 
  controllers: [BooksController], 
})
export class BooksModule {}