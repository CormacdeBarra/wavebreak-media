const apiKey = '6473511-0417f2cad683f1bee54cafe15'

export const getImages = async (searchQuery) => {
    const pixelBayUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}&image_type=photo`;
    const response = await fetch(`${pixelBayUrl}`);
    return response.json();
  };