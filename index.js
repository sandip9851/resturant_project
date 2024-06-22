let foodList = [
  {
    "id": 1,
    "name": "Cheeseburger",
    "price": 5.99,
    "imgSrc": "https://images.unsplash.com/photo-1607408315634-21cc56a6e167"
  },
  {
    "id": 2,
    "name": "Pizza",
    "price": 8.99,
    "imgSrc": "https://images.unsplash.com/photo-1574508228645-e014a0d24d70"
  },
  {
    "id": 3,
    "name": "Tacos",
    "price": 3.99,
    "imgSrc": "https://images.unsplash.com/photo-1582552487608-09e993d5f760"
  },
  {
    "id": 4,
    "name": "Sushi",
    "price": 11.99,
    "imgSrc": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  },
  {
    "id": 5,
    "name": "Pasta",
    "price": 9.99,
    "imgSrc": "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
  },
  {
    "id": 6,
    "name": "Fried Chicken",
    "price": 7.99,
    "imgSrc": "https://images.unsplash.com/photo-1569058248126-fc87f2f2145b"
  },
  {
    "id": 7,
    "name": "Grilled Cheese Sandwich",
    "price": 4.99,
    "imgSrc": "https://images.unsplash.com/photo-1585238342025-14608d69cdb3"
  },
  {
    "id": 8,
    "name": "Steak",
    "price": 15.99,
    "imgSrc": "https://images.unsplash.com/photo-1603118215437-5f2c5d40a502"
  },
  {
    "id": 9,
    "name": "Caesar Salad",
    "price": 6.99,
    "imgSrc": "https://images.unsplash.com/photo-1604147706283-18f2001f1c51"
  },
  {
    "id": 10,
    "name": "Fish and Chips",
    "price": 8.49,
    "imgSrc": "https://images.unsplash.com/photo-1592843601846-39e64c4f9e58"
  },
  {
    "id": 11,
    "name": "Ramen",
    "price": 9.49,
    "imgSrc": "https://images.unsplash.com/photo-1562967916-eb82221dfb25"
  },
  {
    "id": 12,
    "name": "Burrito",
    "price": 7.49,
    "imgSrc": "https://images.unsplash.com/photo-1575355548632-82cc64b2561b"
  },
  {
    "id": 13,
    "name": "Pho",
    "price": 8.99,
    "imgSrc": "https://images.unsplash.com/photo-1599658880436-c61792e70672"
  },
  {
    "id": 14,
    "name": "Pad Thai",
    "price": 9.99,
    "imgSrc": "https://images.unsplash.com/photo-1546069901-eacef0df6022"
  },
  {
    "id": 15,
    "name": "Gyro",
    "price": 6.49,
    "imgSrc": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
  },
  {
    "id": 16,
    "name": "Ice Cream",
    "price": 3.99,
    "imgSrc": "https://images.unsplash.com/photo-1590571024444-d5bc1c3d16d5"
  },
  {
    "id": 17,
    "name": "Smoothie",
    "price": 4.99,
    "imgSrc": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
  },
  {
    "id": 18,
    "name": "Apple Pie",
    "price": 4.49,
    "imgSrc": "https://images.unsplash.com/photo-1604537466572-78b8dd45b3b5"
  },
  {
    "id": 19,
    "name": "Chocolate Cake",
    "price": 5.49,
    "imgSrc": "https://images.unsplash.com/photo-1599785209707-eeddb7f0b210"
  },
  {
    "id": 20,
    "name": "Pancakes",
    "price": 4.99,
    "imgSrc": "https://images.unsplash.com/photo-1583488299508-16a1075e2f69"
  },
  {
    "id": 21,
    "name": "Cupcake",
    "price": 2.99,
    "imgSrc": "https://images.unsplash.com/photo-1511381939415-e44015466834"
  },
  {
    "id": 22,
    "name": "Crepes",
    "price": 5.99,
    "imgSrc": "https://images.unsplash.com/photo-1600891964095-4b1db6e62728"
  },
  {
    "id": 23,
    "name": "Club Sandwich",
    "price": 6.99,
    "imgSrc": "https://images.unsplash.com/photo-1551446591-142875a901a1"
  },
  {
    "id": 24,
    "name": "Falafel",
    "price": 5.49,
    "imgSrc": "https://images.unsplash.com/photo-1592194996308-7d17c7f6e29c"
  },
  {
    "id": 25,
    "name": "Curry",
    "price": 9.49,
    "imgSrc": "https://images.unsplash.com/photo-1604908177442-d869dc768b48"
  }
];

let menu = document.getElementById("menu-btn");

menu.addEventListener("click", menuList);

function menuList() {
  let offerDetails = document.getElementById("offer-update");
  if (offerDetails) {
    offerDetails.remove();
  }
  
  let menuCard = document.getElementById("menu");
  if (menuCard) {
    menuCard.remove();
  }

  let rightSideBar = document.getElementById("rightSide");
  let newMenuCard = document.createElement("div");
  newMenuCard.id = "newFoods";
  
  for (let val of foodList) {
    let allFoods = document.createElement("div");
    allFoods.className = "food-list";
    allFoods.innerHTML = `
      <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image">
      <p class="mt-0 ms-2 fw-bold">${val.name}</p>
      <div class="food-details">
        <p>$${val.price}/-</p>
        <button><i class="fa-solid fa-plus"></i></button>
      </div>
    `;
    newMenuCard.append(allFoods);
  }

  rightSideBar.append(newMenuCard);
}

function TakeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const burgers = foodList.filter(food => food.name.toLowerCase().includes('burger'));
      const order = [];
      while (order.length < 3 && burgers.length > 0) {
        const randomIndex = Math.floor(Math.random() * burgers.length);
        order.push(burgers.splice(randomIndex, 1)[0]);
      }
      resolve(order);
    }, 2500);
  });
}

function orderPrep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

function payOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

function thankyouFnc() {
  alert("Thank you for eating with us today!");
}

async function processOrder() {
  try {
    const order = await TakeOrder();
    console.log("Order:", order);

    const prepStatus = await orderPrep();
    console.log("Order Prep Status:", prepStatus);

    const paymentStatus = await payOrder();
    console.log("Payment Status:", paymentStatus);

    if (paymentStatus.paid) {
      thankyouFnc();
    }
  } catch (error) {
    console.error("Error processing order:", error);
  }
}

processOrder();
