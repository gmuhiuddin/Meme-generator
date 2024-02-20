import React from 'react';
import Index from '.';
import './style.css';
import Navbar from '../../../component/Navbar';
import { getMemes } from '@/config/api';


async function Detail({ params: { id } }) {

  const res = await getMemes();

  return (
    <>
      <Navbar />
      <Index res={res} id={id} />
    </>
  );
};

export default Detail;
