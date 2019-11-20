////////////////////////////////////////////////////////////////////////////////////
/////////////////////// Assignment 14 - Javascript Challenge ///////////////////////
///////////////////////////////// UFO - Level - 2 //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


///////////////////////////
///// Global Variables ////
///////////////////////////

var tableData = data;
var tbody = d3.select("tbody");

///////////////////////////
///// Filter Function /////
///////////////////////////

function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the new input values from the form
    var inputValue = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
  
    // clear the table to prepare for new data filter
    tbody.html("")

    // if there is a value being searched:
if (inputValue){
    // filter the data based on the search
    var filteredData = tableData.filter(data => data.datetime === inputValue)
    // var filterCity = filteredData.filter(data => data.city === inputCity)

    console.log(filteredData)
    // console.log(filterCity)

    // append html table with each listing
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}

    // if there isn't a value being searched:
else {
  var filteredData = tableData.filter(data => data.datetime)
  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

d3.select(".form-control").html("");
};
    
///////////////////////////
///// Event Listeners /////
///////////////////////////

d3.select("#filter-btn").on("click", handleSubmit);
d3.select("form").on("submit", handleSubmit);


////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// End Script ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////