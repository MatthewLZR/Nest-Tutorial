"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.BooksController = void 0;
var common_1 = require("@nestjs/common");
var BooksController = /** @class */ (function () {
    function BooksController(booksService) {
        this.booksService = booksService;
    }
    BooksController.prototype.findAll = function (request) {
        console.log(request.query);
        return this.booksService.findAll(request.query);
    };
    BooksController.prototype.findBook = function (bookId) {
        return this.booksService.findBook(bookId);
    };
    BooksController.prototype.createBook = function (newBook) {
        return this.booksService.createBook(newBook);
    };
    BooksController.prototype.deleteBook = function (bookId) {
        return this.booksService.deleteBook(bookId);
    };
    BooksController.prototype.updateBook = function (bookId, newBook) {
        return this.booksService.updateBook(bookId, newBook);
    };
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Req)())
    ], BooksController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':bookId'),
        __param(0, (0, common_1.Param)('bookId'))
    ], BooksController.prototype, "findBook");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], BooksController.prototype, "createBook");
    __decorate([
        (0, common_1.Delete)(':bookId'),
        __param(0, (0, common_1.Param)('bookId'))
    ], BooksController.prototype, "deleteBook");
    __decorate([
        (0, common_1.Put)(':bookId'),
        __param(0, (0, common_1.Param)('bookId')),
        __param(1, (0, common_1.Body)())
    ], BooksController.prototype, "updateBook");
    BooksController = __decorate([
        (0, common_1.Controller)('books')
    ], BooksController);
    return BooksController;
}());
exports.BooksController = BooksController;
