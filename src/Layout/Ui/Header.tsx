import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Translate from '../../Components/Utils/Translate';
import { NavigationLinks } from '../../Components/Ui/NavigationLinks';
import WithDrawerNav from '../../HighOrderComponent/WithDrawerNav';
import { Button, Divider } from 'antd';
import {  MenuOutlined,ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {
  const {t} = useTranslation();

  return (
    <div className='contianer'>
      <div className='left'>
        <Link className="Link" to={"/home"}><img src='/logo/Logo.png' alt='Logo' className='logo'/></Link>
      </div>

      <div className='right'>
        <div className='topLinks'>
          <Link className='link'  to={"/cart"}><ShoppingCartOutlined/> {t("Cart")}</Link>
          <Link className='link'  to={"/register"}>{t("Register")}</Link>
          <Link className='link2' to={"login"}>{t("Login")}</Link>
          <Translate/>
        </div>

        <div className='bottomLinks'>
          <NavigationLinks className={"links"}/>
        </div>
      </div>

      <div className='MenuNav '>
        <div className='viewCart'>
          <Link to={"/cart"}> <div><ShoppingCartOutlined/></div></Link>
        </div>

        <WithDrawerNav
          className='WithDrawer'
          title='Nav Links'
          button={<Button icon={<MenuOutlined />} type='primary' />}
          >
          <div className='fakeNav'>
            <p>{t("Nav links")}</p>
            <div className='left'>
              <Link className="Link" to={"/home"}><img src='/logo/Logo.png' alt='Logo' className='logo'/></Link>
            </div>
          </div>

          <Divider className='divider'/>

          <div className='topLinks2'>
            <div>
              {/* <Link className='link'  to={"/cart"}><ShoppingCartOutlined/> {t("Cart")}</Link> */}
              <Link className='link'  to={"/register"}>{t("Register")}</Link>
              <Link className='link2' to={"login"}>{t("Login")}</Link>
            </div>
            <Translate/>
          </div>

          <Divider className='divider'/>
          
          <NavigationLinks className="DrawerLinks" />
        </WithDrawerNav>
        
      </div>

    </div>
  )
}

export default Header