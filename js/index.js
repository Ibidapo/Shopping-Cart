document.addEventListener('DOMContentLoaded', function(){
  // Variables holding values from input fields
  const name = document.getElementById('name');
  const qty =  document.getElementById('qty');
  const price = document.getElementById('price');
  // Varaiable holding 'total cell' element
  const total = document.getElementById('total');
  // Variables holding 'add button' and 'clear button' elements
  const addCart = document.getElementById('addCart');
  const clearCart = document.getElementById('clearCart');
  // Variables holding values of Table elements
  let table, row, cell1, cell2, cell3, cell4;

  let subTotals = [];
  let items;

  const getValues = (itemName, itemQty, itemPrice) => {
    //initilize element to variables
    let itemSubTotal = itemQty * itemPrice;
    subTotals.push(itemSubTotal);

    document.getElementById('cartForm').reset()

    return {itemName, itemQty, itemPrice, itemSubTotal};
  }

  const insertValues = (itemValue) => {
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
    cell1.innerHTML = itemValue.itemName;
    cell2.innerHTML = itemValue.itemQty;
    cell3.innerHTML = itemValue.itemPrice;
    cell4.innerHTML = itemValue.itemSubTotal;
    total.innerHTML = subTotals.reduce((a, b) => a + b);
  }

  const clearTable = () => {
    let fullTable = document.getElementById('cartTable')
    let numOfRows = fullTable.rows.length;

    for (let i = numOfRows - 2; i > 0; i--) {
      fullTable.deleteRow(i);
    }

    total.innerHTML = 0;
    subTotals = [];
    clearCart.style.display = 'none';
  }

  addCart.addEventListener('click', function(event) {
    event.preventDefault();
    let nameVal = name.value;
    let qtyVal = qty.value;
    let priceVal = price.value;
    items = getValues(nameVal, qtyVal, priceVal);
    insertValues(items);
    clearCart.style.display = 'inline-block';
  });

  clearCart.addEventListener('click', clearTable);
}); 