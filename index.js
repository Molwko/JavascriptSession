window.onload = function() {
    

    // ARRAYS AND LISTS
    let shoppingList = new Array (
        {img: './assets/images/bread.jpg' , item: "Bread", price: 20.50 },
        {img: './assets/images/eggs.jpg' , item: "Eggs", price: 89.22 },
        {img: './assets/images/milk.jpg' , item: "Milk", price: 67.90 },
        {img: './assets/images/sugar.jpg' , item: "Sugar", price: 180.99 },
        {img: './assets/images/coffee.jpg' , item: "Coffee", price: 156.99 },
        
        
    );

    let listUl = "<div style='width:100px'>";
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(shoppingList[i].item);
        listUl += 
        "<table style='width: 30%; margin: 8px border:1px solid grey border-radius: 16px;><tr><td rowspan='3' style='width: 150px';><img src='"+ 
        shoppingList[i].img +
        "' alt='' style='width: 500px; height: 250px; object-fit: cover; border-radius: 50%;'/>" + 
        "</td></tr> <tr><td>Item:"+shoppingList[i].item+"</td></tr> <tr><td>Price:"+shoppingList[i].price+ "</td></tr></table>";

    }
    listUl += "</div>";
    document.getElementById("listItems").innerHTML = listUl;

    //document.getElementById("listItems").innerHTML = 
    //shoppingList + "(" + shoppingList.length + ")";








    // ================================================================
    // VARIABLE, CONDITIONAL STATEMENTS
    let total = 0.00;
    let price1, price2, price3;
    price1 = 26.00;
    price2 = 34.78;
    price3 = 10.00;

    total = price1 + price2 + price3;

    let isqualify = "The user qualifies for free delivery"
    let isNotQualify = "The user does not qualify for free delivery"

    //if the user buys over R120.00, then the delivery is free
    if (total > 120) {
        //Then the user qualifies for free delivery
        document.getElementById("status").innerHTML = isqualify;
    } else {
        //Then the user does not qualify for free delivery
        document.getElementById("status").innerHTML = isNotQualify;
    }

    document.getElementById("total").innerHTML = "Total: " + total;
// =================================================================
    //document.getElementById("total").innerHTML =
   //  "Eggs: "+
    //  price1 +
    //"<br>Bread: " +
    // price2 +
    //"<br>Milk: " +
    // price3 +
   //  "<br>Total: " +
    //  total;

//const DATE = new Date('07-27-21')

//let houseNumber = 1037;
//let streetName = "ChatGPT Avenue";
//let region = "Joburg";
//let province = "Gauteng";

//let text = "<h1>" + DATE + "</h1>";

    //document.body.innerHTML = 
   // "<b>Fake House Number:</b> " +
   // houseNumber +
 //    ", " +
    //streetName +
   // ", " +
  //  region +
  //  ", " +
  //  province;
   // document.write("Hello Write");
   // console.log("Hello Console", DATE);
};
