export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '64746ba3e7msh1a352f615f924ecp12675ajsn0935d5a3fd77',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '64746ba3e7msh1a352f615f924ecp12675ajsn0935d5a3fd77',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };