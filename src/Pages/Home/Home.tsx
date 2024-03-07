import React from 'react'
import Layout from '../../Layout/Ui/Layout'
import ContactCardHome from '../../Components/Ui/ContactCardHome'
import { useGetAllHome } from '../../api/Home';
import Highlight from '../../Components/Ui/HomeSections/Highlight';
import HomeNowCard from '../../Components/Ui/HomeNowCard';
import AboutHome from '../../Components/Ui/HomeSections/AboutHome';
import { BaseURL } from '../../api/config';

const Home = () => {
  const {data} = useGetAllHome();
// console.log(data?.data);
  
  return (
    <Layout>

<div className='slider_section'><img src={BaseURL + data?.data.slider[0]?.slider_translations[0]?.image} alt='Home Image'/></div>

      <div className='contact'>
        <ContactCardHome 
          title='Contact us'
          description='Send us your messages on our email.'
          name='Contact Us'
          link='contact'
        />
        <ContactCardHome 
          title='Consigne'
          description='Send us your coins photo. '
          name='Consigne'
          link='Consigne'
        />
      </div>

      <div className='highlight'>
        <h1>Highlights</h1>
        <Highlight title='Highlight'  data={data?.data?.product_highlight}  />
      </div>

      <div className='highlight'>
        <h1>Most Purchased</h1>
        <Highlight title='Highlight'  data={data?.data?.product_highlight}  />
      </div>

      <div className='ads'>
        <HomeNowCard 
          link='Register'
          text='register to get all the features.'
          title='Register now'
        />
        <HomeNowCard 
          link='Contact'
          text='send us all your messages.'
          title='Contact us now'
        />
      </div>

      <div className='about'>
        <AboutHome/>    
      </div>

    </Layout>
  )
}

export default Home