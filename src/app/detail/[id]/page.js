import React from 'react';
import Index from '.';
import './style.css';
import Navbar from '@/app/Navbar';
import { getMemes } from '@/config/api';


async function Detail({ params: { id } }) {

  const res = await getMemes();

  // if (!result[0]?.url) {
  //   return <Loading />
  // };

  return (
    <>
      <Navbar />
      <Index res={res} id={id} />
    </>
  );
};

export default Detail;
