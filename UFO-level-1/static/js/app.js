// from data.js
var tableData = data;
// table body d3 select
var tbody = d3.select("tbody");


// filter function
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the new input value from the form
    var inputValue = d3.select("#datetime").property("value");
  
    // clear the table to prepare for new data filter
    tbody.html("")
  
    // filter the data based on the search
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    // append html table with each listing
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};
    
  
// Add event listener for submit button
d3.select("#filter-btn").on("click", handleSubmit);
d3.select("form").on("submit", handleSubmit);
