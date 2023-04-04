import axios from 'axios';

const apiUrl='https://netflix54.p.rapidapi.com/search/'

const options = {
  method: 'GET',
  params: {
    query: 'stranger',
    offset: '0',
    limit_titles: '50',
    limit_suggestions: '20',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '0dc196910bmsh982f759d76be3fcp15b167jsn49ec3bbba91b',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

export  const movies=async()=>{
  try{
    return await axios.get(apiUrl,options);

  }
  catch(error){
    console.log("error while connecting api",error.message);

  }
}

