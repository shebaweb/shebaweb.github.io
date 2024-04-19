// Try to get the data from localStorage
let storedData = localStorage.getItem('jsonData');
if(storedData) {
    // Parse the stored data and display it
    displayData(JSON.parse(storedData), 'sheba_search_list');
    displayData(JSON.parse(storedData), 'preview');
}


// Fetch the JSON data from the server
fetch('https://script.google.com/macros/s/AKfycbyyluO9bOBvI9JNyR_2J0gq-0Gb1JMgBUUVTAEvlXwBkuHJc32VKpPU8haqKTtUgjo/exec')
.then(response => response.json())
.then(data => {
    // Save the data to localStorage
    localStorage.setItem('jsonData', JSON.stringify(data));

    // Call the function to display the data
    displayData(data, 'sheba_search_list');
    displayData(data, 'preview');
}
)
.catch(error => {
    console.error('Error:', error);
}
);

function displayData(data, listId) {
    let ul = document.getElementById(listId);
    // Clear the list before displaying data
    ul.innerHTML = '';
    // Sort the data based on the click counts
    data.sort((a, b) => {
        let countA = localStorage.getItem(`${a.key}
_count`) || 0;
        let countB = localStorage.getItem(`${b.key}
_count`) || 0;
        return countB - countA;
    }
);
    // Iterate over each item in the sorted data
    for(let item of data) {
        // Check if header is not empty
        if(item.header !== "" && item.header !== "fahim") {
            // Create a new list item
            let li = document.createElement('li');
            // Create a new anchor element
            let a = document.createElement('a');
            a.href = `${item.link}
?ref=https://cdn.zuboraaz.workers.dev/${item.key}
`;
            a.title = `${item.link}`;
            a.id = `${item.key}`;
            // Add click event listener to the anchor element
            a.addEventListener('click', function() {
                // Get the current count from local storage
                let count = localStorage.getItem(`${item.key}
_count`);
                // If count is not set yet, initialize it to 0
                if(!count) {
                    count = 0;
                }

                // Increment the count
                count++;
                // Store the updated count back to local storage
                localStorage.setItem(`${item.key}
_count`, count);
                // Update the count display
                document.getElementById(`${item.key}
_hits`).textContent = count;
                // Show the list item if the count is not zero
                if(count !== 0) {
                    li.style.display = '';
                }

            }
);
            // Create an image element
            let div = document.createElement('div');
            div.id = item.key;
            div.style = `
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
            flex-direction: column;
            align-content: stretch;
        ` ;
            // Append all elements to the anchor
            a.appendChild(div);
            // Append the anchor to the list item
            li.appendChild(a);
            // Append the list item to the unordered list
            ul.appendChild(li);

            // If the list is 'sheba_search_list', create and append additional elements
            if(listId === 'sheba_search_list') {
                let h2 = document.createElement('h2');
                h2.textContent = item.header;
                // Create a paragraph for tags
function imgLoaded() {
    // Image loaded successfully
    // Apply the desired style here
    i.style.backgroundImage = "linear-gradient(to top right, rgb(255, 255, 255), rgb(210, 235, 255))";
}

function imgError() {
    // Image failed to load
    // Replace the img element with an icon (i element)
    // Apply any additional styling to the icon here
    const noIcon = document.createElement('i');
    noIcon.className = `sheba_shomuho ${item.key}`; // Replace with the desired icon class
    // Add any additional styling to the icon here
    i.parentNode.replaceChild(noIcon, i);
}

let i = document.createElement('img');
i.className = `sheba_shomuho ${item.key}`;
i.title = item.tag;
i.height = 100; // Set the height in pixels
i.width = 100; // Set the width in pixels

// Check if item.img is provided
if (item.img) {
    i.src = item.img;
    i.onload = imgLoaded;
    i.onerror = imgError;
} else {
    // If no image source provided, apply the onload function
    imgLoaded();
}

// Append the image element to the desired container (e.g., document.body)
document.body.appendChild(i);

                
                
                
                
                
                
                let span = document.createElement('span');
                span.textContent = item.tag;
                span.className = `tags`;

                div.appendChild(h2);
                div.appendChild(i);
                div.appendChild(span);
            }
 else if(listId === 'preview') {
                li.className = `iqra`;
                let h2 = document.createElement('h2');
                h2.textContent = item.header;
                h2.className = `zub`;
                let b = document.createElement('b');
                b.id = `hits`;
                // Get the current count from local storage
                let count = localStorage.getItem(`${item.key}
_count`);
                // If count is not set yet, initialize it to 0
                if(!count) {
                    count = 0;
                }

                // Set the text content of the bold element to the count
                b.textContent = count;
                // Append the bold element to the list item
                a.appendChild(h2);
                h2.appendChild(b);
                // Hide the list item if the count is zero
                if(count === 0) {
                    li.style.display = 'none';
                }

            }

        }

    }

}
