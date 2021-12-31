import {
  Controller,
  Get,
  Param,
  Req,
  Post,
  Body,
  Delete,
  Put,
  Inject,
  UseGuards,
  Res,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';
import { BookDto } from './dto/Books.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Book } from './book.entity';
import { AuthGuard } from '@nestjs/passport';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { HttpStatus } from '@nestjs/common'; 
@ApiTags('book')
@Controller('books')
//@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
export class BooksController {
  constructor(
    private booksService: BooksService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}


  @Get() 
  @ApiOperation({ summary: 'Obtener lista de libros' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de libros',
    type: [Book],
  })
  async findAll(@Req() request: Request, @Res() res): Promise<Book[]> {
    let startTime = Date.now();
    let data = await this.booksService.findAll(request.query);

    this.writeLog(startTime, request, HttpStatus.OK);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: data,
    });
  }

  @Get(':bookId') 
  @ApiOperation({ summary: 'Devuelve información sobre un libro específico' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Datos del libro',
    type: Book,
  })
  async findBook(
    @Req() request: Request,
    @Param('bookId') bookId: string,
    @Res() res,
  ): Promise<Book> {
    let message = 'OK';
    let startTime = Date.now();
    let data = await this.booksService.findBook(bookId);

    if (!data) {
      message = 'A book with the specified id was not found';
    }

    this.writeLog(startTime, request, HttpStatus.OK);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: message,
      data: data,
    });
  }

  @Post() 
  @ApiOperation({ summary: 'Crear un libro' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Datos del libro creado',
    type: Book,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createBook(
    @Req() request: Request,
    @Body() newBook: BookDto,
    @Res() res,
  ): Promise<Book> {
    let startTime = Date.now();
    let data = await this.booksService.createBook(newBook);

    this.writeLog(startTime, request, HttpStatus.CREATED);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'OK',
      data: data,
    });
  }

  @Delete(':bookId') 
  @ApiOperation({ summary: 'Eliminar un libro específico' })
  @ApiResponse({
    status: 200,
    description: 'Datos del libro eliminado',
  })
  async deleteBook(
    @Req() request: Request,
    @Param('bookId') bookId: string,
    @Res() res,
  ): Promise<Book> {
    let message = 'OK';
    let startTime = Date.now();
    let data = await this.booksService.deleteBook(bookId);

    if (data['affected'] == 0) {
      message = 'A book with the specified id was not found';
      data = {};
    }

    this.writeLog(startTime, request, HttpStatus.OK);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: message,
      data: data,
    });
  }

  @Put(':bookId') 
  @ApiOperation({ summary: 'Actualizar un libro específico' })
  @ApiResponse({
    status: 200,
    description: 'Datos del libro actualizado',
    type: Book,
  })
  async updateBook(
    @Req() request: Request,
    @Param('bookId') bookId: string,
    @Body() newBook: BookDto,
    @Res() res,
  ): Promise<Book> {
    let message = 'OK';
    let startTime = Date.now();
    let data = await this.booksService.updateBook(bookId, newBook);

    if (!data) {
      message = 'A book with the specified id was not found';
    }

    this.writeLog(startTime, request, HttpStatus.OK);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: message,
      data: data,
    });
  }

  writeLog(startTime: any, request: any, statusCode: number) {
    let finishTime = Date.now();
    let elapsedTime = finishTime - startTime;

    this.logger.log({
      level: 'info',
      message: '',
      statusCode: statusCode,
      method: request['method'],
      url: request['url'],
      //user: request['user'].username,
      duration: elapsedTime,
    });
  }
}