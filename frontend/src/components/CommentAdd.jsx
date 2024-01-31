import React from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";

function CommentAdd() {
  const allComments = useLoaderData();

  return (
    <div>
      <h2>Avis</h2>
      {allComments.map((comment) => (
        <div key={comment.id}>
          <StarRatings
            rating={comment.rating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
          />
          <h3>{comment.name}</h3>
          <h3>{comment.avis}</h3>
        </div>
      ))}
    </div>
  );
}

export default CommentAdd;
