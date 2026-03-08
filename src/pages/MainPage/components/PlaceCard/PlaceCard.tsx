import { useNavigate } from 'react-router-dom';

interface PlaceCardProps {
  title: string;
  type: 'Apartment' | 'Room';
  price: number;
  imageUrl: string;
  isPremium: boolean;
  rating: number;
  id: string;
}

export const PlaceCard = ({
  imageUrl,
  isPremium,
  price,
  rating,
  title,
  type,
  id,
}: PlaceCardProps) => {
  const navigate = useNavigate();
  const openOfferPage = (placeId: string) => {
    navigate(`/offer/${placeId}`);
  };
  return (
    <article
      className="cities__card place-card"
      onClick={() => openOfferPage(id)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img
          className="place-card__image"
          src={imageUrl}
          width="260"
          height="200"
          alt="Place image"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
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
