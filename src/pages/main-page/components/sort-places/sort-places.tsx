import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentSort,
  setCurrentSort,
} from '../../main-page-slice/main-page-slice';
import { SortType } from '../../utils/types';
import { SORT_TYPES } from '../../utils/constants';

export const SortPlaces = () => {
  const dispatch = useDispatch();
  const currentSort = useSelector(selectCurrentSort);
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const togglePlacesOptions = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeSortItem = (sortType: SortType) => {
    dispatch(setCurrentSort(sortType));
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (evt: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(evt.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <form ref={formRef} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by: </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={togglePlacesOptions}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isOpen ? 'places__options--opened' : ''
        }`}
      >
        {SORT_TYPES.map((sortType) => (
          <li
            key={sortType}
            className={`places__option ${
              sortType === currentSort ? 'places__option--active' : ''
            }`}
            tabIndex={0}
            onClick={() => handleChangeSortItem(sortType)}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
};
