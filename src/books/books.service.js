"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BooksService = void 0;
var common_1 = require("@nestjs/common");
var book_1 = require("./book");
var BooksService = /** @class */ (function () {
    function BooksService() {
        this.books = [
            {
                id: 1,
                title: 'Una historia de España',
                genre: 'Historia',
                description: 'Un relato ameno, personal, a ratos irónico, pero siempre único, de nuestra accidentada historia a través de los siglos. Una obra concebida por el autor para, en palabras suyas, «divertirme, releer y disfrutar; un pretexto para mirar atrás desde los tiempos remotos hasta el presente, reflexionar un poco sobre ello y contarlo por escrito de una manera poco ortodoxa.',
                author: 'Arturo Pérez-Reverte',
                publisher: 'Alfaguara',
                pages: 256,
                image_url: 'https://images-na.ssl-images-amazon.com/images/I/41%2B-e981m1L._SX311_BO1,204,203,200_.jpg'
            },
            {
                id: 2,
                title: 'Historia de España contada para escépticos',
                genre: 'Historia',
                description: 'Como escribe el autor, no pretende ser veraz, justa y desapasionada, porque ninguna historia lo es. No está hecha para halagar a reyes y gobernantes, ni pretende halagar a los banqueros, ni a la Conferencia Episcopal, ni al colectivo gay.',
                author: 'Juan Eslava Galán',
                publisher: 'Booket',
                pages: 592,
                image_url: 'https://images-na.ssl-images-amazon.com/images/I/51IyZ5Mq8YL._SX326_BO1,204,203,200_.jpg'
            },
        ];
    }
    BooksService.prototype.findAll = function (params) {
        return this.books;
    };
    BooksService.prototype.findBook = function (bookId) {
        return this.books[parseInt(bookId) - 1];
    };
    BooksService.prototype.createBook = function (newBook) {
        var book = new book_1.Book();
        book.id = 99;
        book.author = newBook.author;
        book.description = newBook.description;
        book.genre = newBook.genre;
        book.image_url = newBook.image_url;
        book.pages = newBook.pages;
        book.publisher = newBook.publisher;
        book.title = newBook.title;
        return book;
    };
    BooksService.prototype.deleteBook = function (bookId) {
        return this.books[parseInt(bookId) - 1];
    };
    BooksService.prototype.updateBook = function (bookId, newBook) {
        return this.books[parseInt(bookId) - 1];
    };
    BooksService = __decorate([
        (0, common_1.Injectable)()
    ], BooksService);
    return BooksService;
}());
exports.BooksService = BooksService;
