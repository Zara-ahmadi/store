import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/app.css';

const Comments = () => {
  const [comments, setComments] = useState([
    { id: 1, name: 'Jane Doe', rating: 5, text: 'Great product!', date: '07/22/2024' },
    { id: 2, name: 'John Smith', rating: 3, text: 'It’s okay.', date: '07/23/2024' },
    { id: 3, name: 'Alice Johnson', rating: 4, text: 'Pretty good!', date: '07/24/2024' },
  ]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [filterRating, setFilterRating] = useState(null);

  const handleCommentSubmit = () => {
    if (newComment && newRating > 0) {
      const newCommentObj = {
        id: comments.length + 1,
        name: 'You',
        rating: newRating,
        text: newComment,
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setNewRating(0);
    }
  };

  const filteredComments = filterRating
    ? comments.filter(comment => comment.rating === filterRating)
    : comments;

  return (
    <div className="container pt-5">
      <div className="row">
        {/* Empty Column */}
        <div className="col-lg-1 col-md-1"></div>

        {/* Filter Section */}
        <div className="col-lg-3 col-md-3 col-sm-12 mb-3 filter justify-content-start">
          <h5>Filter by Rating</h5>
          <div className="filter-buttons">
            {[5, 4, 3, 2, 1].map(star => (
              <button
                key={star}
                className={`btn ${filterRating === star ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setFilterRating(star)}
              >
                {[...Array(star)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
                ))}
              </button>
            ))}
            <button
              className="btn btn-outline-secondary mt-2 clear-filter"
              onClick={() => setFilterRating(null)}
            >
              Clear Filter
            </button>
          </div>
        </div>

        {/* Comments and Form Section */}
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className='comment'>
            <h5>Add Your Comment</h5>
            <textarea
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder="Add your comment..."
              className="form-control mb-2"
            />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={`star ${newRating >= star ? 'filled' : ''}`}
                    onClick={() => setNewRating(star)}
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                ))}
              </div>
              <button onClick={handleCommentSubmit} className="btn btn-primary">
                Submit
              </button>
            </div>
            <hr />

            <h5>Comments</h5>
            {filteredComments.map(comment => (
              <div key={comment.id} className="comment row mb-3">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <strong>{comment.name}</strong> - <small>{comment.date}</small>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                  <p>{comment.text}</p>
                  <small>
                    {[...Array(comment.rating)].map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
                    ))}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
