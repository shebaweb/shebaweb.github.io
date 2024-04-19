function sheba_search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("sheba_search_input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("sheba_search_list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
    }
     else {
    li[i].style.display = "none";
    }
    
    }
    
    }
    
        function search() {
        // Get the element with ID "search"
        const searchElement = document.getElementById("search");// Scroll to the element's position
        window.scrollTo({
        top: searchElement.offsetTop,// Use 'offsetTop' to get the element's top position
        behavior: 'smooth'
        }
    );
        }
    