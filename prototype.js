
function Book(title,author,year){
    console.log('book intialised..');
    this.title=title;
    this.author=author;
    this.year=year;

    

}
//getsummary
Book.prototype.getsummary=function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
//getage
Book.prototype.getage=function(){
    const years=new Date().getFullYear()-this.year;
    return `${this.title} is ${years} years old`;
};

//revise /change year
Book.prototype.revise=function(newYear){
    this.year=newYear;
    this.revised=true;
}
// instiate an object
const book1=new Book('book one','john doe','2003');
const book2=new Book('book two','john mark','2006');

console.log(book2.getage());
book2.revise('2017');
console.log(book2);