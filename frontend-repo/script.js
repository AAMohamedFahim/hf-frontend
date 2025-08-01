const API_URL = "https://mohamedfahim-testing.hf.space/your-endpoint"; // update with actual endpoint

async function sendRequest() {
  const userInput = document.getElementById("input").value;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: userInput }) // adjust based on your API schema
  });

  const data = await res.json();
  document.getElementById("response").textContent = JSON.stringify(data, null, 2);
}
