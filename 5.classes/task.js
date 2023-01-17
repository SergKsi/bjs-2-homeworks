
/* Конструктор класса должен принимать название (name), 
дату выпуска (releaseDate) 
и количество страниц (pagesCount) в качестве аргумента. 
Состояние (state) по умолчанию установите равным 100, 
тип type пока должен быть равен null.*/

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor() {
        super();   
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
        super();
        this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author) {
        super();
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author) {
        super();
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author) {
        super();
        this.author = author;
        this.type = "detective";
    }
}

