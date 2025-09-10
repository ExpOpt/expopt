# Lab Website Template

This project is a web application that displays a list of academic papers, replicating the functionality and design of the paper list page from the algorithms-with-predictions repository. The application retrieves paper data from a JSON file and dynamically generates the content on the webpage.

## Project Structure

```
lab-website-template
├── src
│   ├── index.html          # Main HTML document
│   ├── scripts
│   │   └── main.js        # JavaScript functionality for dynamic content
│   ├── styles
│   │   └── main.css       # CSS styles for visual appearance
│   └── data
│       └── papers.json    # JSON file containing paper data
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd lab-website-template
   ```

2. **Install dependencies:**
   If there are any dependencies listed in `package.json`, run:
   ```
   npm install
   ```

3. **Open the project:**
   Open `src/index.html` in your web browser to view the application.

## Functionality

- The application retrieves paper data from `src/data/papers.json`.
- It dynamically generates a list of papers, displaying titles, authors, abstracts, and links.
- The layout and styles are designed to be consistent with the algorithms-with-predictions repository.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.