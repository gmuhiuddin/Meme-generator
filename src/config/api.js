const getMemes = async () => {
    const res = await fetch('https://api.imgflip.com/get_memes');
    const result = await res.json();

    return result;
};

export { getMemes };