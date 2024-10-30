'use client';
import React, { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    console.log('rodou');
  }, []);
  return <h1>Loading</h1>;
};

export default Loading;
