import React from "react";
// @ts-expect-error: Importing 'react-rating-stars-component' despite potential TypeScript errors
import ReactStars from "react-rating-stars-component";

const PredefinedRating: React.FC = () => {
  return (
    <ReactStars
      count={5} // Total stars
      value={4.5} // Set the value to 4.5 for half a star
      edit={false} // Disable user interaction
      size={24} // Star size
      activeColor="#ffd700" // Yellow color for active stars
      isHalf={true}
      color="#FFFFFF" // Allow half stars
    />
  );
};

export default PredefinedRating;
