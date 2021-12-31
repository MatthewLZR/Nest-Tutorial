import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { BookDto } from './dto/Books.dto';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { InjectMetric } from '@willsoto/nestjs-prometheus'; 
import { Counter } from 'prom-client'; 

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>, @InjectMetric('books_served') public counter:  Counter<string>
  ) {}

  async findAll(params): Promise<Book[]> { 
    return await this.booksRepository.find(); 
  }

  async findBook(bookId: string): Promise<Book> {
    return await this.booksRepository.findOne({ where: { id: bookId } }); 
  }

  createBook(newBook: BookDto): Promise<Book> {
    return this.booksRepository.save(newBook);
  }

  async deleteBook(bookId: string): Promise<any> {
    return await this.booksRepository.delete({ id: parseInt(bookId) });
  }

  async updateBook(bookId: string, newBook: BookDto): Promise<Book> { 
    let toUpdate = await this.booksRepository.findOne(bookId); 

    let updated = Object.assign(toUpdate, newBook); 

    return this.booksRepository.save(updated); 
  }
}