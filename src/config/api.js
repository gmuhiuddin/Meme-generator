const getMemes = async () => {
    const res = await fetch('https://api.imgflip.com/get_memes');
    const result = await res.json();

    return result;
};

const getOutputImageData = async (id, txt1, txt2) => {
    
    const res = await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&text0=${txt1}&text1=${txt2}`);

    const result = await res.json();

    return result;
};

export { getMemes, getOutputImageData };