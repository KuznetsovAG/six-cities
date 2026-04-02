import { useNavigate } from 'react-router-dom';
import { Offers } from './utils/types';

interface PlaceCardProps extends Offers {
  handleActiveOfferChange?: (offerId: string | null) => void;
}

export const PlaceCard = ({
  isPremium,
  previewImage,
  price,
  rating,
  title,
  type,
  id,
  isFavorite,
  handleActiveOfferChange,
}: PlaceCardProps) => {
  const navigate = useNavigate();

  const navigateToSelectOffer = (placeId: string) => {
    navigate(`/offer/${placeId}`);
  };

  const handleMouseEnter = () => {
    if (handleActiveOfferChange) {
      handleActiveOfferChange(id);
    }
  };

  const handleMouseLeave = () => {
    if (handleActiveOfferChange) {
      handleActiveOfferChange(null);
    }
  };
  return (
    <article
      className={`${isFavorite ? 'favorites' : 'cities'}__card place-card`}
      onClick={() => navigateToSelectOffer(id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${
          isFavorite ? 'favorites' : 'cities'
        }__image-wrapper place-card__image-wrapper`}
      >
        <img
          className="place-card__image"
          src={previewImage}
          width={isFavorite ? '150' : '260'}
          height={isFavorite ? '110' : '200'}
          alt="Place image"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              isFavorite ? 'place-card__bookmark-button--active' : ''
            } button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">{title}</h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
