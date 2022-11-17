import React from 'react';
import delve from 'dlv';

import { formatDistance } from 'date-fns';

import { getStrapiMedia } from '../../../../../utils';

const Reviews = ({ reviews }) => {
  return (
    <div className="col-start-2 col-end-2 mt-24">
      {reviews &&
        reviews.map((review, index) => (
          <div
            className="bg-white w-full rounded-lg p-4 mb-6 shadow-md sm:inline-block"
            key={`review-${index}`}
          >
            <div className="flex items-start text-left">
              <div className="flex-shrink-0">
                <div className="inline-block relative">
                  <img
                    alt={delve(
                      review,
                      'attributes.author.data.attributes.picture.data.attributes.alternativeText'
                    )}
                    src={getStrapiMedia(
                      delve(
                        review,
                        'attributes.author.data.attributes.picture.data.attributes.url'
                      )
                    )}
                    className="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                </div>
              </div>
              {delve(review, 'attributes.author') && (
                <div className="ml-6">
                  <p className="flex items-baseline">
                    <span className="text-gray-600 dark:text-gray-200 font-bold">
                      {delve(
                        review,
                        'attributes.author.data.attributes.username'
                      )}
                    </span>
                    <span className="text-gray-500 ml-2 text-sm">
                      {formatDistance(
                        new Date(delve(review, 'attributes.createdAt')),
                        new Date(),
                        {
                          addSuffix: true,
                        }
                      )}
                    </span>
                  </p>

                  <div className="flex items-center mt-1">
                    {[...Array(5).keys()].map((index) =>
                      delve(review, 'attributes.note') <= index ? (
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-secondary"
                          viewBox="0 0 24 24"
                          key={index}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      ) : (
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-secondary"
                          viewBox="0 0 24 24"
                          key={index}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      )
                    )}
                  </div>
                  {delve(review, 'attributes.content') && (
                    <div className="mt-3">
                      <p className="mt-1  dark:text-white">
                        {delve(review, 'attributes.content')}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Reviews;
