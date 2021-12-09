import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const API = "http://localhost:8002/movies";

function ModalForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            score: parseFloat(score),
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
            handleClose();
            document.location.reload();
    }

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Add New Movie
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>My New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label for="movieTitle">Movie Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="movieTitle"
                                placeholder="Enter your new movie..."
                                value={title}
                                onChange={handleOnChangeTitle}
                            />
                        </div>
                        <div class="form-group">
                            <label for="genre">Genre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="genre"
                                placeholder="Movie genre..."
                                value={genre}
                                onChange={handleOnChangeGenre}
                            />
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="genre"
                                placeholder="Movie description..."
                                value={description}
                                onChange={handleOnChangeDescription}
                            />
                        </div>
                        <div class="form-group">
                            <label for="movieImg">Movie Image</label>
                            <input
                                type="text"
                                className="form-control"
                                id="movieImg"
                                placeholder="Movie image..."
                                value={image}
                                onChange={handleOnChangeImage}
                            />
                        </div>
                        <div class="form-group">
                            <label for="runningTime">Running Time</label>
                            <input
                                type="text"
                                className="form-control"
                                id="runningTime"
                                placeholder="Movie Running Time..."
                                value={runningTime}
                                onChange={handleOnChangeRunningTime}
                            />
                        </div>
                        <div class="form-group">
                            <label for="rating">Movie Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                id="rating"
                                placeholder="Movie Rating..."
                                value={rating}
                                onChange={handleOnChangeRating}
                            />
                        </div>
                        <div class="form-group">
                            <label for="score">Movie Score</label>
                            <input
                                type="number"
                                className="form-control"
                                id="score"
                                placeholder="Movie Score..."
                                value={score}
                                onChange={handleOnChangeScore}
                            />
                        </div>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={handleSubmitForm}
                            >
                                Submit
                            </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalForm;
