'use client';

import React, { useEffect, useState } from 'react';
import { getOutputImageData } from '@/config/api';
import { saveAs } from 'file-saver';
import Image from 'next/image';
import './style.css'

function Index({ res, id }) {
  const [outputImage, setOutputImage] = useState();
  const [result, setResult] = useState([]);

  const values = ['first', 'second', 'third', 'fourth', 'fifth'];

  useEffect(() => {
    getRes();
  }, []);

  const getRes = async () => {

    const response = res.data.memes.filter(element => element.id == id);

    const memeImage = localStorage.getItem('user-meme');

    const imageRes = JSON.parse(memeImage) ? JSON.parse(memeImage) : [];

    const image = imageRes.filter(element => element.id == id);

    image[0] && setOutputImage(image[0].url);

    setResult(response);
  };

  const changeImage = async (e) => {
    e.preventDefault();

    let arr = [];

    for (let i = 0; i < result[0]?.box_count; i++) {
      arr.push(e.target[i].value)
    };

    const response = await getOutputImageData(id, arr);

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
  
  return (
    <div className='edit-meme-container'>

      {result[0]?.url && <Image className='meme-image' width={500}
        height={100} src={result[0]?.url} alt='meme image' />}

      <div>
        <form onSubmit={changeImage}>
          {Array.from({ length: result[0]?.box_count}, (_, index) => (
            <span key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <input
                key={index}
                required
                placeholder={`Enter text ${values[index]}`}
              />
            </span>
          ))}

          <button type='submit'>Generate Meme</button>
          <br />
          {outputImage &&
            <button onClick={() => saveAs(outputImage, `${result[0].name} meme`)}>Download</button>
          }
        </form>
      </div>

      {outputImage && <Image className='meme-image' width={500}
        height={100} src={outputImage} alt='meme image' />}
      <br />
    </div>
  );
};

export default Index;