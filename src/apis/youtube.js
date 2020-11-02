import axios from "axios";

const KEY = "AIzaSyBWl7L5WvM2m0ZSfciD0yHM8Mi3XQtOnrk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
