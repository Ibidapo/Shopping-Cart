document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM has loaded');
  // Variables holding values from input fields
  let name, qty, price, subTotal, itemValues;
  // Varaiable holding 'total cell' element
  let total = document.getElementById('total');
  // Variables holding 'add button' and 'clear button' elements
  let addCart = document.getElementById('addCart');
  let clearCart = document.getElementById('clearCart');
  // Variables holding values of Table elements
  let table, row, cell1, cell2, cell3, cell4;

  let subTotals = [];

  let getValues = () => {
    //initilize element to variables
    name = document.getElementById('name').value;
    qty = document.getElementById('qty').value;
    price = document.getElementById('price').value;
    subTotal = qty * price;
    subTotals.push(subTotal);

    document.getElementById('cartForm').reset()

    console.log({name, qty, price, subTotal});
    return {name, qty, price, subTotal};
  }

  let insertValues = () => {
    itemValues = getValues();

    // Initialize element of id='tableCart' to variable 'table'
    table = document.getElementById('cartTable');
    // Create an empty <tr> element and add it to the 1st position of the table body
    row = table.insertRow(1);
    // Insert new cells (<td> elements) at the 1st, 2nd, 3rd and 4th position of the 'new' <tr> element
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);

    // Add some text to the new cells:
    cell1.innerHTML = itemValues.name;
    cell2.innerHTML = itemValues.qty;
    cell3.innerHTML = itemValues.price;
    cell4.innerHTML = itemValues.subTotal;
    total.innerHTML = subTotals.reduce((a, b) => a + b);
  }

  let clearTable = () => {
    let fullTable = document.getElementById('cartTable')
    let numOfRows = fullTable.rows.length;

    for (let i = numOfRows - 2; i > 0; i--) {
      fullTable.deleteRow(i);
    }

    total.innerHTML = 0;
    subTotals = [];
  }

  addCart.addEventListener('click', function(event) {
    event.preventDefault();
    insertValues();
  });

  clearCart.addEventListener('click', clearTable);
}); 