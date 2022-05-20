const quotes = [
    {
        quote: "test1",
        author: "test2"
    },
    {
        quote: "test3",
        author: "test4"
    },
    {
        quote: "test5",
        author: "test6"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;