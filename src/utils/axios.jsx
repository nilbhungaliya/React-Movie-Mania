import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjU5ODQ0NDg0ZTBlNzU4ZmI1M2ZkMDI4MjA5ZTk0MyIsIm5iZiI6MTcyNTE4MzAxMy4wMjgzNDQsInN1YiI6IjY2Y2MxY2FkYjdkNjZiZGYwYjE2OGY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mpUWAMZDLh3NqlpCuFWJ4uhUfB3xIZ7iwulFqWt1hV0'
      }
});

export default instance;
