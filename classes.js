class Book{
    constructor(title ,author, year){
        this.title=title;
        this.author=author;
        this.year=year;

    }
    getsummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;

    }
    getage(){
        const years=new Date().getFullYear()-this.year;
    return `${this.title} is ${years} years old`;
    }
    revise(newyear) {
        this.year=newyear;
        this.revised=true;
    }
    static topbookstore(){
        return 'nikhil';
    }



    };
const book1=new Book('book one','brad','2013');
book1.revise('2018');
console.log(book1);
console.log(Book.topbookstore());
