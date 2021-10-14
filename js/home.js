const changeCategory = (name) => {
  const linkImgs = [
    ...document.querySelectorAll(
      ".cart_category .cart_category-product-item-img"
    ),
  ];
  if (name === 1) {
    linkImgs.map((linkImg) => {
      linkImg.src =
        "https://bizweb.dktcdn.net/thumb/large/100/371/004/products/btcalm1024x10242x.jpg?v=1573305666657";
    });
  }
  if (name === 2) {
    linkImgs.map((linkImg) => {
      linkImg.src =
        "https://bizweb.dktcdn.net/thumb/large/100/371/004/products/btcalm1024x10242x.jpg?v=1573305666657";
    });
  }
  if (name === 3) {
    linkImgs.map((linkImg) => {
      linkImg.src =
        "https://bizweb.dktcdn.net/thumb/large/100/371/004/products/donghomvmtblacklinkmaster.jpg?v=1573305657020";
    });
  }
  if (name === 4) {
    linkImgs.map((linkImg) => {
      linkImg.src =
        "https://bizweb.dktcdn.net/thumb/large/100/371/004/products/btrefined1024x10242x.jpg?v=1573305663893";
    });
  }
  if (name === 5) {
    linkImgs.map((linkImg) => {
      linkImg.src =
        "https://bizweb.dktcdn.net/thumb/large/100/371/004/products/donghomvmtblacklinkmaster.jpg?v=1573305657020";
    });
  }
};
