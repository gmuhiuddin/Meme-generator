import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getMemes } from '../../config/api'
import './style.css';

async function Dashboard() {

    const result = await getMemes();
    
  return (
    <div className='container'>
        {result.data.memes.map((element, index) => {
            return <div key={index} className='meme-cart'>
                <Image className='meme-images' width={313} height={313} src={element?.url} alt={`Meme ${index} image`} />
                <br />
                <br />
                <h2>{element.name}</h2>
                <br />
                <Link className='link' href={`/Detail/${element.id}`} >Generate meme</Link>
                </div>
        })}
    </div>
  );
};

export default Dashboard;
