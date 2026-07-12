// =============================================
// NOSTRA BOOKS
// JavaScript
// =============================================
const books = [

{
title:"Ponniyin Selvan",
author:"Kalki",
language:"Tamil",
genre:"Historical",
price:899,
rating:5,
image:"images/books/ponniyin-selvan.jpg"
},

{
title:"Sivagamiyin Sabatham",
author:"Kalki",
language:"Tamil",
genre:"Historical",
price:799,
rating:5,
image:"images/books/sivagamiyin-sabatham.jpg"
},

{
title:"Parthiban Kanavu",
author:"Kalki",
language:"Tamil",
genre:"Historical",
price:499,
rating:5,
image:"images/books/parthiban-kanavu.jpg"
},

{
title:"Thirukkural",
author:"Thiruvalluvar",
language:"Tamil",
genre:"Classic",
price:299,
rating:5,
image:"images/books/thirukkural.jpg"
},

{
title:"Kurinjimalar",
author:"Na. Parthasarathy",
language:"Tamil",
genre:"Classic",
price:450,
rating:4,
image:"images/books/kurinjimalar.jpg"
},

{
title:"Atomic Habits",
author:"James Clear",
language:"English",
genre:"Self Help",
price:599,
rating:5,
image:"images/books/atomic-habits.jpg"
},

{
title:"Rich Dad Poor Dad",
author:"Robert Kiyosaki",
language:"English",
genre:"Business",
price:399,
rating:5,
image:"images/books/rich-dad-poor-dad.jpg"
},

{
title:"Sapiens",
author:"Yuval Noah Harari",
language:"English",
genre:"History",
price:799,
rating:5,
image:"images/books/sapiens.jpg"
},

{
title:"The Alchemist",
author:"Paulo Coelho",
language:"English",
genre:"Classic",
price:499,
rating:5,
image:"images/books/alchemist.jpg"
},

{
title:"Clean Code",
author:"Robert C. Martin",
language:"English",
genre:"Programming",
price:799,
rating:5,
image:"images/books/clean-code.jpg"
}

];
const books = [

{
title:"Ponniyin Selvan",
author:"Kalki",
language:"Tamil",
genre:"Historical",
price:899,
rating:5,
image:"images/books/ponniyin-selvan.jpg"
},

{
title:"Sivagamiyin Sabatham",
author:"Kalki",
language:"Tamil",
genre:"Historical",
price:799,
rating:5,
image:"images/books/sivagamiyin-sabatham.jpg"
},

{
title:"Parthiban Kanavu",
author:"Kalki",
language:"Tamil",
genre:"Historical",
price:499,
rating:5,
image:"images/books/parthiban-kanavu.jpg"
},

{
title:"Thirukkural",
author:"Thiruvalluvar",
language:"Tamil",
genre:"Classic",
price:299,
rating:5,
image:"images/books/thirukkural.jpg"
},

{
title:"Kurinjimalar",
author:"Na. Parthasarathy",
language:"Tamil",
genre:"Classic",
price:450,
rating:4,
image:"images/books/kurinjimalar.jpg"
},

{
title:"Atomic Habits",
author:"James Clear",
language:"English",
genre:"Self Help",
price:599,
rating:5,
image:"images/books/atomic-habits.jpg"
},

{
title:"Rich Dad Poor Dad",
author:"Robert Kiyosaki",
language:"English",
genre:"Business",
price:399,
rating:5,
image:"images/books/rich-dad-poor-dad.jpg"
},

{
title:"Sapiens",
author:"Yuval Noah Harari",
language:"English",
genre:"History",
price:799,
rating:5,
image:"images/books/sapiens.jpg"
},

{
title:"The Alchemist",
author:"Paulo Coelho",
language:"English",
genre:"Classic",
price:499,
rating:5,
image:"images/books/alchemist.jpg"
},

{
title:"Clean Code",
author:"Robert C. Martin",
language:"English",
genre:"Programming",
price:799,
rating:5,
image:"images/books/clean-code.jpg"
}

];
const books = [

{
title:"Ponniyin Selvan",
author:"Kalki",
language:"Tamil",
genre:"Historical",
price:899,
rating:5,
image:"images/books/ponniyin-selvan.jpg"
},

{
title:"Sivagamiyin Sabatham",
author:"Kalki",
language:"Tamil",
genre:"Historical",
price:799,
rating:5,
image:"images/books/sivagamiyin-sabatham.jpg"
},

{
title:"Parthiban Kanavu",
author:"Kalki",
language:"Tamil",
genre:"Historical",
price:499,
rating:5,
image:"images/books/parthiban-kanavu.jpg"
},

{
title:"Thirukkural",
author:"Thiruvalluvar",
language:"Tamil",
genre:"Classic",
price:299,
rating:5,
image:"images/books/thirukkural.jpg"
},

{
title:"Kurinjimalar",
author:"Na. Parthasarathy",
language:"Tamil",
genre:"Classic",
price:450,
rating:4,
image:"images/books/kurinjimalar.jpg"
},

{
title:"Atomic Habits",
author:"James Clear",
language:"English",
genre:"Self Help",
price:599,
rating:5,
image:"images/books/atomic-habits.jpg"
},

{
title:"Rich Dad Poor Dad",
author:"Robert Kiyosaki",
language:"English",
genre:"Business",
price:399,
rating:5,
image:"images/books/rich-dad-poor-dad.jpg"
},

{
title:"Sapiens",
author:"Yuval Noah Harari",
language:"English",
genre:"History",
price:799,
rating:5,
image:"images/books/sapiens.jpg"
},

{
title:"The Alchemist",
author:"Paulo Coelho",
language:"English",
genre:"Classic",
price:499,
rating:5,
image:"images/books/alchemist.jpg"
},

{
title:"Clean Code",
author:"Robert C. Martin",
language:"English",
genre:"Programming",
price:799,
rating:5,
image:"images/books/clean-code.jpg"
}

];
displayBooks(books);
searchInput.addEventListener("keyup",()=>{

const search=searchInput.value.toLowerCase();

const filteredBooks=books.filter(book=>{

return(

book.title.toLowerCase().includes(search)

||

book.author.toLowerCase().includes(search)

||

book.genre.toLowerCase().includes(search)

||

book.language.toLowerCase().includes(search)

);

});

displayBooks(filteredBooks);

});
/*=========================
        MOBILE MENU
==========================*/

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn && navLinks){

    menuBtn.onclick = function(){

        navLinks.classList.toggle("active");

    }

}
