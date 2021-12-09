import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                New Movie
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>My New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label for="movieTitle">Movie Title</label>
                            <input type="text" className="form-control" id="movieTitle" placeholder="Enter your new movie..."/>
                        </div>
                        <div class="form-group">
                            <label for="genre">Genre</label>
                            <input type="text" className="form-control" id="genre" placeholder="Movie genre..."/>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea type="text" className="form-control" id="genre" placeholder="Movie description..."/>
                        </div>
                        <div class="form-group">
                            <label for="movieImg">Movie Image</label>
                            <input type="text" className="form-control" id="movieImg" placeholder="Movie image..."/>
                        </div>
                        <div class="form-group">
                            <label for="runningTime">Running Time</label>
                            <input type="number" className="form-control" id="runningTime" placeholder="Movie Running Time..."/>
                        </div>
                        <div class="form-group">
                            <label for="rating">Movie Rating</label>
                            <input type="text" className="form-control" id="rating" placeholder="Movie Rating..."/>
                        </div>
                        <div class="form-group">
                            <label for="score">Movie Score</label>
                            <input type="number" className="form-control" id="score" placeholder="Movie Score..."/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalForm;
