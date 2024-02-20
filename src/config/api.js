const getMemes = async () => {
    const res = await fetch('https://api.imgflip.com/get_memes');
    const result = await res.json();

    return result;
};

const getOutputImageData = async (id, txts) => {

    let api;
    
    switch (txts.length) {
        case 1:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&text0=${txts[0]}`;
            break;
        case 2:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&text0=${txts[0]}&text1=${txts[1]}`;
            break;
        case 3:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&text0=${txts[0]}&text1=${txts[1]}&text2=${txts[2]}`;
            break;
        case 4:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&text0=${txts[0]}&text1=${txts[1]}&text2=${txts[2]}&text3=${txts[3]}`;
            break;
    };
console.log(api);
    const res = await fetch(api);

    const result = await res.json();

    return result;
};

export { getMemes, getOutputImageData };