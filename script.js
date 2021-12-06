var arr = [
    {
        name:"Projector",
        price:2999,
        img:"pic1.jpg"
    },
    {
        name:"Watch",
        price:500,
        img:"pic2.jpg"
    },
    {
        name:"Pendrive",
        price:300,
        img:"pic3.jpg"
    },
    {
        name:"Mic",
        price:2500,
        img:"pic4.jpg"
    },
    {
        name:"Webcamera",
        price:1500,
        img:"pic5.jpg"
    },
    {
        name:"Keyboard",
        price:600,
        img:"pic6.jpg"
    }
]
var totalPrice = 0;
var headTag = document.createElement("h1");
headTag.innerText = "Shopping Cart";
headTag.style.backgroundColor = "pink";
headTag.style.textAlign = "center";
document.body.appendChild(headTag);

var myDiv = document.createElement("div");
myDiv.style.display = "flex";
myDiv.style.flexDirection = "row";
myDiv.style.width = "1330px";
document.body.appendChild(myDiv);

var board = document.createElement("div");
board.style.display = "flex";
board.style.flexDirection = "row";
board.style.flexWrap = "wrap";
board.style.width = "1020px";
board.style.justifyContent = "center";
myDiv.appendChild(board);

arr.forEach(elem=>{
    var box = document.createElement("div");
    box.style.width = "300px";
    box.style.height = "300px";
    box.style.border = "1px solid pink";
    box.style.padding = "3px";
    board.appendChild(box);

    var box1 = document.createElement("div");
    box1.style.width = "300px";
    box1.style.height = "180px";
    box.appendChild(box1)

    var pic = document.createElement("img");
    pic.style.width = "300px";
    pic.style.height = "180px";
    pic.setAttribute('src',elem.img);
    box1.appendChild(pic);

    var text1 = document.createElement("p");
    text1.innerText = "Name"+":"+elem.name;
    box.appendChild(text1);
    
    var text2 = document.createElement("p");
    text2.innerText = "Price"+":"+elem.price;
    box.appendChild(text2);

    var button = document.createElement("button"); 
    button.innerText = "Add to cart";
    button.addEventListener('click',(event)=>{
        button.disabled = "true";
        var list = document.createElement("table");
        cart.appendChild(list);
        
        var tr1 = document.createElement("tr");
        list.appendChild(tr1);

        var td1 = document.createElement("td");
        td1.style.width = "120px";
        td1.style.borderBottom = "1px solid black";
        td1.style.fontWeight = "bold"
        td1.innerText = elem.name;
        tr1.appendChild(td1);

        var td2 = document.createElement("td");
        td2.style.borderBottom = "1px solid black";
        td2.style.width = "120px";
        td2.innerText = elem.price;
        tr1.appendChild(td2);

        var rem = document.createElement("button");
        rem.innerText = "remove";
        rem.addEventListener("click",(e)=>{
            list.remove();
            totalPrice = totalPrice- +elem.price;
            tag.innerText = "Total"+"="+totalPrice;
        })
        tr1.appendChild(rem);

        totalPrice = totalPrice+ +elem.price;
        tag.innerText = "Total"+"="+totalPrice;
    })
    box.appendChild(button);
});

var cart = document.createElement("div");
cart.style.backgroundColor = "#ffe7ec";
cart.style.width = "350px";
cart.style.border = "1px solid black";
myDiv.appendChild(cart);

var cartTitle = document.createElement("h3");
cartTitle.innerText = "Your Cart";
cartTitle.style.textAlign = "center";
cartTitle.style.backgroundColor = "pink";
cart.appendChild(cartTitle);

var tag = document.createElement("h4");
tag.innerText = "Total = 0"
cart.appendChild(tag);