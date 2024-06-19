// U92725213

// Function to load data from CSV file and display it

async function loadAndDisplayData() {

    try {

        // Load CSV data using D3

        const data = await d3.csv("data/purchase_orders.csv");



        // Select the <ul> element to append list items

        const ul = d3.select("#purchase-orders-list");



        // Create and append list items for each purchase order

        ul.selectAll("li")

            .data(data)

            .enter()

            .append("li")

            .text(d => `${d.customerName} ${d.orderId}: ${d.purchaseAmount}`);

    } catch (error) {

        console.error("Error loading data:", error);

    }

}



// Call the function to load and display data when the DOM content is loaded

document.addEventListener("DOMContentLoaded", loadAndDisplayData);