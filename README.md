# React Job Listing Website

This project is a job listing website built using React, Vite, and Tailwind CSS. It fetches data from a local JSON file and provides CRUD (Create, Read, Update, Delete) functionality for job listings.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **JSON**: Local data storage format used for job listings.

## Features

- **List Jobs**: View a list of jobs fetched from a local JSON file.
- **Add Jobs**: Add new job listings.
- **Update Jobs**: Edit existing job listings.
- **Delete Jobs**: Remove job listings.

## Setup

1. **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2. **Install dependencies:**

    Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:

    ```bash
    npm install
    ```

3. **Create and configure the JSON file:**


    ```json
    [
      {
        "id": 1,
        "title": "Software Engineer",
        "company": "Tech Corp",
        "location": "New York",
        "description": "Develop and maintain software applications."
      },
      {
        "id": 2,
        "title": "Product Manager",
        "company": "Innovate Inc",
        "location": "San Francisco",
        "description": "Lead product development and strategy."
      }
    ]
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the Vite development server and open your application in the default browser.

   5. **Production Build :**
      - npm run build 
      - ![Screenshot 2024-08-21 121854](https://github.com/user-attachments/assets/45e08aad-741c-4559-9f8d-5b2b7034cad4)


## Usage

- **View Jobs**: Once the server is running, you can view the job listings on the main page of the application.
- **Add Job**: Use the form provided in the application to add a new job.
- **Edit Job**: Click on a job listing to edit its details.
- **Delete Job**: Remove a job by using the delete option provided for each listing.

## CRUD Operations

1. **Create (Add Jobs):**

    - Navigate to the “Add Job” form.
    - Fill out the form with job details and submit.
    - The new job will be added to the JSON data and displayed on the website.

2. **Read (View Jobs):**

    - Job listings are fetched from `jobs.json` and displayed on the main page.
    
3. **Update (Edit Jobs):**

    - Click on a job listing to open the edit form.
    - Update the job details as needed and save the changes.
    - The edited job will be updated in the JSON data and reflected on the website.

4. **Delete (Remove Jobs):**

    - Click on the delete button next to a job listing.
    - Confirm the deletion to remove the job from the JSON data and the website.

**Note:** Since the data is stored in a local JSON file, any changes made (add, update, delete) will only be visible in the current session unless you implement a persistent backend service or local storage solution.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
