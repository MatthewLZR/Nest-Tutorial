"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var books_service_1 = require("./books/books.service");
var books_controller_1 = require("./books/books.controller");
var typeorm_1 = require("@nestjs/typeorm");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: 'example',
                    database: 'my_nestjs_project',
                    entities: ['dist/**/*.entity.js'],
                    synchronize: true
                })],
            controllers: [app_controller_1.AppController, books_controller_1.BooksController],
            providers: [app_service_1.AppService, books_service_1.BooksService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
