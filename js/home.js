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
        "https://evo-market.mysapo.net/tissot-t109-210-33-031-00-nu-kinh-sapphire-quartz-pin-day-kim-loai";
    });
  }
  if (name === 3) {
    linkImgs.map((linkImg) => {
      linkImg.src =
        "https://bizweb.dktcdn.net/thumb/large/100/371/004/products/donghomvmtblacklinkmaster.jpg?v=1573305657020";
    });
  }
};
