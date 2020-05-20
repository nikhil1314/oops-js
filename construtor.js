//constructor
function Book(title,author,year){
    console.log('book intialised..');
    this.title=title;
    this.author=author;
    this.year=year;

    this.getsummary=function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

}
// instiate an object
const book1=new Book('book one','john doe','2003');
const book2=new Book('book two','john mark','2006');

console.log(book2);
