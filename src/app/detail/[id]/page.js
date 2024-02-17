'use client';

import React, { useEffect, useState } from 'react';
import { getMemes, getOutputImageData } from '@/config/api';
import Image from 'next/image';
import './style.css';
import Navbar from '@/app/Navbar';
import Loading from '@/app/loading';

function Detail({ params: { id } }) {

  const [outputImage, setOutputImage] = useState();
  const [result, setResult] = useState([]);

  const imageStyle = {
    width: '31vw',
    height: '79vh',
    boxShadow: '0px 0px 3px black',
    margin: '11px'
  };

  useEffect(() => {
    getRes();
  }, []);

  const getRes = async () => {
    const res = await getMemes();

    const response = res.data.memes.filter(element => element.id == id);

    const memeImage = localStorage.getItem('user-meme');
    const imageRes = JSON.parse(memeImage) ? JSON.parse(memeImage) : [];

    const image = imageRes.filter(element => element.id == id);

    image[0] && setOutputImage(image[0].url);

    setResult(response);
  };

  const changeImage = async (e) => {
    e.preventDefault();

    const response = await getOutputImageData(id, e.target[0].value, e.target[1].value);

    const memeImage = localStorage.getItem('user-meme');
    const imageRes = JSON.parse(memeImage) ? JSON.parse(memeImage) : [];

    const image = imageRes.filter(element => element.id == id);

    const indexOfImage = imageRes.indexOf(image[0]);

    indexOfImage == -1 ? imageRes.push({
      url: response.data.url,
      id: id
    }) :
    imageRes.splice(indexOfImage, 1, {
        url: response.data.url,
        id: id
    });

    localStorage.setItem('user-meme', JSON.stringify(imageRes));

    setOutputImage(response.data.url);
  };

  if (!result[0]?.url) {
    return <Loading />
  };

  return (
    <>
      <Navbar />
      <div className='edit-meme-container'>
        {result[0]?.url && <Image style={imageStyle} width={500}
          height={100} src={result[0]?.url} alt='meme image' />}

        <form onSubmit={changeImage}>
          <input required placeholder='Enter first text' />
          <br />
          <input required placeholder='Enter second text' />
          <br />
          <button type='submit'>Generate Meme</button>
        </form>

        {outputImage && <Image style={imageStyle} width={500}
          height={100} src={outputImage} alt='meme image' />}

      </div>
    </>
  );
};

export default Detail;
