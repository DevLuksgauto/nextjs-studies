'use client';
import { notFound } from 'next/navigation';
import React from 'react';

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ReviewsDetail = ({
  params
}: {
  params: { productId: string; reviewsId: string };
}) => {
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error('Error loading review');
  // }
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewsId} for product {params.productId}
    </h1>
  );
};

export default ReviewsDetail;
