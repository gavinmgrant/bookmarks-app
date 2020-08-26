import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';
import './BookmarkItem.css';
import { Link } from 'react-router-dom';
import BookmarksContext from '../BookmarksContext';

export default function BookmarkItem(props) {
  return (
    <BookmarksContext.Consumer>
      {(context) => (
        <li className='BookmarkItem'>
          <div className='BookmarkItem__row'>
            <h3 className='BookmarkItem__title'>
              <a
                href={props.url}
                target='_blank'
                rel='noopener noreferrer'>
                {props.title}
              </a>
            </h3>
            <Rating value={props.rating} />
          </div>
          <p className='BookmarkItem__description'>
            {props.description}
          </p>
          <div className='BookmarkItem__buttons'>
            <button>
                Edit
            </button>
            <button
              onClick={() => props.onClickDelete(props.id)}
            >
              Delete
            </button>
          </div>
        </li>
      )}
    </BookmarksContext.Consumer>
    
  )
}

BookmarkItem.defaultProps = {
  onClickDelete: () => {},
}

BookmarkItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  desciption: PropTypes.string,
  rating: PropTypes.number.isRequired,
  onClickDelete: PropTypes.func,
}