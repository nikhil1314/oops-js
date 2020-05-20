//constructor
function Book(title,author,year){
    console.log('book intialised..');
    this.title=title;
    this.author=author;
    this.year=year;
}

    this.getsummary=function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
    //magizane consructor
    function Magazine(title ,author ,year ,month){
        Book.call(this,title,author,year);
    this.month=month;
    }
    //inherit prototype
    Magazine.prototype=Object.create(Book.prototype);
    //instanitate magazine object
    const mag1=new Magazine('mag one','brad','2013','jan');
    Magazine.prototype.constructor=Magazine;
    console.log(mag1);
