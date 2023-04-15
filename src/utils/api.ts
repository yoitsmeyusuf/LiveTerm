import axios from 'axios';
import App from 'next/app';
import config from '../../config.json';

export const getProjects = async () => {
 const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

// export const getReadme = async () => {
//   const { data } = await axios.get(config.readmeUrl);
//   return data;
// };
<<<<<<< HEAD
// export const getReadme = async () => {
//   const { data } = await axios.get(config.readmeUrl);
//   return data;
// };
=======
>>>>>>> 686cc609bf5f15d2d7bc268a2b90b73c722c6a8c

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};
export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getLoc = async () => {


  const { data } = await axios.get(`https://ipinfo.io/${await getIp()}/?token=cbc83f4c3b1b1b`);
  return  data.city;
<<<<<<< HEAD


=======
    
  
>>>>>>> 686cc609bf5f15d2d7bc268a2b90b73c722c6a8c
};

export const getIp = async () =>{

  const { data } = await axios.get(`https://api.ipify.org?format=json`);
  return data["ip"]

}
<<<<<<< HEAD
=======

>>>>>>> 686cc609bf5f15d2d7bc268a2b90b73c722c6a8c
