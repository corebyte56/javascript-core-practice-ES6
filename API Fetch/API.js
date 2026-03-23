fetch('https://api.pexels.com/v1/curated?per_page=15&page=1')
  .then(res => res.json())
  .then(data => console.log(data));