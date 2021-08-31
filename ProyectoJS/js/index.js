let cash = _cashier(db_cash);
let products = _products(db_products);
let purchase = _purchase(db_purchase);
let sales = _sales(db_sales);

const getCash = () => {
  let cashText = document.getElementById("cash");
  cashText.innerHTML = `Capital $ ${cash.getStored()} MXN`;
};

const buidTable = () => {
  let table = document.getElementById("productTable");
  let lista = table.getElementsByTagName("tbody")[0];
  lista.innerHTML = "";

  products.getAllProducts().forEach((elemento) => {
    let row = document.createElement("tr");
    const sellButton = `sale-${elemento.id}`;
    const purchaseButton = `purchase-${elemento.id}`;
    row.innerHTML = `
            <th scope="row">${elemento.id}</th>
            <td>${elemento.name}</td>
            <td>${elemento.stored}</td>
            <td>${elemento.price}</td>
            <td><button type="button" class="btn btn-primary" id="${sellButton}">Vender</button></td>
            <td><button type="button" class="btn btn-secondary" id="${purchaseButton}">Comprar</button></td>
        `;
    lista.appendChild(row);
    document.getElementById(sellButton).addEventListener("click", (e) => {
      sellButtonEvent(elemento.id);
    });
    document.getElementById(purchaseButton).addEventListener("click", (e) => {
      purchaseButtonEvent(elemento.id);
    });
  });
};

const buildSaleTable = () => {
  let table = document.getElementById("salesTable");
  let lista = table.getElementsByTagName("tbody")[0];
  lista.innerHTML = "";
  sales.getAllSales().forEach((element) => {
    let row = document.createElement("tr");
    let date = moment(element.date);
    row.innerHTML = `
        <th scope="row">${element.productId}</th>
        <td>${date.format('LLLL')}</td>
        <td>${element.quantity}</td>
        <td>${element.totalPrice}</td>
    `;
    lista.appendChild(row);
  });
};

const buildPurchaseTable = () => {
    let table = document.getElementById("purchaseTable");
    let lista = table.getElementsByTagName("tbody")[0];
    lista.innerHTML = "";
    purchase.getAllPurchase().forEach((element) => {
      let row = document.createElement("tr");
      let date = moment(element.date);
      row.innerHTML = `
          <th scope="row">${element.productId}</th>
          <td>${date.format('LLLL')}</td>
          <td>${element.quantity}</td>
          <td>${element.price}</td>
          <td>${element.totalPrice}</td>
      `;
      lista.appendChild(row);
    });
  };

const sellButtonEvent = (id) => {
  let container = document.getElementById("sellContainer");
  let product = products.getProduct(id);
  container.innerHTML = `
    <div class="col">
        <h5>${product.name}</h5></div>
    </div>
    <div class="col">
        <h6>Existencia: ${product.stored} kg</h6></div>
    </div>
    <div class="col">
        <label for="sellItem">Cantidad a vender (kg)</label>
        <input type="text" class="form-control" id="sellItem">
        <button type="button" class="btn btn-success" id="btnSellItem">Vender</button>
    </div>
    <div class="col">
        <button type="button" class="btn btn-danger" id="cancelSell">Cancelar</button>
    </div>
    `;
  document.getElementById("btnSellItem").addEventListener("click", (e) => {
    const amount = document.getElementById("sellItem").value;
    sellProductAction(product, new Number(amount));
  });

  document.getElementById("cancelSell").addEventListener("click", cancelOp);
};
const purchaseButtonEvent = (id) => {
  let container = document.getElementById("purchaseContainer");
  let product = products.getProduct(id);
  container.innerHTML = `
    <div class="col">
      <h5>${product.name}</h5></div>
    </div>
    <div class="col">
      <h6>Existencia: ${product.stored} kg</h6></div>
    </div>
    <div class="col">
      <label for="sellItem">Cantidad a comprar (kg)</label>
      <input type="text" class="form-control" id="purchaseItem">
      <label for="sellItem">Precio de compra (kg)</label>
      <input type="text" class="form-control" id="purchasePrice">
      <button type="button" class="btn btn-success" id="btnPurchaseItem">Comprar</button>
    </div>
    <div class="col">
      <button type="button" class="btn btn-danger" id="cancelPurchase">Cancelar</button>
    </div>
  `;

  document.getElementById("btnPurchaseItem").addEventListener("click", (e) => {
    const amount = document.getElementById("purchaseItem").value;
    const price = document.getElementById("purchasePrice").value;
    purchaseProductAction(product, new Number(amount), new Number(price));
  });
  document.getElementById("cancelPurchase").addEventListener("click", cancelOp);
};

const sellProductAction = (product, amount) => {
  try {
    const totalSale = amount * product.price;
    products.sale(product.id, amount);
    cash.sale(totalSale);
    sales.new(product.id, amount, product.price);
  } catch (err) {
    alert(err.error);
  }
  buidTable();
  getCash();
  buildSaleTable();
  cancelOp();
};

const purchaseProductAction = (product, amount, price) => {
  try {
    const total = price * amount;
    products.purchase(product.id, amount);
    cash.purchase(total);
    purchase.new(product.id, amount, price);
  } catch (err) {
    alert(err.error);
  }
  buidTable();
  getCash();
  buildPurchaseTable();
  cancelOp();
};
const cancelOp = () => {
  document.getElementById("sellContainer").innerHTML = "";
  document.getElementById("purchaseContainer").innerHTML = "";
};
const newProductEvent = () => {
  const name = document.getElementById("np_name").value;
  const stored = new Number(document.getElementById("np_stored").value);
  const purchasePrice = new Number(document.getElementById("np_p_price").value);
  const salePrice = new Number(document.getElementById("np_s_price").value);

  try {
    cash.purchase(stored * purchasePrice);
    const newProd = products.newProduct(name, stored, salePrice);
    purchase.new(newProd.id, stored, purchasePrice);
  } catch (err) {
    alert(err.error);
  }

  buidTable();
  getCash();
  buildPurchaseTable();
  addProductEventEnd();
};

const submitEvent = (e) => {
  e.preventDefault();

  switch (e.target.id) {
    case "addProduct":
      newProductEvent();
      break;
    default:
      break;
  }
};

const addProductEventStart = () => {
  document.getElementById("addProduct").style.display = "block";
  document.getElementById("addProductBtn").style.display = "none";
};

const addProductEventEnd = () => {
  document.getElementById("addProduct").reset();
  document.getElementById("addProduct").style.display = "none";
  document.getElementById("addProductBtn").style.display = "block";
};

addEventListener("load", getCash);
addEventListener("load", buidTable);
addEventListener("load", buildSaleTable);
addEventListener("load", buildPurchaseTable);
addEventListener("submit", submitEvent);
document
  .getElementById("addProductBtn")
  .addEventListener("click", addProductEventStart);
document
  .getElementById("cancelNewProd")
  .addEventListener("click", addProductEventEnd);