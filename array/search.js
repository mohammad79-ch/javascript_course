let products = [{
    'title' : "title 1",
     'category' : "category 1"
},{
    'title' : "title 2",
    'category' : "category 2"
},{
    'title' : "title 3",
    'category' : "category 3"
}]

let search = ['title 1'];

let result = products.findIndex(function (prodcut){
    return prodcut.title == search;
});

console.log(result)