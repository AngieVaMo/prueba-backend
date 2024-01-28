const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    // Search Google repositories sorted by stars
    const response = await axios.get(
      "https://api.github.com/search/repositories",
      {
        params: {
          q: "user:google",
          sort: "stars",
          order: "desc",
          per_page: 10,
        },
      }
    );

    const repositories = response.data.items.map((repo) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      url: repo.html_url,
    }));

    // Shows repositories in JSON format
    res.json(repositories);
  } catch (error) {
    console.error("Error getting repositories:", error.message);
    res.status(500).send("Error getting repositories");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
