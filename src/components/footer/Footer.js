import { Linkedin, Twitter, Facebook, Instagram, Youtube, Whatsap } from './icons';

import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__wrap'>
                <nav className='footer__menu'>
                    <div className='footer__items'>
                        <h3 className='footer__title'>Другое</h3>
                        <ul >
                            <li className='footer__item'><a href="s#">Про Нас</a></li>
                            <li className='footer__item'><a href="s#">Блог</a></li>
                        </ul>
                    </div>
                    <div className='footer__items'>
                        <h3 className='footer__title'>Сотрудничество с нами</h3>
                        <ul >
                            <li className='footer__item' ><a href="s#">Реклама на сайте</a></li>
                            <li className='footer__item'><a href="s#">Партнерская программа</a></li>
                            <li className='footer__item'><a href="s#">Контакты</a></li>
                        </ul>
                    </div>
                    <ul className='footer__social'>
                        <li><a href="s#"> <Twitter /> </a> </li>
                        <li><a href="s#"> <Linkedin /> </a> </li>
                        <li><a href="s#"> <Facebook /> </a> </li>
                        <li><a href="s#"> <Instagram /> </a> </li>
                        <li><a href="s#"> <Youtube /> </a> </li>
                        <li><a href="s#"> <Whatsap /> </a> </li>
                    </ul>
                </nav>

                <div className='footer__policy'>
                    <span className='footer__policy-item' >Privacy Policy </span>
                    <span className='footer__policy-item item'>© 2021  All rights reserved</span>
                    <span className='footer__policy-item'>Terms of Use</span>
                </div>
            </div>
        </footer >
    )
}

export default Footer;