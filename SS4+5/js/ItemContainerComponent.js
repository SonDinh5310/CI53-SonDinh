const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
<style>
    #item-container {
        width: 300px;
        margin: 0;
        padding: 0;
        line-height: 25px;
    }
    #price {
        font-weight: bold;
    }
    #description {
        font-size: 15px;
    }
    #address {
        font-size: 20px;
    }
    #image {
        width: 300px;
    }
</style>
    <div id="item-container">
        <img id="image" src="https://memegenerator.net/img/instances/83420474.jpg">
        <div id="price">10 &#8363</div>
        <div id="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio possimus
        dicta tempore, dolorem rerum nam ad. Reprehenderit maxime pariatur
        voluptatibus nostrum in laboriosam iste quasi numquam, distinctio voluptatem
        sit quis?</div>
        <div id="address">Ha Noi</div>
    </div>
`;

export default class ItemContainer extends HTMLElement {
  constructor(image, price, description, address) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.setAttribute("image", image);
    this.setAttribute("price", price);
    this.setAttribute("description", description);
    this.setAttribute("address", address);
  }

  //!Dinh nghia nhung thuoc tinh co anh huong den noi dung
  static get observedAttributes() {
    return ["image", "price", "description", "address"];
  }

  //Duoc chay khi thuoc tinh thay doi
  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log(attrName + " = " + newValue);
    switch (attrName) {
      case "image":
        this.shadowRoot.getElementById("image").src = newValue;
        break;
      case "price":
        this.shadowRoot.getElementById("price").innerHTML = newValue;
        break;
      case "description":
        this.shadowRoot.getElementById("description").innerHTML = newValue;
        break;
      case "address":
        this.shadowRoot.getElementById("address").innerHTML = newValue;
        break;
    }
  }
}

window.customElements.define("item-container", ItemContainer);
