const url1 =
  "https://crudcrud.com/api/https://crudcrud.com/api/151b52dc28484527b4f772e5066396e5/items";

let updateToId = null;
async function addItem(event) {
  event.preventDefault();

  let candy = event.target.name.value;
  let description = event.target.description.value;
  let price = event.target.price.value;
  let quantity = event.target.quantity.value;

  let item = {
    candy,
    description,
    price,
    quantity,
  };
  if (updateToId === null) {
    try {
      await axios.post(url1, item);
      showItemOnHomepage(item);
    } catch {
      console.log("Error");
    }
  } else {
    let url2 = url1 + "/" + updateToId;
    try {
      await axios.put(url2, item);
      showItemOnHomepage(item);
    } catch {
      console.log("Error");
    }
  }
}

function showItemOnHomepage(item) {
  let parentEle = document.getElementById("itemList");
  let childEle = document.createElement("li");

  childEle.innerText = `${item.candy} | ${item.description} | ${item.price} | ${item.quantity}`;

  let buy1 = document.createElement("button");
  buy1.innerText = "Buy 1";

  let buy2 = document.createElement("button");
  buy2.innerText = "Buy 2";

  let buy3 = document.createElement("button");
  buy3.innerText = "Buy 3";

  buy1.onclick = async () => {
    let updatedQty = item.quantity - 1;

    let itemID = item._id;
    let updatedUrl = url1 + "/" + itemID;
    item = {
      candy: item.candy,
      description: item.description,
      price: item.price,
      quantity: updatedQty,
    };
    try {
      await axios.put(updatedUrl, item);
      showItemOnHomepage(item);
      location.reload();
    } catch {
      console.log("Error");
    }
  };

  buy2.onclick = async () => {
    let updatedQty = item.quantity - 2;

    let itemID = item._id;
    let updatedUrl = url1 + "/" + itemID;
    item = {
      candy: item.candy,
      description: item.description,
      price: item.price,
      quantity: updatedQty,
    };
    try {
      await axios.put(updatedUrl, item);
      showItemOnHomepage(item);
      location.reload();
    } catch {
      console.log("Error");
    }
  };

  buy3.onclick = async () => {
    let updatedQty = item.quantity - 3;

    let itemID = item._id;
    let updatedUrl = url1 + "/" + itemID;
    item = {
      candy: item.candy,
      description: item.description,
      price: item.price,
      quantity: updatedQty,
    };
    try {
      await axios.put(updatedUrl, item);
      showItemOnHomepage(item);
      location.reload();
    } catch {
      console.log("Error");
    }
  };

  async function reloadWeb() {
    try {
      let response = await axios.get(url1);
      let arr = response.data;

      arr.forEach(async (ele) => {
        await showItemOnHomepage(ele);
      });
    } catch {
      console.log(err);
    }
  }
  window.addEventListener("DOMContentLoaded", reloadWeb);
}
