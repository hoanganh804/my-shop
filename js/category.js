setTimeout(function () {
  $(".global-banner-fixed").addClass("on-screen");
}, 2000);

function chekcHeightFilter() {
  var h = $("#js-filter-height").height();

  if (h > 145) {
    $("#js-filter-height").css("height", "145px");
    $(".product-filter-container").css("padding-bottom", "50px");
    $("#js-show-filter").show();
  } else {
    $(".product-filter-container").css("padding-bottom", "0");
  }

  $("#js-show-filter").click(function () {
    $("#js-filter-height").addClass("active");
    $("#js-hide-filter").show();
    $(this).hide();
  });

  $("#js-hide-filter").click(function () {
    $("#js-filter-height").removeClass("active");
    $("#js-show-filter").show();
    $(this).hide();
  });
}

function checkFilterUrl() {
  var filter_url = "https://www.anphatpc.com.vn/may-tinh-xach-tay-laptop.html";
  var min = "";
  var max = "";

  if (GetURLParameterNew("min", filter_url))
    var min = GetURLParameterNew("min", filter_url);
  if (GetURLParameterNew("max", filter_url))
    var max = GetURLParameterNew("max", filter_url);

  if (min != "" || max != "") {
    $("#js-submit-filter").css("display", "inline-block");

    $("#js-min-range").val(formatCurrency(min));
    $("#js-max-range").val(formatCurrency(max));
  }
}

function GetURLParameterNew(sParam, filter_url) {
  var filter_url_decode = decodeURIComponent(filter_url);
  var sPageURL = filter_url_decode;
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

function changeFilterUrl(target) {
  $(target).on("click", function () {
    var url_min = "";
    var url_max = "";
    var min = Hura.Util.strToNumber($("#js-min-range").val());
    var max = Hura.Util.strToNumber($("#js-max-range").val());

    var cat_url = "https://www.anphatpc.com.vn/may-tinh-xach-tay-laptop.html";

    if (min > 500) var url_min = "&min=" + min;
    if (max > 500) var url_max = "&max=" + max;

    if (min > 500 || max > 500) {
      location.href = cat_url + url_min + url_max;
    } else {
      $("#js-filter-note").html("Lỗi: Giá thấp nhất hoặc Giá cao nhất > 500đ");
      $("#js-filter-note").show();
    }
  });
}

function showButtonPrice(target) {
  $(target).on("keyup", function () {
    $(".js-price-range").each(function () {
      var min = $("#js-min-range").val();
      var max = $("#js-max-range").val();

      if (max != "" || min != "") {
        $("#js-submit-filter").css("display", "inline-block");
      } else {
        $("#js-submit-filter").css("display", "none");
        $("#js-filter-note").hide();
      }
    });
  });
}

function show_more(height) {
  console.log("show more");
  var content_height = $(".js-content").height();

  if (content_height > height) {
    $(".js-content").css("max-height", height);

    $(".js-showmore").addClass("d-inline-block");
    $(".js-showless").hide();
  }

  // click event
  $(".js-showmore").click(function () {
    $(".js-content").css("max-height", "unset");
    $(".js-showmore").removeClass("d-inline-block");
    $(".js-showless").addClass("d-inline-block");
  });

  $(".js-showless").click(function () {
    $(".js-content").css("max-height", height);
    $(".js-showmore").addClass("d-inline-block");
    $(".js-showless").removeClass("d-inline-block");
    $("html, body").animate(
      { scrollTop: $(".js-content").offset().top - 140 },
      800
    );
  });
}

function show_filter() {
  console.log("show filter");
  $(".filter-list").each(function () {
    var filter_height = $(this).height();

    if (filter_height > 48) {
      $(this).css("height", "42px");
      $(this).parents(".js-filter-row").find(".toggle-filter").show();
    } else {
      $(this).parents(".js-filter-row").find(".toggle-filter").hide();
    }
  });

  $(".js-toggle-filter").click(function () {
    $(this)
      .parents(".js-filter-row")
      .find(".filter-list")
      .toggleClass("show-filter");
    $(this).toggleClass("active");
  });
}

function start() {
  // click xem thêm

  setTimeout(startAgain, 500);
  function startAgain() {
    show_more(166);

    // Show filter
    show_filter();

    showButtonPrice(".js-price-range");

    changeFilterUrl("#js-submit-filter");

    checkFilterUrl();

    chekcHeightFilter();
    // End filter

    $("#js-banner-category").owlCarousel({
      items: 2,
      loop: true,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 3000,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      lazyLoad: true,
      dots: false,
    });

    $("#js-tab-sub-list a").click(function () {
      var id = $(this).attr("data-id");

      $("#js-tab-sub-list a").removeClass("current");
      $(this).addClass("current");

      $(".list-sub-2").hide();
      $("#js-cat-" + id).show();
    });
  }

  countTime();
}

const loadMore = () => {
  const numberProduct = 10;
  const listProduct = document.querySelector(".list-product .row");
  let newProducts = "";
  const newProduct = `
                  <div class="col-6 col-lg-3 col-sm-6 col-lg-2-5 col-md-4  list-product-item">
                          <a href="product_detail.html"><img src="./assets/img/product_watch.jpeg" alt="" class="list-product-item-img"> </a>
                          <a href="cart.html">
                            <div class="add-to-cart">Thêm vào giỏ</div>
                          </a>
                          <div class="ti-heart icon-like"></div>
                          <div class="list-product-item-name">
                            <a href="product_detail.html"> Doxa D8927134892 _ nam _ kinhs shphia _ quais _ day kinh jhoiuid</a>
                            -hell owweiruweoir
                          </div>
                          <div class="list-product-item-price">
                            <div class="list-product-item-price-now">
                              219,093<u>đ</u>
                            </div>
                          </div>
                  </div>`;

  for (let i = 0; i < numberProduct; i++) {
    newProducts += newProduct;
  }

  listProduct.insertAdjacentHTML("beforeend", newProducts);
};

const countTime = () => {
  let hours = 2;
  let minutes = 1;
  let seconds = 10;

  var x = setInterval(function () {
    seconds -= 1;
    if (seconds < 0) {
      seconds = 60;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes = 59;
      seconds = 60;
      hours -= 1;
    }

    let newHour = `0${hours}`.slice(-2);
    let newMinutes = `0${minutes}`.slice(-2);
    let newSeconds = `0${seconds}`.slice(-2);
    // Output the result in an element with id="demo"
    document.getElementById("countTime").innerHTML =
      newHour + "h " + newMinutes + "m " + newSeconds + "s ";

    // If the count down is over, write some text
  }, 1000);
};

start();
