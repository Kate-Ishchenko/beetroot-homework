const shoppingList = [
    {
      name: "Blender",
      amount: 10,
      ordered: true,
      price: 120,
      sum: 1200,
    },
    {
      name: "Phone",
      amount: 35,
      ordered: false,
      price: 550,
      sum: 19250,
    },
    {
      name: "Watch",
      amount: 30,
      ordered: true,
      price: 90,
      sum: 2700,
    },
    {
      name: "Powerbank",
      amount: 110,
      ordered: false,
      price: 15,
      sum: 1650,
    },
    {
      name: "Lamp",
      amount: 62,
      ordered: true,
      price: 12,
      sum: 744,
    },
  ];
  
  // мінімум
  // перше завдання
  
  
  function sortList(shoppingList) {
    return shoppingList.sort((a, b) => Number(b.ordered) - Number(a.ordered));
  }
  
  // друге завдання
  
  
  function orderItem(arr, item) {
    return arr.map((element) =>
      element.name === item ? { ...element, ordered: true } : element
    );
  }
  
  console.log(sortList(shoppingList));
  console.log(orderItem(shoppingList, "Powerbank"));
  console.log(orderItem(shoppingList, "Phone"));
  
  // норма
  // перше завдання
  
  function deleteItem(arr, item) {
    const newList = [];
    arr.map((element) => (element.name !== item ? newList.push(element) : null));
    return newList;
  }
  
  console.log(deleteItem(shoppingList, "Blender"));