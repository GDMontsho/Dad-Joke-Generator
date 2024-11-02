const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "v6F2o6yu5ufZtLABnZCSPw==5QyEXwjkl9yR0Tlg";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {
  jokeEl.innerText = "Asking Dad...";
  btnEl.disabled = true;
  btnEl.innerText = "Loading";

  try {
    const response = await fetch(apiURL, options);
    const data = await response.json();

    if (data && data.length > 0 && data[0].joke) {
      jokeEl.innerText = data[0].joke;
    } else {
      jokeEl.innerText = "Oops! Couldn't fetch a joke right now.";
    }
  } catch (error) {
    jokeEl.innerText = "Error fetching joke!";
    console.error("Error:", error);
  } finally {
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
  }
}

btnEl.addEventListener("click", getJoke);
