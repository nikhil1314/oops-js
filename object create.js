//Object of protos
const bookprotos ={
    getsummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getage:function(){
        const years=new Date().getFullYear()-this.year;
    return `${this.title} is ${years} years old`;
    }
}
// Create object
// const book1=Object.create(bookprotos);
// book1.title='book one';
// book1.author='brad';
// book1.year='2013';
const book1=Object.create(bookprotos, {
   title: {value:'book one' },
   author: {value:'brad' },
   year: {value:'2013' }


});

console.log(book1);