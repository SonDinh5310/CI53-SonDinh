// Bai 1:
//*Khai niem:
// Web Components la bo cac ky thuat cho phep tao ra cac Custom element (tag) co kha nang tai su dung
// ma logic va chuc nang cua no duoc dong goi ben trong component.

//*customElement, shadow dom, HTML Template
/*
* Custom element:
- La tap hop cac JS APIs cho phep dinh nghia cac custom element va hnh vi cua chung, sau do su dung trong
giao dien nguoi dung.
* Shadow DOM
- 1 bo JS APIs cho phep dong goi 1 cay DOM vao trong 1 element va kiem soat cac chuc nang lien quan cua 
element.
* HTML templates: 
- Bao  gom 2 element <template> & <slot> cho phep viet cac mau HTML ma khong hien thi trong view, nhung mau
nay co the su dung nhieu lan

*VD:
class MyTodos extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define("my-todos",MyTodos);
*/
