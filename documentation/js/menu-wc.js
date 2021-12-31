'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tutorial-nest-js documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c57691f2edbd03e42f30a19ac5a70574f8d3a988b2aefb56c0ed6fac1dd1b844041710fb1e1143404d514cf8a85d7c6d8d1ddce0e63d68c5378e05ec41b1129f"' : 'data-target="#xs-controllers-links-module-AppModule-c57691f2edbd03e42f30a19ac5a70574f8d3a988b2aefb56c0ed6fac1dd1b844041710fb1e1143404d514cf8a85d7c6d8d1ddce0e63d68c5378e05ec41b1129f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c57691f2edbd03e42f30a19ac5a70574f8d3a988b2aefb56c0ed6fac1dd1b844041710fb1e1143404d514cf8a85d7c6d8d1ddce0e63d68c5378e05ec41b1129f"' :
                                            'id="xs-controllers-links-module-AppModule-c57691f2edbd03e42f30a19ac5a70574f8d3a988b2aefb56c0ed6fac1dd1b844041710fb1e1143404d514cf8a85d7c6d8d1ddce0e63d68c5378e05ec41b1129f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c57691f2edbd03e42f30a19ac5a70574f8d3a988b2aefb56c0ed6fac1dd1b844041710fb1e1143404d514cf8a85d7c6d8d1ddce0e63d68c5378e05ec41b1129f"' : 'data-target="#xs-injectables-links-module-AppModule-c57691f2edbd03e42f30a19ac5a70574f8d3a988b2aefb56c0ed6fac1dd1b844041710fb1e1143404d514cf8a85d7c6d8d1ddce0e63d68c5378e05ec41b1129f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c57691f2edbd03e42f30a19ac5a70574f8d3a988b2aefb56c0ed6fac1dd1b844041710fb1e1143404d514cf8a85d7c6d8d1ddce0e63d68c5378e05ec41b1129f"' :
                                        'id="xs-injectables-links-module-AppModule-c57691f2edbd03e42f30a19ac5a70574f8d3a988b2aefb56c0ed6fac1dd1b844041710fb1e1143404d514cf8a85d7c6d8d1ddce0e63d68c5378e05ec41b1129f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-86b2a63bd698a78102262a753a2f84f05e489b80ba8125466381c312fd79d44a9d4346bc8d497bef6968915f906d3fe9eddcf26c141b19c2881fa075880fe912"' : 'data-target="#xs-injectables-links-module-AuthModule-86b2a63bd698a78102262a753a2f84f05e489b80ba8125466381c312fd79d44a9d4346bc8d497bef6968915f906d3fe9eddcf26c141b19c2881fa075880fe912"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-86b2a63bd698a78102262a753a2f84f05e489b80ba8125466381c312fd79d44a9d4346bc8d497bef6968915f906d3fe9eddcf26c141b19c2881fa075880fe912"' :
                                        'id="xs-injectables-links-module-AuthModule-86b2a63bd698a78102262a753a2f84f05e489b80ba8125466381c312fd79d44a9d4346bc8d497bef6968915f906d3fe9eddcf26c141b19c2881fa075880fe912"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksModule.html" data-type="entity-link" >BooksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BooksModule-d054df05f848a3ff7c2ea561f16f92e567a179941bfe0ff11c5722ca28104ace4a48f81364aac2d6157ff750721fdcf559c14eb3bdc3878cf1f1834116c303e2"' : 'data-target="#xs-controllers-links-module-BooksModule-d054df05f848a3ff7c2ea561f16f92e567a179941bfe0ff11c5722ca28104ace4a48f81364aac2d6157ff750721fdcf559c14eb3bdc3878cf1f1834116c303e2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BooksModule-d054df05f848a3ff7c2ea561f16f92e567a179941bfe0ff11c5722ca28104ace4a48f81364aac2d6157ff750721fdcf559c14eb3bdc3878cf1f1834116c303e2"' :
                                            'id="xs-controllers-links-module-BooksModule-d054df05f848a3ff7c2ea561f16f92e567a179941bfe0ff11c5722ca28104ace4a48f81364aac2d6157ff750721fdcf559c14eb3bdc3878cf1f1834116c303e2"' }>
                                            <li class="link">
                                                <a href="controllers/BooksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BooksModule-d054df05f848a3ff7c2ea561f16f92e567a179941bfe0ff11c5722ca28104ace4a48f81364aac2d6157ff750721fdcf559c14eb3bdc3878cf1f1834116c303e2"' : 'data-target="#xs-injectables-links-module-BooksModule-d054df05f848a3ff7c2ea561f16f92e567a179941bfe0ff11c5722ca28104ace4a48f81364aac2d6157ff750721fdcf559c14eb3bdc3878cf1f1834116c303e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BooksModule-d054df05f848a3ff7c2ea561f16f92e567a179941bfe0ff11c5722ca28104ace4a48f81364aac2d6157ff750721fdcf559c14eb3bdc3878cf1f1834116c303e2"' :
                                        'id="xs-injectables-links-module-BooksModule-d054df05f848a3ff7c2ea561f16f92e567a179941bfe0ff11c5722ca28104ace4a48f81364aac2d6157ff750721fdcf559c14eb3bdc3878cf1f1834116c303e2"' }>
                                        <li class="link">
                                            <a href="injectables/BooksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BooksController.html" data-type="entity-link" >BooksController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/Book-1.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookDto.html" data-type="entity-link" >BookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigService.html" data-type="entity-link" >ConfigService</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBookDto.html" data-type="entity-link" >UpdateBookDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksService.html" data-type="entity-link" >BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});