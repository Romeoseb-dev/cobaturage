import React from "react";
import StarRatings from "react-star-ratings";
import { useLoaderData } from "react-router-dom";
import "./CommentAdd.css";

function CommentAdd() {
  const allComments = useLoaderData();

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
        {allComments.map((comment) => (
          <div key={comment.id} className="comment-container">
            <h2>
              {comment.name} a donné :{" "}
              <StarRatings
                rating={comment.rating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
              />
            </h2>
            <h2> Son commentaire : </h2>
            <h3>{comment.avis}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentAdd;
