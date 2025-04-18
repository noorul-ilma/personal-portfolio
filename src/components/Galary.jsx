import React, { useState, useMemo } from 'react';
import './Galary.css'; // Assuming you already have this CSS file
import { FaBriefcase  } from "react-icons/fa";

const projectData = [
  { id: 1, title: 'Awareness session about diabetic day in Anuradhapura hospital', image: 'diabetic.jpeg', category: 'diabetic-day' },
  { id: 2, title: 'Improve health of community', image: 'charity.jpeg', category: 'Charity-shop ' },
  { id: 3, title: 'Improve social and mental wellbeing', image: 'under.jpeg', category: 'Under-the-moon' },
  { id: 4, title: 'Awareness session about diabetic day in Anuradhapura hospital', image: 'diabetic2.jpeg', category: 'diabetic-day' },
  { id: 5, title: 'Improve social and mental wellbeing', image: 'under2.jpeg', category: 'Under-the-moon' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Memoize the categories to avoid recalculating on every render
  const categories = useMemo(() => ['All', ...new Set(projectData.map(p => p.category))], []);

  const filteredProjects = selectedCategory === 'All'
    ? projectData
    : projectData.filter(p => p.category === selectedCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleLightboxClick = (e) => {
    e.stopPropagation(); // Prevent click from propagating to the background
    setSelectedImage(null);
  };

  return (
    <div className="gallery-section-container">
         <div className="title-container">
                  <span className="icon-wrapper">
                    <FaBriefcase className="title-icon" />
                  </span>
                  <h2 className="title">Project Gallery</h2>
                  <div className="underline"></div>
                </div>

      {/* Filter Buttons */}
      <div className="gallery-section-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`gallery-section-filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-section-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="gallery-section-item"
            onClick={() => handleImageClick(project.image)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="gallery-section-image"
              aria-label={`Image of ${project.title}`}
            />
            <div className="gallery-section-overlay">
              <h3 className="gallery-section-overlay-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="gallery-section-lightbox" onClick={handleLightboxClick}>
          <span className="gallery-section-close">&times;</span>
          <img
            src={selectedImage}
            alt="Preview"
            className="gallery-section-lightbox-img"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
