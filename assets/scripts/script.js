let searchFormEl = document.querySelector("#searchForm");

let formSubmitHandler = function(event) {
    event.preventDefault();

    let searchInput = document.querySelector("#searchbar").value.trim();
    let formatInput = document.querySelector("#formats").value.trim();

    if (!searchInput) {
        console.error("Please enter a keyword");
        return;
    } 
       
     // getSearchedData(searchInput);
     document.location = "./searchpage.html"; 
    //  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
    // location.assign(queryString);
};

// let getSearchedData = function(keyword) {
//     let congressUrl = "https://www.loc.gov/search/?q=" + keyword + "&fo-json";
    
//     fetch(congressUrl)
//         .then(function(response) {
//             if (response.ok) {
//                 response.json(). then(function(data){
//                     console.log(data);
//                 })
//             }
//         })
// }


searchFormEl.addEventListener("submit",formSubmitHandler);