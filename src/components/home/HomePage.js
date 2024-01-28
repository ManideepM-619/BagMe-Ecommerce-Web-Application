import React from 'react';
import './HomePage.css'
import Banner from './Banner';
import Popular from '../popular/Popular';
import NewCollections from '../product/NewCollections';
function HomePage() {
  return (
   <>
   <div>
     <Banner/>
      <Popular/>
      <NewCollections/>
     </div>
   </>
  );
};

export default HomePage;


