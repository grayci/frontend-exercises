var cardsSection = document.getElementById("cat-cards");

var categoriesListSection = document.createElement("DIV");
categoriesListSection.classList.add("row");

cardsSection.prepend(categoriesListSection);

categoriesNameList = document.querySelectorAll(".anavmfe__accordion__item__name");

var categoriesNameListItems = [];
var categoriesLinksListItems = [
	"ready-to-ship?appliedRefinements=27241,27242,27243",
	"dell?appliedRefinements=31461,31462",
	"17-inch?appliedRefinements=15677,15676,16854,15674,15672",
	"all-intel-processors?appliedRefinements=27540,6077,23188,14158,23187,6084,6083,6123,6079,6081,10352",
	"11th-gen-intel-core?appliedRefinements=23775,18402,18401,29124,29123",
	"2-to-5-star-rated?appliedRefinements=22364,22362,22363,22365",
	"1501-2000?appliedRefinements=27545,27544,27546,27547,6117",
	"32-gb-or-more?appliedRefinements=6096,6094,6093,6092,6089",
	"2-tb-or-more?appliedRefinements=27552,27553,27554,27555,27556",
	"dual-drive?appliedRefinements=23087,23085,23086",
	"windows-10-home?appliedRefinements=27562,10690",
	"all-intel-graphics?appliedRefinements=27568,21938,27569,28789,28790,27572,27573,27574,27575,27581,27582,27583,27584,27585,22601",
	"fingerprint-reader?appliedRefinements=31304,24106,24107,24108,24109",
	"uhd?appliedRefinements=27564,16261,27565,16260,16257",
	"vr-ready?appliedRefinements=9903,9905",
	"multitasking?appliedRefinements=11307,11212,11215,11213,11310,11308",
	"12-months-financing?appliedRefinements=11949,11950",
	"black?appliedRefinements=5976,5975,27228,5973,27232"
];

var preLinksText = "/en-us/shop/dell-laptops/sr/laptops/";

var i;
for (i = 0; i < categoriesNameList.length; i++) {
  categoriesNameListItems.push(categoriesNameList[i].innerText)

  var categoriesLinks = document.createElement("A");
  categoriesLinks.innerText = categoriesNameListItems[i];
  categoriesLinks.href = preLinksText + categoriesLinksListItems[i];
  categoriesLinks.style.paddingRight = "10px";

  categoriesListSection.append(categoriesLinks);
}