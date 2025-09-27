📖 PageTurner: Alex's Open Library Finder
<img width="1915" height="831" alt="Screenshot 2025-09-27 145338" src="https://github.com/user-attachments/assets/209e46f1-27a7-4dea-b932-098facced3c3" />

  A responsive, high-performance book search application built for college students using React and the Open Library API.

⭐ Project Summary
  This application solves the "Book Finder" challenge. It is specifically tailored for Alex, the College Student, providing    powerful search, immediate feedback, and organization tools to simplify academic research and reading discovery.

Persona Focus: Alex
  Alex needs efficiency. The application is designed to minimize clicks and provide key data points (Year, Editions) upfront   so Alex can quickly evaluate the relevance of a book without navigating to a separate detail page.

🚀 Key Features
Feature

Description

Value for Alex

🔍 Core Search & Fetching

Seamless integration with the Open Library API for fast results by title, author, or keyword.

Finds resources quickly and reliably.

🔄 Client-Side Sorting

Allows results to be sorted by Year (Newest First) and Edition Count (Most Available).

Prioritizes current information or easily accessible books.

🔢 Pagination

Results are displayed 20 items per page with full navigation controls.

Handles large research topics without overwhelming the interface.

📱 Responsive UI/UX

Built with a mobile-first approach using Tailwind CSS.

Works flawlessly whether Alex is researching on a desktop or reading on a phone/tablet.

💡 Robust Error Handling

Clear messages for network failures or zero results found.

Ensures a frustration-free user experience.

🛠️ Technical Deep Dive
Stack
Framework: React (with TypeScript)

Styling: Tailwind CSS (Stable v3)

Data Source: Open Library Search API

State Management: React Hooks (useState, useMemo, useCallback)

Rationale & Problem Solving
Code Integrity: The project utilizes TypeScript and a clean separation of concerns (/api, /utils, /components) for maximum maintainability.

Configuration Fix: The initial build encountered conflicts with a pre-release version of Tailwind CSS. This was resolved by downgrading to the stable v3 (^3.4.1) and verifying the postcss.config.js configuration.

⚙️ Getting Started (Local Setup)
To run this project locally, follow these steps:

Clone the Repository:

git clone [YOUR_REPOSITORY_URL_HERE]
cd book-finder-alex

Install Dependencies:

    npm install

Run the Development Server:

    npm run dev

Access the application at http://localhost:5173

✅ Submission Checklist (Required Links)
This project fulfills all three levels of the challenge. Please replace the placeholders below with your final links.

1. Working Application (Level 2: 30%)
Status: Deployed
Link:

3. Code Sharing (Level 3: 20%)
Status: Repository
Link: https://github.com/AanyaSeth22/book-finder-alex.git

4. Working with AI (Level 1: 50%)
Status: Chat History
Link: 
