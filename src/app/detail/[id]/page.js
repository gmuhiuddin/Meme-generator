'use client';

import React, { useEffect, useState } from 'react';
import { getMemes } from '@/config/api';
import Image from 'next/image';
import './style.css';
import Navbar from '@/app/Navbar';

async function detail({ params: { id } }) {

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
    const imageRes = JSON.parse(memeImage);

    const image = imageRes.filter(element => element.id == id);
    
    image[0] && setOutputImage(image[0].url);

    setResult(response);
  };

  const changeImage = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&text0=${e.target[0].value}&text1=${e.target[1].value}`);

    const response = await res.json();

    const memeImage = localStorage.getItem('user-meme');
    const imageRes = JSON.parse(memeImage);

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
  
  return (
    <>
      <Navbar />
      <div className='edit-meme-container'>

        <Image style={imageStyle} width={500}
          height={100} src={result[0]?.url} alt='meme image' />

        <form onSubmit={changeImage}>
          <input required placeholder='Enter first text'/>
          <br />
          <input required placeholder='Enter second text'/>
          <br />
          <button type='submit'>Generate Meme</button>
        </form>

        {outputImage && <Image style={imageStyle} width={500}
          height={100} src={outputImage} alt='meme image' />}

      </div>
    </>
  );
};

export default detail;
