const newsBox = document.getElementById("news");

class newsApi {

    constructor() {
        this.apikey = "8a486ec653a6432c8da08b2dc2a4b5af";
    }

   async getNews(){

        let url = "https://newsapi.org/v2/everything?q=Apple&from=2021-11-28&sortBy=popularity&apiKey="+this.apikey;
        let getData = await fetch(url);
        let news = await getData.json();

        return {
            news
        }

    }

}

let newsApiObject = new newsApi();

newsApiObject.getNews().then((data)=>{
    data.news.articles.forEach((article)=>{
        newsBox.innerHTML+=`
        <div style="margin: 10px;border: 1px solid black;width:200px">
        <img src="${article.urlToImage}" width="200" alt="">
            <h1 style="font-size: 15px">${article.title}</h1>
            <span>${article.author}</span>
            <p>${article.description}</p>
        </div>
        `
    })
 })



// {source: {…}, author: 'Michael Stapelberg', title: 'MacBook Air M1: the best laptop?', description: 'You most likely have heard that Apple switched fro… ever. This got me curious: after years of not u…', url: 'https://michael.stapelberg.ch/posts/2021-11-28-macbook-air-m1/', …}
// author: "Michael Stapelberg"
// content: "Table of contents\r\nYou most likely have heard that Apple switched from Intel CPUs to their own,\r\nARM-based CPUs.\r\nVarious early reviews touted the new MacBooks, among the first devices with the\r\nARM-… [+9937 chars]"
// description: "You most likely have heard that Apple switched from Intel CPUs to their own, ARM-based CPUs.\nVarious early reviews touted the new MacBooks, among the first devices with the ARM-based M1 CPU, as the best computer ever. This got me curious: after years of not u…"
// publishedAt: "2021-11-28T16:00:15Z"
// source: {id: null, name: 'Stapelberg.ch'}
// title: "MacBook Air M1: the best laptop?"
// url: "https://michael.stapelberg.ch/posts/2021-11-28-macbook-air-m1/"
// urlToImage: "https://michael.stapelberg.ch/posts/2021-11-28-macbook-air-m1/mba_hu855bbe0a9c47ac557e5b09db74fa3b06_1092595_200x200_fit_q75_box.jpg"
//     [[Prototype]]: Object