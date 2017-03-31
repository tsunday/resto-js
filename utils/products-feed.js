var Product = require('../models/products');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/resto-app');

var products = [
    new Product({
        imagePath: "/images/foods/f1.jpg",
        title: "Hummsus",
        description: "Isreali food",
        price: 16,
        alias: "hum",
        rate: 2,
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lorem vel dui euismod, nec placerat urna iaculis. Sed tempor, orci vel cursus sagittis, quam est pellentesque metus, laoreet aliquam ligula sapien id lacus. Morbi maximus viverra mauris, eget suscipit massa vestibulum quis. Aliquam quis ante vel mauris dictum suscipit. Nulla eu sodales arcu. Etiam lorem neque, dictum sed elementum eu, feugiat in nisl. Curabitur eget turpis aliquet, suscipit diam sit amet, malesuada enim. Suspendisse eget odio id augue condimentum aliquam convallis quis justo. Nullam ac laoreet quam. Nullam a nibh auctor, congue tellus nec, elementum purus. Suspendisse et nisi et ligula porta placerat in sed ipsum.",
        comments: ["very good", "nice"]
    }),
    new Product({
        imagePath: "/images/foods/f2.jpg",
        title: "Falafel",
        description: "Falafel falafel",
        price: 12,
        alias: "fal",
        rate: 5,
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lorem vel dui euismod, nec placerat urna iaculis. Sed tempor, orci vel cursus sagittis, quam est pellentesque metus, laoreet aliquam ligula sapien id lacus. Morbi maximus viverra mauris, eget suscipit massa vestibulum quis. Aliquam quis ante vel mauris dictum suscipit. Nulla eu sodales arcu. Etiam lorem neque, dictum sed elementum eu, feugiat in nisl. Curabitur eget turpis aliquet, suscipit diam sit amet, malesuada enim. Suspendisse eget odio id augue condimentum aliquam convallis quis justo. Nullam ac laoreet quam. Nullam a nibh auctor, congue tellus nec, elementum purus. Suspendisse et nisi et ligula porta placerat in sed ipsum.",
        comments: ["very good", "nice"]
    }),
    new Product({
        imagePath: "/images/foods/f3.jpg",
        title: "Spaghetti",
        description: "Italian dinner",
        price: 19,
        alias: "spag",
        rate: 1,
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lorem vel dui euismod, nec placerat urna iaculis. Sed tempor, orci vel cursus sagittis, quam est pellentesque metus, laoreet aliquam ligula sapien id lacus. Morbi maximus viverra mauris, eget suscipit massa vestibulum quis. Aliquam quis ante vel mauris dictum suscipit. Nulla eu sodales arcu. Etiam lorem neque, dictum sed elementum eu, feugiat in nisl. Curabitur eget turpis aliquet, suscipit diam sit amet, malesuada enim. Suspendisse eget odio id augue condimentum aliquam convallis quis justo. Nullam ac laoreet quam. Nullam a nibh auctor, congue tellus nec, elementum purus. Suspendisse et nisi et ligula porta placerat in sed ipsum.",
        comments: ["very good", "nice"]
    }),
    new Product({
        imagePath: "/images/foods/f4.jpg",
        title: "Fruits",
        description: "Fruits for lunch",
        price: 9,
        alias: "fru",
        rate: 6,
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lorem vel dui euismod, nec placerat urna iaculis. Sed tempor, orci vel cursus sagittis, quam est pellentesque metus, laoreet aliquam ligula sapien id lacus. Morbi maximus viverra mauris, eget suscipit massa vestibulum quis. Aliquam quis ante vel mauris dictum suscipit. Nulla eu sodales arcu. Etiam lorem neque, dictum sed elementum eu, feugiat in nisl. Curabitur eget turpis aliquet, suscipit diam sit amet, malesuada enim. Suspendisse eget odio id augue condimentum aliquam convallis quis justo. Nullam ac laoreet quam. Nullam a nibh auctor, congue tellus nec, elementum purus. Suspendisse et nisi et ligula porta placerat in sed ipsum.",
        comments: ["very good", "nice"]
    }),
    new Product({
        imagePath: "/images/foods/f5.jpg",
        title: "Juice",
        description: "Orange juice from oranges",
        price: 6,
        alias: "jui",
        rate: 1,
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lorem vel dui euismod, nec placerat urna iaculis. Sed tempor, orci vel cursus sagittis, quam est pellentesque metus, laoreet aliquam ligula sapien id lacus. Morbi maximus viverra mauris, eget suscipit massa vestibulum quis. Aliquam quis ante vel mauris dictum suscipit. Nulla eu sodales arcu. Etiam lorem neque, dictum sed elementum eu, feugiat in nisl. Curabitur eget turpis aliquet, suscipit diam sit amet, malesuada enim. Suspendisse eget odio id augue condimentum aliquam convallis quis justo. Nullam ac laoreet quam. Nullam a nibh auctor, congue tellus nec, elementum purus. Suspendisse et nisi et ligula porta placerat in sed ipsum.",
        comments: ["very good", "nice"]
    })
];

var done = 0;
for (var i = 0; i < products.length; i++)
{
        products[i].save(function(err, result){
        done++;
        if(done === products.length){
            debugger;
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}