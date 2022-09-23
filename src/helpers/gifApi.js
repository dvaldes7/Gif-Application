export const findGif = async (name) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=uVKdQJbADxNzSmrwrOblazTibiTljx2L&q=${name}&limit=50`;
  const resp = await fetch(url);
  if (resp.ok) {
    const json = await resp.json();
    const newItemGifs = json.data.map((data) => {
      return {
        id: data.id,
        title: data.title,
        url: data.images.downsized_medium.url,
      };
    });
    return newItemGifs;
  } else {
    return [];
  }
};
