import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { useLoaderData } from "react-router-dom";
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
    <div>
      <h1 className="comment-avis">
        Avis{" "}
        <StarRatings
          rating={averageRating}
          starRatedColor="gold"
          numberOfStars={5}
          name="averageRating"
          readOnly
        />
      </h1>
      <div className="bloc-avis">
        {" "}
        <button type="button" onClick={handlePrevComment}>
          Previous
        </button>
        {allComments.length > 0 && (
          <div
            key={allComments[currentCommentIndex].id}
            className="comment-container"
          >
            <h2>
              {allComments[currentCommentIndex].name} a donné :{" "}
              <StarRatings
                rating={allComments[currentCommentIndex].rating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
              />
            </h2>
            <h2> Son commentaire : </h2>
            <h3>{allComments[currentCommentIndex].avis}</h3>
          </div>
        )}
        {allComments.length > 1 && (
          <button type="button" onClick={handleNextComment}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default CommentAdd;
