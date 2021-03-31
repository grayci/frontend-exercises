var iconsContainer = document.querySelector("#divResourceLinks > .container");

var iconsRow = iconsContainer.children[0];
iconsRow.classList.add("justify-content-lg-center");

var firstContentColumn = document.createElement("DIV");
firstContentColumn.classList.add("col-lg-6");

var secondContentColumn = document.createElement("DIV");
secondContentColumn.classList.add("col-lg-6");

iconsRow.appendChild(firstContentColumn);
iconsRow.appendChild(secondContentColumn);

var firstIconsRowColumn = document.createElement("DIV");
firstIconsRowColumn.classList.add("row");

var secondIconsRowColumn = document.createElement("DIV");
secondIconsRowColumn.classList.add("row");

firstContentColumn.appendChild(firstIconsRowColumn);
firstContentColumn.appendChild(secondIconsRowColumn);

var iconsRowChildren = iconsRow.children;

var firstIconContent = iconsRowChildren[0].cloneNode(true);
var secondIconContent = iconsRowChildren[1].cloneNode(true);
var thirdIconContent = iconsRowChildren[2].cloneNode(true);
var fourthIconContent = iconsRowChildren[3].cloneNode(true);

firstIconsRowColumn.appendChild(firstIconContent);
firstIconsRowColumn.appendChild(secondIconContent);

secondIconsRowColumn.appendChild(thirdIconContent);
secondIconsRowColumn.appendChild(fourthIconContent);

var firstIconsRowColumnChildren = firstIconsRowColumn.children;
var i;
for (i = 0; i < firstIconsRowColumnChildren.length; i++) {
  firstIconsRowColumnChildren[i].classList.remove("col-lg-3");
  firstIconsRowColumnChildren[i].classList.add("col-lg-6");
  firstIconsRowColumnChildren[i].classList.add("pb-6");
}

var secondIconsRowColumnChildren = secondIconsRowColumn.children;
var x;
for (x = 0; x < secondIconsRowColumnChildren.length; x++) {
  secondIconsRowColumnChildren[x].classList.remove("col-lg-3");
  secondIconsRowColumnChildren[x].classList.add("col-lg-6");
}

var y;
for (y = 0; y < 4; y++) {
  iconsRowChildren[y].style.display = "none";
}

var EMCSectionContainer = document.querySelector("#divEnterpriseProductLinks > .container");

var EMCSectionContainerRow = EMCSectionContainer.children; 

var EMCBoxes = EMCSectionContainerRow[1].cloneNode(true);

secondContentColumn.appendChild(EMCBoxes)

var EMCBoxItems = EMCBoxes.children;
var z;
for (z = 0; z < EMCBoxItems.length; z++) {
  EMCBoxItems[z].classList.remove("col-md-6");
  EMCBoxItems[z].classList.add("col-md-12");
}

var EMCSection = document.getElementById("divEnterpriseProductLinks");
EMCSection.remove();