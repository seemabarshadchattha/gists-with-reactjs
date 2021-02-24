const axios = require("axios");
// We can create seprate utility helper for this configuration
// Where we can define get, post, put, delete generic functions
// But Becuase of time I used simple method
export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    // Authorization: "If we want to set authorization this is the place",
  },
});
