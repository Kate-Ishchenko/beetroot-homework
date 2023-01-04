const users = [
    {
      id: 1,
      name: "Igor",
      age: 25,
      position: "bookkeeper",
      status: "Admin",
      salary: 8000,
      experience: 5,
      department: "Accounting",
    },
    {
      id: 2,
      name: "Angela",
      age: 26,
      position: "secretary",
      status: "User",
      salary: 7200,
      experience: 4,
      department: "Office",
    },
    {
      id: 3,
      name: "Victor",
      age: 39,
      position: "loader",
      status: "User",
      salary: 6800,
      experience: 8,
      department: "Warehouse",
    },
    {
      id: 4,
      name: "Andrew",
      age: 26,
      position: "loader",
      status: "User",
      salary: 6800,
      experience: 2,
      department: "Warehouse",
    },
    {
      id: 5,
      name: "Dmytro",
      age: 42,
      position: "driver",
      status: "User",
      salary: 10000,
      experience: 16,
      department: "Delivery",
    },
    {
      id: 6,
      name: "Oleg",
      age: 34,
      position: "driver",
      status: "User",
      salary: 10000,
      experience: 10,
      department: "Delivery",
    },
    {
      id: 7,
      name: "Alex",
      age: 38,
      position: "manager",
      status: "User",
      salary: 12200,
      experience: 6,
      department: "Office",
    },
    {
      id: 8,
      name: "Viola",
      age: 31,
      position: "saleswoman",
      status: "User",
      salary: 15000,
      experience: 8,
      department: "Sales",
    },
    {
      id: 9,
      name: "Mary",
      age: 25,
      position: "saleswoman",
      status: "User",
      salary: 15000,
      experience: 5,
      department: "Sales",
    },
    {
      id: 10,
      name: "Taras",
      age: 21,
      position: "salesman",
      status: "User",
      salary: 12000,
      experience: 1,
      department: "Sales",
    },
    {
      id: 11,
      name: "Peter",
      age: 42,
      position: "salesman",
      status: "User",
      salary: 22000,
      experience: 18,
      department: "Sales",
    },
    {
      id: 12,
      name: "Dennis",
      age: 40,
      position: "manager",
      status: "User",
      salary: 7200,
      experience: 11,
      department: "Office",
    },
    {
      id: 13,
      name: "Anton",
      age: 46,
      position: "loader",
      status: "User",
      salary: 6800,
      experience: 5,
      department: "Warehouse",
    },
    {
      id: 14,
      name: "Roman",
      age: 44,
      position: "head of department",
      status: "Admin",
      salary: 28000,
      experience: 16,
      department: "Office",
    },
    {
      id: 15,
      name: "Volodymyr",
      age: 36,
      position: "driver",
      status: "User",
      salary: 10000,
      experience: 8,
      department: "Delivery",
    },
    {
      id: 16,
      name: "Victorya",
      age: 28,
      position: "saleswoman",
      status: "User",
      salary: 19000,
      experience: 5,
      department: "Sales",
    },
  ];
  
  const table = document.getElementById("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  
  table.appendChild(thead);
  table.appendChild(tbody);
  
  function getHeader(arr) {
    return arr.map((item, i) => {
      if (i === 0) {
        return Object.keys(item).map((item, i) => {
          let th = document.createElement("th");
          th.textContent = item;
          if (i === 0 || i === 2 || i === 5 || i === 6) {
            th.setAttribute("data-type", "number");
          } else {
            th.setAttribute("data-type", "string");
          }
          thead.appendChild(th);
        });
      }
    });
  }
  
  getHeader(users);
  
  for (let user of users) {
    let tr = document.createElement("tr");
  
    let td1 = document.createElement("td");
    td1.textContent = user.id;
    tr.appendChild(td1);
  
    let td2 = document.createElement("td");
    td2.textContent = user.name;
    tr.appendChild(td2);
  
    let td3 = document.createElement("td");
    td3.textContent = user.age;
    tr.appendChild(td3);
  
    let td4 = document.createElement("td");
    td4.textContent = user.position;
    tr.appendChild(td4);
  
    let td5 = document.createElement("td");
    td5.textContent = user.status;
    tr.appendChild(td5);
  
    let td6 = document.createElement("td");
    td6.textContent = user.salary;
    tr.appendChild(td6);
  
    let td7 = document.createElement("td");
    td7.textContent = user.experience;
    tr.appendChild(td7);
  
    let td8 = document.createElement("td");
    td8.textContent = user.department;
    tr.appendChild(td8);
  
    tbody.appendChild(tr);
  }
  
  const headers = table.querySelectorAll("th");
  
  [].forEach.call(headers, function (header, index) {
    header.addEventListener("click", function () {
      sortColumn(index);
    });
  });
  
  const tableBody = table.querySelector("tbody");
  const rows = tableBody.querySelectorAll("tr");
  
  const directions = Array.from(headers).map(function (header) {
    return "";
  });
  
  const transform = function (index, content) {
    // Get the data type of column
    const type = headers[index].getAttribute("data-type");
    switch (type) {
      case "number":
        return parseFloat(content);
      case "string":
      default:
        return content;
    }
  };
  
  const sortColumn = function (index) {
    // Clone the rows
    const newRows = Array.from(rows);
  
    // Get the current direction
    const direction = directions[index] || "asc";
  
    // A factor based on the direction
    const multiplier = direction === "asc" ? 1 : -1;
  
    // Sort rows by the content of cells
    newRows.sort(function (rowA, rowB) {
      const cellA = rowA.querySelectorAll("td")[index].innerHTML;
      const cellB = rowB.querySelectorAll("td")[index].innerHTML;
  
      const a = transform(index, cellA);
      const b = transform(index, cellB);
  
      switch (true) {
        case a > b:
          return 1 * multiplier;
        case a < b:
          return -1 * multiplier;
        case a === b:
          return 0;
      }
    });
  
    // Remove old rows
    [].forEach.call(rows, function (row) {
      tableBody.removeChild(row);
    });
  
    // Append new row
    newRows.forEach(function (newRow) {
      tableBody.appendChild(newRow);
    });
  
    directions[index] = direction === "asc" ? "desc" : "asc";
  };