import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';

export const FeedbackPage = () => {
  const [user, setUser] = useState({
    comment: '',
    rating: 0,
    datetime: '',
    userId: 1,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) || 0 : value,
    }));
  };

  const handleRatingChange = (newRating) =>
    setUser((prev) => ({ ...prev, rating: newRating }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await HotelService.createFeedback({ ...user });
      if (response.status === 200) {
        alert('Feedback added successfully');
        navigate('/customer');
      }
    } catch (err) {
      console.log('Error saving feedback', err);
    }
  };

  const StarRating = ({ rating, onChange }) => (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => onChange(star)}
          style={{
            cursor: 'pointer',
            fontSize: '1.8rem',
            color: star <= rating ? '#ffc107' : '#ccc',
            transition: 'color 0.2s',
          }}
          role="button"
          tabIndex={0}
          aria-label={`${star} Star${star > 1 ? 's' : ''}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onChange(star);
          }}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <div
      style={{
        minHeight: '77vh',
        display: 'flex',
        alignItems: 'center',
        background: '#ffffff',
        padding: '20px',
      }}
    >
      {/* Left visual panel */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: '10px',
        }}
      >
        <img
          src="images/fb.jpg"
          alt="Illustration"
          style={{ maxWidth: '60%', height: '450px', objectFit: 'contain' }}
        />
      </div>

      {/* Right form panel with increased margin */}
      <div
        style={{
          width: '450px',
          maxWidth: '100%',
          background: '#fff',
          borderRadius: '14px',
          padding: '40px 16px',
          margin: '0 60px', // Increased spacing here
          boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h5 className="text-center mb-2" style={{ fontWeight: 600 }}>
          Add Feedback
        </h5>
        <p className="text-center mb-3" style={{ fontSize: '0.85rem' }}>
          We value your opinion
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="comment" className="form-label fw-bold">
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              className="form-control"
              placeholder="Enter your feedback"
              rows={2}
              value={user.comment}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Rating</label>
            <StarRating rating={user.rating} onChange={handleRatingChange} />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ borderRadius: '50px', fontWeight: 600, padding: '6px 0' }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 992px) {
          div[style*="display: flex"][style*="min-height: 100vh"] {
            flex-direction: column;
            align-items: center;
            padding: 10px;
          }
          div[style*="width: 450px"] {
            width: 100% !important;
            margin: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          div[style*="flex: 1"] > img {
            max-width: 60%;
            height: 200px !important;
          }
        }
      `}</style>
    </div>
  );
};