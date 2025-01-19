// Add an event listener to the search button
document.getElementById("search-btn").addEventListener("click", function () {
    console.log("Search button clicked!"); // Check if the button is being clicked.
  
    const cityInput = document.getElementById("city-input").value; // Get user input
    console.log("City entered:", cityInput); // Verify the input value.
  
    // Dummy data for now
    const dummyData = {
      city: "Tokyo",
      temperature: "15°C",
      description: "Clear skies",
      icon: "https://openweathermap.org/img/wn/01d.png",
    };
  
    // Simulate fetching weather for Tokyo
    if (cityInput.toLowerCase() === "tokyo") {
      console.log("Displaying weather info for Tokyo"); // Verify the logic for Tokyo.
  
      // Update the weather info section
      console.log("The city name is: ", dummyData.city)
      document.getElementById("city-name").textContent = dummyData.city;
      
      document.getElementById("temperature").textContent = dummyData.temperature;
      document.getElementById("description").textContent = dummyData.description;
      document.getElementById("weather-icon").src = dummyData.icon;
  
      // Show the weather info
      document.getElementById("weather-info").classList.remove("hidden");
    } else {
      console.log("City not found"); // Log when the input is not "Tokyo."
      alert("City not found. Try 'Tokyo'.");
    }
  });
  