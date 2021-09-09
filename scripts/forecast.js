const key = "aIAGZdaDnvakTf92ifNgXFoJ14tPEtl8";

const getWeather = async (locationkey) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/${locationkey}`;
  const query = `?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  
  const request = new XMLHttpRequest();
  console.log(request);
  request.open("get",base+query);
  request.send();
  request.addEventListener("readystatechange",()=>{
    if(request.readyState===4)
    {
      console.log(request);
    }
  })
  return data[0];
};
