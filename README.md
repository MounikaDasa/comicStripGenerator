# Comic Strip Generator

## Overview

The Comic Strip Generator is a web application that allows users to create and share their own 10-panel comic strips. Users can input text for each panel, and the application uses a text-to-image API to generate comic panels. The generated comic strips are displayed in a user-friendly format.
![Comic Strip Generator](images/Screenshot%202023-11-26%20181750.png)
## Key Features

1. **User-Friendly Interface:**
   - The application provides a simple and intuitive user interface with input fields for each of the 10 comic panels.
   - Users can easily input text for each panel and generate a comic strip.

2. **API Integration:**
   - The application integrates with a text-to-image API using a provided API key.
   - Text input from users is sent to the API, which returns generated images for each panel.

3. **Responsive Design:**
   - The application is designed to be responsive, ensuring a seamless experience on both desktop and mobile browsers.

4. **Error Handling:**
   - User feedback mechanisms are implemented for failed API calls or internal errors.
   - In case of errors, users are informed about the issue and prompted to try again.

5. **Loading Message:**
   - A loading message is displayed when users click the "Generate Comic" button, providing a fun waiting experience.

6. **Inline Display:**
   - The generated comic strips are displayed in an inline format, with a minimum of 5 pictures in a row.

7. **Styling:**
   - The application features a clean and visually appealing design.
   - The white box used for text input has a similar style to the text area, providing a consistent look.

## How to Use

1. **Input Text:**
   - Enter text for each of the 10 comic panels in the provided text areas.

2. **Generate Comic:**
   - Click the "Generate Comic" button to initiate the process.

3. **Wait for Results:**
   - A loading message will inform users to wait while the comic strips are being generated.

4. **View Comic Strips:**
   - Once generated, the comic strips will be displayed in the designated area.

5. **Enjoy and Share:**
   - Users can enjoy their custom comic strips and share them as desired.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API for API communication

## API Information

- The application uses the Hugging Face text-to-image API.
- The API requires an authorization token, which is included in the headers of the fetch request.

## Notes

- Please be patient during the generation process, and enjoy the creative comic strips!

Feel free to explore and create your own comic strips!

 
