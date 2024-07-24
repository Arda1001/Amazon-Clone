const citiesByCountry = {
    "United States": ["New York", "Los Angeles", "Chicago"],
    "Canada": ["Toronto", "Vancouver", "Montreal"],
    "United Kingdom": ["London", "Manchester", "Birmingham"],
    "Australia": ["Sydney", "Melbourne", "Brisbane"]
};

document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById("country");
    const citySelect = document.getElementById("city");

    countrySelect.addEventListener('change', () => {
        updateCityOptions(countrySelect, citySelect);
    });
});

function updateCityOptions(countrySelect, citySelect) {
    const selectedCountry = countrySelect.value;

    // Clear current city options
    citySelect.innerHTML = '<option value="">Select a city</option>';

    if (selectedCountry && citiesByCountry[selectedCountry]) {
        citiesByCountry[selectedCountry].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

