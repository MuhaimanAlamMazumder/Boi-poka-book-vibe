import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const {bookId, image, bookName, author, tags, category} = book;
    return (
    <Link to={`/books/${bookId}`}>

<div className="card bg-base-100 w-96 shadow-xl p-6">
  <figure className='bg-blue-300 py-8 rounded-xl'>
    <img
      src={image}
      className='h-[166px]'
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className='flex justify-center gap-4'>
    {
        
            tags.map((tag, index) => <button key={index} className="btn btn-sm bg-green-200 text-green-500">{tag}</button>)
          
    }
  </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By:{author}</p>
    <div className="border-t-2 border-dashed"></div>
    <div className="divider"></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      

      <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-11" className="rating-hidden" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="0.5 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="1 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="1.5 star" defaultChecked />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="2 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="2.5 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="3 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="3.5 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="4 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="4.5 star" />
  <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="5 star" />
</div>


      
    </div>
  </div>
</div>
    
    </Link>
    );
};

export default Book;