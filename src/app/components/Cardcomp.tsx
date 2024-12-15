import React from "react";

interface CardProps {
  imageSrc: string;
  paragraph: string;
  heading: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, paragraph, heading }) => {
  return (
    <div className="flex flex-col items-start p-4  rounded-md ">
      {/* Image */}
      <img
        src={imageSrc}
        alt="Card Image"
        className="w-[287px] h-[287px] object-cover"
      />
      {/* Paragraph */}
      <p className="mt-4 text-gray-700 text-left">{paragraph}</p>
      {/* Heading */}
      <button className="mt-2 text-xl font-bold text-left text-gray-900">{heading}</button>
    </div>
  );
};

export default Card;
