// const s="hello";
// console.log(typeof s1);

// const s2=new String('hello');
// console.log(typeof s2);
// console.log(window);
// window.alert(1);

// console.log(navigator.appVersion);


const book1={
    title:'book one',
    author:'john doe',
    year:'2013',
    getsummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2={
    title:'book two',
    author:'john mark',
    year:'2014',
    getsummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book3={
    title:'book three',
    author:'john die',
    year:'2016',
    getsummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

 console.log(Object.values(book2));
 console.log(Object.keys(book2));


