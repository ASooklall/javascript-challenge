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
  d3.select("input").on("submit", handleSubmit);
  













/* * Using the UFO dataset provided in the form of an array of JavaScript objects, 
write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time`
 column to find rows that match user input. */
