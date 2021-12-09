import React, { useState } from "react";

const API = "http://localhost:8002/movies";

function MovieForm() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [score, setScore] = useState(0);
  const [runningTime, setRunningTime] = useState("");
  const [rating, setRating] = useState("");

  function handleOnChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleOnChangeGenre(event) {
    setGenre(event.target.value);
  }

  function handleOnChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleOnChangeImage(event) {
    setImage(event.target.value);
  }

  function handleOnChangeScore(event) {
    setScore(event.target.value);
  }

  function handleOnChangeRunningTime(event) {
    setRunningTime(event.target.value);
  }

  function handleOnChangeRating(event) {
    setRating(event.target.value);
  }

  function handleSubmitForm() {
    const movieObj = {
      title: title,
      genre: genre,
      description: description,
      "movie-image": image,
      rating: rating,
      score: parseInt(score),
      "running-time": runningTime,
    };
    const configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieObj),
    };
    fetch(API, configObj)
      .then((resp) => resp.json())
      .then((data) => data);
  }

  return (
    <div>
      <form>
        <label>
          Movie title:
          <input type="text" value={title} onChange={handleOnChangeTitle} />
        </label>
        <label>
          Genre:
          <input type="text" value={genre} onChange={handleOnChangeGenre} />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleOnChangeDescription}
          />
        </label>
        <label>
          Movie image:
          <input type="url" value={image} onChange={handleOnChangeImage} />
        </label>
        <label>
          Running time:
          <input
            type="text"
            value={runningTime}
            onChange={handleOnChangeRunningTime}
          />
        </label>
        <label>
          Rating:
          <input type="text" value={rating} onChange={handleOnChangeRating} />
        </label>
        <label>
          Score:
          <input type="integer" value={score} onChange={handleOnChangeScore} />
        </label>
        <input type="submit" onClick={handleSubmitForm} />
      </form>
    </div>
  );
}

export default MovieForm;
