function createElement(data) {
    let para = document.createElement('p');
    para.textContent = data;
    document.body.appendChild(para);
}

function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            const response = JSON.parse(this.responseText);
            const pages = response.query.pages;
            const pageId = Object.keys(pages)[0];
            const extract = pages[pageId].extract;
            callback(extract);
        }
    }
    request.send();
}

queryWikipedia(createElement);