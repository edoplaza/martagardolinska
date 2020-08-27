import React, { useContext, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


import { MainContext } from '../contexts/MainContext';

let tl = gsap.timeline();

const Photos = () => {
  const { closeMenu, getPhotos, photos } = useContext(MainContext);
  const [currentImage, setCurrentImage] = useState(0);
  const [pics, setPics] = useState([]);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [margin, setMargin] = useState(0)

  useEffect(() => {
    closeMenu();
    getPhotos();
    defineMargins();

    window.addEventListener("resize", defineMargins());

    return () => window.removeEventListener("resize", defineMargins());

  }, [])

  useEffect(() => {
    setPics(photos)
    if (pics.length) {
      tl.to('.photos', {
        duration: 1,
        css: {
         opacity: 1,
          y: 0
        }}
      )
    }
  }, [photos])

  const defineColumns = () => {
    let width = window.innerWidth;
    let columns;

    if ( width > 1800) {
      columns = 3;
    } else if (width >= 780 ) {
      columns = 2;
    } else {
      columns = 1;
    }
    return columns;

  }

  const defineMargins = () => {
    let width = window.innerWidth;
    if ( width > 1800) {
      setMargin(20);
    } else if (width >= 780 ) {
      setMargin(10);
    } else {
      setMargin(4);
    }
  }

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


  return (
    <div className="page photos">
      <div className="page-header container-xl">
        <h1 className="title">Photos</h1>
      </div>
      <div className="photos-content">
        <div className="photos-list container-xl">
        { photos.length && <Gallery photos={photos}  columns={() => defineColumns()} margin={margin} direction='column' onClick={openLightbox} /> }

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(photo => ({
                  ...photo,
                  // srcset: x.srcSet,
                  // caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        </div>
      </div>
    </div>
  )
}

export default Photos;
