import React, {useState, useEffect} from 'react';
import Link from 'next/link';

import {getCategories} from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(newCategories => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg dark:bg-secondary">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <a>
            <span
              className={`cursor-pointer block ${
                index === categories.length - 1 ? 'border-b-0' : 'border-b'
              } pb-3 mb-3`}
            >
              {category.name}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
