document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('comic-form');
    const generateButton = document.getElementById('generate');
    const comicDisplay = document.getElementById('comic-display');

    generateButton.addEventListener('click', function () {
        // Collect text inputs for each panel
        const panels = Array.from(Array(10).keys()).map(i => {
            const panelElement = document.getElementById(`panel${i + 1}`);
            return panelElement ? panelElement.value : '';
        });

        // Display a fun loading message
        const loadingMessage = document.createElement('p');
        loadingMessage.classList.add('loading-message');
        loadingMessage.textContent = `Hang tight! Our comic artists are working on something intresting for you. It won't take long!`;
        comicDisplay.innerHTML = '';
        comicDisplay.appendChild(loadingMessage);

        // Use the provided API code to send data to the API
        generateComics(panels);
    });

    function generateComics(panels) {
        const promises = panels.map((panelText, index) => {
            // Skip making a request if the textarea is empty
            if (panelText.trim() !== '') {
                // Utilize the provided API code to establish a connection with the API
                const data = {
                    "inputs": panelText,
                };

                console.log(`Calling API for Panel ${index + 1} with data:`, data);

                return fetch("https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud", {
                    headers: {
                        "Accept": "image/png",
                        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(data),
                })
                    .then(response => {
                        console.log(`API response for Panel ${index + 1} received:`, response);
                        return response.blob();
                    })
                    .then(imageBlob => {
                        // Display the generated comic strip for each panel
                        const imageURL = URL.createObjectURL(imageBlob);
                        comicDisplay.innerHTML += `<img src="${imageURL}" alt="Comic Strip for Panel ${index + 1}"><br>`;
                        console.log(`Comic strip for Panel ${index + 1} displayed successfully.`);

                        // Return a resolved promise for each successful request
                        return Promise.resolve();
                    })
                    .catch(error => {
                        // Handle API errors
                        console.error(`Error generating comic for Panel ${index + 1}:`, error);
                        comicDisplay.innerHTML += `<p>Error generating comic for Panel ${index + 1}. Please try again.</p>`;

                        // Return a rejected promise for each failed request
                        return Promise.reject();
                    });
            } else {
                // Return a resolved promise for empty panels
                return Promise.resolve();
            }
        });

        // Wait for all promises to resolve, then remove the loading message
        Promise.all(promises)
            .then(() => {
                loadingMessage.remove();
            })
            .catch(() => {
                // Handle errors if needed
            });
    }
});
