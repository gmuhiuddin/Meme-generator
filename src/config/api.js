const getMemes = async () => {
    const res = await fetch('https://api.imgflip.com/get_memes');
    const result = await res.json();

    return result;
};

const getOutputImageData = async (id, txts) => {

    let api;
    
    switch (txts.length) {
        case 1:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&boxes[0][text]=${txts[0]}`;
            break;
        case 2:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&boxes[0][text]=${txts[0]}&boxes[1][text]=${txts[1]}`;
            break;
        case 3:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&boxes[0][text]=${txts[0]}&boxes[1][text]=${txts[1]}&boxes[2][text]=${txts[2]}`;
            break;
        case 4:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&boxes[0][text]=${txts[0]}&boxes[1][text]=${txts[1]}&boxes[2][text]=${txts[2]}&boxes[3][text]=${txts[3]}`;
            break;
            case 5:
            api = `https://api.imgflip.com/caption_image?template_id=${id}&username=GhulamMuhiuddin&password=786muhiuddin786&boxes[0][text]=${txts[0]}&boxes[1][text]=${txts[1]}&boxes[2][text]=${txts[2]}&boxes[3][text]=${txts[3]}&boxes[4][text]=${txts[4]}`;
            break;
    };
    
    const res = await fetch(api);

    const result = await res.json();

    return result;
};

export { getMemes, getOutputImageData };