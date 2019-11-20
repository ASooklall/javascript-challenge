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
    var inputCity = d3.select("#cities").property("value");
    var inputState = d3.select("#states").property("value");
    var inputCountry = d3.select("#countries").property("value");
    var inputShape = d3.select("#shapes").property("value");
  
    // clear the table to prepare for new data filter
    tbody.html("")

    // Begin filters 
    // filters by each input which may or may not have values

    // filter check based on date
    if (inputValue){
      var filteredDate = tableData.filter(data => data.datetime === inputValue)
    }
    else {
      var filteredDate = tableData.filter(data => data.datetime)
    };
    // then filter check for city
    if (inputCity){
      var filteredCity = filteredDate.filter(data => data.city === inputCity)
    }
    else {
      var filteredCity = filteredDate .filter(data => data.datetime)
    };
    // then filter check for state
    if (inputState){
      var filteredState = filteredCity.filter(data => data.state === inputState)
    }
    else {
      var filteredState = filteredCity.filter(data => data.state)

    };
    // then filter check for country
    if (inputCountry){
        var filteredCountry = filteredState.filter(data => data.country === inputCountry)
    }
    else {
      var filteredCountry = filteredState.filter(data => data.country)
    };
    // then filter check for shape
    if (inputShape){
        var filteredShape = filteredCountry.filter(data => data.shape === inputShape)
    }
    else {
      var filteredShape = filteredCountry.filter(data => data.shape)
    };


    // append html to table after search filters
    filteredShape.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        })
      });
      


  // clear search input
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