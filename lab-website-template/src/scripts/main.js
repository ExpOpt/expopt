// This file contains the JavaScript functionality for the project. It retrieves the paper data from papers.json, processes it, and dynamically generates the content to display on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/papers.json')
        .then(response => response.json())
        .then(data => {
            const paperList = document.getElementById('paper-list');
            data.papers.forEach(paper => {
                const paperItem = document.createElement('div');
                paperItem.classList.add('paper-item');

                const title = document.createElement('h2');
                title.textContent = paper.title;
                paperItem.appendChild(title);

                const authors = document.createElement('p');
                authors.textContent = `Authors: ${paper.authors.join(', ')}`;
                paperItem.appendChild(authors);

                const abstract = document.createElement('p');
                abstract.textContent = paper.abstract;
                paperItem.appendChild(abstract);

                const link = document.createElement('a');
                link.href = paper.link;
                link.textContent = 'Read more';
                paperItem.appendChild(link);

                paperList.appendChild(paperItem);
            });
        })
        .catch(error => console.error('Error fetching paper data:', error));
});