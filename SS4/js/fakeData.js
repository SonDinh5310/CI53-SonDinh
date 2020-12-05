const data = [
  {
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
    price: 65,
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    address: "16 Pankratz Pass",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 27,
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    address: "74 Dakota Pass",
  },
  {
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
    price: 25,
    description:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    address: "64 Mccormick Plaza",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 98,
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    address: "0643 Packers Avenue",
  },
  {
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
    price: 21,
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    address: "4626 Del Sol Center",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 48,
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    address: "1 Vermont Alley",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 43,
    description:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    address: "9273 Dawn Terrace",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 58,
    description: "Nullam porttitor lacus at turpis.",
    address: "977 Northview Alley",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 51,
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    address: "3 Magdeline Crossing",
  },
  {
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
    price: 21,
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    address: "41009 Comanche Crossing",
  },
  {
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
    price: 97,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    address: "78878 Buena Vista Pass",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 43,
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    address: "4 Transport Drive",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 84,
    description:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    address: "9 Gulseth Terrace",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 95,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    address: "458 Spenser Parkway",
  },
  {
    image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
    price: 98,
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    address: "2905 Ludington Court",
  },
  {
    image: "http://dummyimage.com/300x300.png/cc0000/ffffff",
    price: 26,
    description:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    address: "814 Village Park",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 39,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    address: "3352 Pepper Wood Pass",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 23,
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    address: "266 Cordelia Park",
  },
  {
    image: "http://dummyimage.com/300x300.png/ff4444/ffffff",
    price: 56,
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    address: "371 Ruskin Plaza",
  },
  {
    image: "http://dummyimage.com/300x300.png/dddddd/000000",
    price: 46,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    address: "3361 Pierstorff Center",
  },
];

export default data;
