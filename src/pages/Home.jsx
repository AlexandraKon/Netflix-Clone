import React from 'react';
import Main from '../components/Main';
import requests from '../Request';
import Row from './Row';

const Home = () => {
  return (
    <>
        <Main/>
        <Row title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row title='Popular' fetchURL={requests.requestPopular}/>
        <Row title='Trending' fetchURL={requests.requestTrending}/>
        <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row title='Horror' fetchURL={requests.requestHorror}/>

    </>
  )
}

export default Home;