# BookUsNow

The Event Showcase Website is a platform designed to display upcoming and recommended events in a visually appealing manner. Leveraging REST APIs, the website fetches event data and presents it in an organized format. Key features include horizontal scrolling for recommended events, lazy loading for upcoming events, responsive design for both desktop and mobile browsers, and adherence to specified font and color schemes.

<img src="coverImg.png" alt="BookUsNowWebsite">

## Setup and Local Run Instructions

To set up and run the project locally, follow these steps:

1. Clone the Repository
   Clone the repository to your local machine using Git. Open your terminal or command prompt and execute the following command:

   ```
   git clone https://github.com/DurgaPrasad-R/GyanGrove.git
   ```

2. Install Dependencies
   Before running the project, you need to install its dependencies. Use npm to install dependencies.

   ```
   npm install
   ```

3. Start the Development Server
   Once the dependencies are installed, you can start the development server. This will compile the project and launch it in your default web browser. Run one of the following commands:

   ```
   npm start
   ```

4. Access the Website Locally
   After starting the development server, you can access the website locally by opening a web browser and navigating to the following URL:

   ```
   http://localhost:3000
   ```

The website should now be running locally on your machine, allowing you to explore its features and functionalities.

## Folder Structure

```
- node_modules
- public
- src
  - assets
  - components
    App.js
    ...
- package-lock.json
- package.json
- README.md
```

## Components

Each component is structured to be a folder which consists of an index.jsx file and a index.css file. Each of these components enhances functionality and modularity. This project makes use of the following components:

1. <b>Header</b> - It consists of a logo, a search bar and a signIn button.
2. <b>SubHeader</b> - It consists of the navigation links and the location marker.
3. <b>Banner</b> - It renders the banner image and the demo text is displayed over the banner image
4. <b>Recommended</b> - It renders recommended events in a horizontal carousel.
5. <b>Upcoming</b> - It renders a list of upcoming events vertically
6. <b>Spinner</b> - A spinner(loader) is used to mention that upcoming events are being retrieved page by page.

## Design and Technical Decisions

### Responsive Design

The Website works well both for the Desktop and Mobile versions. Media Queries and flexible layouts are utilized to achieve responsiveness.

### API Integration

Event data is fetched from the provided REST APIs. The `fetch` API is used to make HTTP requests and retrieve the event information. The data is effectively parsed and displayed on the website.

### Horizontal Scrolling

Recommended events are displayed in a horizontal scrolling container, allowing users to browse through a curated selection effortlessly. CSS flexbox is used to implement the horizontal scrolling functionality.

### Font and Color

The Inter font is used throughout the website to maintain consistency and readability. Specified color schemes (#1E2022 for headings, #989090 for subtitles, #ffffff for background, #CF2D2D for logo, #B0BABF for stroke/border) are applied to ensure a cohesive design.

### Live Site and Repository

Live Site: https://gyan-grove-frontend.netlify.app/
Repository Link: https://github.com/DurgaPrasad-R/GyanGrove
