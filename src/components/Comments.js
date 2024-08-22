import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/app.css';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [filterRating, setFilterRating] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/comments');
      setComments(data);
    } catch (e) {
      setError('Failed to load comments.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

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

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="comments-container pt-5 pb-5">
      <div className="row">
        <div className="col-lg-1 col-md-1"></div>

        <div className="col-lg-3 col-md-3 col-sm-12 mb-3 filter-section">
          <h5>Filter by Rating</h5>
          <div className="filter-buttons">
            {[5, 4, 3, 2, 1].map(star => (
              <button
                key={star}
                className={`filter-btn ${filterRating === star ? 'active' : ''}`}
                onClick={() => setFilterRating(star)}
              >
                {[...Array(star)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                ))}
              </button>
            ))}
            <button
              className="clear-filter-btn"
              onClick={() => setFilterRating(null)}
            >
              Clear Filter
            </button>
          </div>
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="comment-section">
            <h5>Add Your Comment</h5>
            <textarea
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder="Add your comment..."
              className="comment-textarea mb-2"
            />
            <div className="rating-section d-flex justify-content-between align-items-center mb-3">
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={`rating-star ${newRating >= star ? 'filled' : ''}`}
                    onClick={() => setNewRating(star)}
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                ))}
              </div>
              <button onClick={handleCommentSubmit} className="submit-btn">
                Submit
              </button>
            </div>
            <hr />

            <h5>Comments</h5>
            {filteredComments.map(comment => (
              <div key={comment.id} className="comment-item row mb-3">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <strong>{comment.name}</strong> - <small>{comment.date}</small>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                  <p>{comment.text}</p>
                  <small>
                    {[...Array(comment.rating)].map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
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
