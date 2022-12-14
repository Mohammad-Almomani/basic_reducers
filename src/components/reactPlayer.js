import React from "react";
import ReactPlayer from "react-player";
import Modal from 'react-bootstrap/Modal';

function Player({ open, toggleModal }) {

    return (
        <>
          { open &&  ( <Modal show={open} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome To the Club</Modal.Title>
          </Modal.Header>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=pX2LUvkiVeQ"
            width="100%"
            playing={true}
            volume={0.4}
            />
        
      </Modal> )
        }
        </>
    );
    }
export default Player;
