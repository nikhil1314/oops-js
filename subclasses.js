class Book{
    constructor(title ,author, year){
        this.title=title;
        this.author=author;
        this.year=year;

    }
    getsummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;

    }
}

//magazine sub class
class magazine extends Book{
    constructor(title, author, year,month){
        super(title,author,year);
        this.month=month;


    }
}
//instativ magazine
const mag1=new magazine('magone',' brad', '2014', 'jan');
console.log(mag1.getsummary());