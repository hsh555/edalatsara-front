(function () {
  // // price-slider
  var priceSlider = document.getElementById("price-slider");

  if (priceSlider) {
    noUiSlider.create(priceSlider, {
      range: {
        min: 0,
        max: 550000,
      },
      direction: 'rtl',
      step: 1000,
      connect: true,
      ariaFormat: wNumb({
        decimals: 0,
      }),
      format: wNumb({
        decimals: 0,
        from: 0,
        to: 550000,
      }),
      start: [10000, 500000],
      mode: "range",
      pips: {
        mode: "range",
        density: 900,
        format: {
          to: function (value) {
            return 'از: ' + value + ' تومان';
          },
          from: function (value) {
            return 'از: ' + value + ' تومان';
          },
        },
      },
    });

    var priceSliderMinValue = document.getElementById(
      "price-slider-min-value"
    );

    priceSlider.noUiSlider.on("update", function (values) {
      priceSliderMinValue.innerHTML = 'از: ' + "<span class= 'text-danger'>" + values[0] + "</span>" + ' تومان';
    });

    var priceSliderMaxValue = document.getElementById(
      "price-slider-max-value"
    );

    priceSlider.noUiSlider.on("update", function (values) {
      priceSliderMaxValue.innerHTML = 'از: ' + "<span class= 'text-warning'>" + values[1] + "</span>" + ' تومان';
    });
  }

  // quality-slider
  var qualitySlider = document.getElementById("quality-slider");

  if (qualitySlider) {
    noUiSlider.create(qualitySlider, {
      start: 1,
      range: {
        min: 1,
        max: 10
      },
      connect: [true, false],
      step: 1,
      pips: {
        mode: 'range',
        values: [1, 10],
        density: 1
      }
    });
  }

  // packaging-quality-slider
  var packagingQualitySlider = document.getElementById("packaging-quality-slider");

  if (packagingQualitySlider) {
    noUiSlider.create(packagingQualitySlider, {
      start: 1,
      range: {
        min: 1,
        max: 10
      },
      connect: [true, false],
      step: 1,
      pips: {
        mode: 'range',
        values: [1, 10],
        density: 1
      }
    });
  }

  // purchase-value-based-on-price-slider
  var purchaseValueBasedOnPricSlider = document.getElementById("purchase-value-based-on-price-slider");

  if (purchaseValueBasedOnPricSlider) {
    noUiSlider.create(purchaseValueBasedOnPricSlider, {
      start: 1,
      range: {
        min: 1,
        max: 10
      },
      connect: [true, false],
      step: 1,
      pips: {
        mode: 'range',
        values: [1, 10],
        density: 1
      }
    });
  }
})();
