const openReply = (id) => {
  const formComment = document.querySelector(
    `.user_comment-form[data-id="${id}"]`
  );
  const formReply = formComment.querySelector(".user_reply");

  if (formReply.style.display === "flex") {
    formReply.style.display = "none";
  } else {
    formReply.style.display = "flex";
  }
};

const changeProductSame = (id) => {
  const spanItems = [
    ...document.querySelectorAll(".slider_product_same-header span"),
  ];
  const imgLinks = [...document.querySelectorAll(".slick-slide img")];
  if (id === 1) {
    spanItems.map((spanItem) => {
      spanItem.classList.remove("same-header-active");
    });
    spanItems[0].classList.add("same-header-active");
    imgLinks.map((imgLink) => {
      imgLink.src =
        "https://anphat.com.vn/media/product/250_19878_ub_uap_ac_lite_front_1000.png";
    });
  }
  if (id === 2) {
    spanItems.map((spanItem) => {
      spanItem.classList.remove("same-header-active");
    });
    spanItems[1].classList.add("same-header-active");
    imgLinks.map((imgLink) => {
      imgLink.src =
        "https://anphat.com.vn/media/product/250_19878_ub_uap_ac_lite_front_1000.png";
    });
  }
  if (id === 3) {
    spanItems.map((spanItem) => {
      spanItem.classList.remove("same-header-active");
    });
    spanItems[2].classList.add("same-header-active");
    imgLinks.map((imgLink) => {
      imgLink.src =
        "https://anphat.com.vn/media/product/250_29119_item_xl_23955636_34857121.jpg";
    });
  }
};
