function fetchQuote() {
    fetch('https://api.example.com/quotes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("quote").innerText = `"${data.content}" - ${data.author}`;
        })
        .catch(error => console.error("Error fetching quote:", error));
}
