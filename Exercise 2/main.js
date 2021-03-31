// 1: 
$("#topcontent .flexslider").flexslider({
  slideshow: false,
});

// 2:

$("[data-testid=rotating_banner_tile_1]").click(function() {
	$(".banner-content-wrapper").css("background-color", "purple");
	$("[data-testid=category_module] .half-image-module").css("background-color", "purple");
});

$("[data-testid=rotating_banner_tile_2]").click(function() {
	$(".banner-content-wrapper").css("background-color", "green");
	$("[data-testid=category_module] .half-image-module").css("background-color", "green");
});

// 3: 

var firstImage = $("#topcontent > div.top-offset-20 > div:nth-child(29) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(1) > a > div.half-inner-module-image.text-centered > img").attr("src");

$("#topcontent > div.top-offset-20 > div:nth-child(15) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(1) > a > div.half-inner-module-image.text-centered > img").attr("src", firstImage)


var secondImage = $("#topcontent > div.top-offset-20 > div:nth-child(29) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(2) > a > div.half-inner-module-image.text-centered > img").attr("src");

$("#topcontent > div.top-offset-20 > div:nth-child(15) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(2) > a > div.half-inner-module-image.text-centered > img").attr("src", secondImage)

var thirdImage = $("#topcontent > div.top-offset-20 > div:nth-child(29) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(1) > a > div.half-inner-module-image.text-centered > img").attr("src");

$("#topcontent > div.top-offset-20 > div:nth-child(29) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(3) > a > div.half-inner-module-image.text-centered > img").attr("src", thirdImage)

var fourthImage = $("#topcontent > div.top-offset-20 > div:nth-child(29) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(4) > a > div.half-inner-module-image.text-centered > img").attr("src");

$("#topcontent > div.top-offset-20 > div:nth-child(15) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(4) > a > div.half-inner-module-image.text-centered > img").attr("src", fourthImage)

// 4: 

var firstValueToSum = $("#topcontent > div.top-offset-20 > div:nth-child(27) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(1) > div").text();

firstValueToSum = firstValueToSum.replace(/[^\d.-]/g, "");

var secondValueToSum = $("#topcontent > div.top-offset-20 > div:nth-child(27) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(2) > div").text();

secondValueToSum = secondValueToSum.replace(/[^\d.-]/g, "");

var thirdValueToSum = $("#topcontent > div.top-offset-20 > div:nth-child(27) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(3) > div").text();

thirdValueToSum = thirdValueToSum.replace(/[^\d.-]/g, "");

var fourthValueToSum = $("#topcontent > div.top-offset-20 > div:nth-child(27) > div > div.col-xs-12.col-sm-6.half-modules-outer-container > div:nth-child(4) > div").text();

fourthValueToSum = fourthValueToSum.replace(/[^\d.-]/g, "");

sum = Number(firstValueToSum) + Number(secondValueToSum) + Number(thirdValueToSum) + Number(fourthValueToSum);

(function () {
  alert("The sum of all \"Power, Batteries & Adapters\" products is: " + "$" + sum.toFixed(2))
})();