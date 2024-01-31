import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { useLoaderData } from "react-router-dom";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import "./CommentAdd.css";

function CommentAdd() {
  const allComments = useLoaderData();
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  const calculateAverageRating = () => {
    if (allComments.length === 0) {
      return 0;
    }

    const totalRating = allComments.reduce(
      (acc, comment) => acc + comment.rating,
      0
    );
    return totalRating / allComments.length;
  };

  const averageRating = calculateAverageRating();

  const handleNextComment = () => {
    setCurrentCommentIndex((prevIndex) =>
      prevIndex === allComments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevComment = () => {
    setCurrentCommentIndex((prevIndex) =>
      prevIndex === 0 ? allComments.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="all-page-comment-add">
      <h1 className="comment-avis">
        AVIS{" "}
        <StarRatings
          rating={averageRating}
          starRatedColor="gold"
          numberOfStars={5}
          name="averageRating"
          readOnly
          starDimension="30px"
        />
      </h1>
      <div className="bloc-avis">
        {" "}
        <button
          className="button-com"
          type="button"
          onClick={handlePrevComment}
          aria-label="Previous Comment"
        >
          <SlArrowLeft />
        </button>
        {allComments.length > 0 && (
          <div
            key={allComments[currentCommentIndex].id}
            className="comment-container"
          >
            <h2 className="name-rating">
              {allComments[currentCommentIndex].name} a donné :{" "}
              <StarRatings
                rating={allComments[currentCommentIndex].rating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starDimension="30px"
              />
            </h2>
            <h2> Son commentaire : </h2>
            <p className="comment-by-name">
              {allComments[currentCommentIndex].avis}
            </p>
          </div>
        )}
        {allComments.length > 1 && (
          <button
            className="button-com"
            type="button"
            onClick={handleNextComment}
            aria-label="Next Comment"
          >
            <SlArrowRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default CommentAdd;
