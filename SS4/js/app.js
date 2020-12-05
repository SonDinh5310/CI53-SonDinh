import SideMenu from "./sideMenuComponent.js";
import ItemContainer from "./ItemContainerComponent.js";
import ItemList from "./ItemListComponent.js";
import data from "./fakeData.js";

let $root = document.getElementById("root");

// console.log(data);
// console.log("O day la du lieu " + data);
// console.log("O day la du lieu " + JSON.stringify(data));

$root.innerHTML = `<item-list data="${JSON.stringify(data)}"></item-list>`;

let $itemList = new ItemList(data);
// $itemList.setAttribute("data", JSON.stringify(data));
$root.appendChild($itemList);

//* Chuyen tu array --> string: JSON.stringify(object[array]);
//* string (json) --> object, array: JSON.parse(string);
