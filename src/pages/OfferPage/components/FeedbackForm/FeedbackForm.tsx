import * as React from 'react';
import { Rating } from '../Rating';

export const FeedbackForm = () => {
  const [textareaValue, setTextareaValue] = React.useState('');

  const handleChaggeTextareaValue = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaValue(event.target.value);
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={textareaValue}
        onChange={handleChaggeTextareaValue}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!textareaValue.length}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
