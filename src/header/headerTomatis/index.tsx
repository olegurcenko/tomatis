import React, { useState } from "react";
import data from '../../info.json';
import inst_img from '../../media/imagesToUse/inst.webp';
import tg_img from '../../media/imagesToUse/tg.webp';
import vk_img from '../../media/imagesToUse/vk.png';
import fb_img from '../../media/imagesToUse/fb.webp'
import logo from '../../media/imagesToUse/logo.png'
import { Link } from "react-router-dom";
import styles from './styles/header.module.scss'
import { Menu } from "../../menu/menuTomatis/index";
import { Button } from "@mui/material";
import colors from '../../media/_colors.module.scss'
import { MailSender } from "../../mailSender/MailSender";
export const HeaderTomatis: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [isMailSendOpen, setMailSendOpen] = useState<boolean>(false);
    const [isMenuClosing, setMenuClosing] = useState<boolean>(false);
    const [menuCloserBtn, setMenuCloserBtn] = useState<boolean>(true);

    const openMenu = () => {
        setMenuOpen(true);
		setMenuCloserBtn(false);
    }

    const closeMenu = () => {
		setMenuClosing(true); // Set closing state to true
		setMenuCloserBtn(true)
		setTimeout(() => {
			setMenuOpen(false);
			setMenuClosing(false); // Reset closing state after animation duration
		}, 800);
	};

    const networksPhotoTemp: { [key: string]: string } = {
        instagram: inst_img,
        telegram: tg_img,
        vk: vk_img,
        facebook: fb_img
    };

    return (
        <section className={styles.header}>
            <ul className={styles.headerTop}>
                <li className={styles.adress}>{data.adress}</li>
                <li className={styles.workingHours}>{data.working_hours}</li>
                <li className={styles.number}>{data.phone_number}</li>
                <li className={styles.links}>
                    {data.links.map((link) => (
                        link.status ?
                        <a className={styles.link} key={link.url} href={link.url}>
                            <img src={networksPhotoTemp[link.web_name]} alt="" />
                        </a>
                        :
                        <React.Fragment key={link.url} />
                    ))}
                </li>
            </ul>
            <ul className={styles.headerBottom}>
                <li className={styles.logo}>
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </li>
                <li className={styles.services}>
                    <Link className={styles.service} to={'/tomatis/staff'}>
                        <Button sx={{color: colors.colorGrey}}>
                            Специалисты
                            
                        </Button>
                    </Link>
                    <Link className={styles.service} to={'/tomatis/about_us'}>
                        <Button sx={{color: colors.colorGrey}}>
                            О нас
                        </Button>
                    </Link>
                    <Link className={styles.service} to={'/tomatis/reviews'}>
                        <Button sx={{color: colors.colorGrey}}>
                            Отзывы
                        </Button>
                    </Link>
                    <Link className={styles.service} to={'/tomatis/price'}>
                        <Button sx={{color: colors.colorGrey}}>
                            Цены
                        </Button>
                    </Link>
                    <Link className={styles.service} to={'/tomatis/contacts'}>
                        <Button sx={{color: colors.colorGrey}}>
                            Контакты
                        </Button>
                    </Link>
                </li>
                <li className={styles.buttonForContact}>
                    <Button onClick={() => setMailSendOpen(true)}>Записаться</Button>
                </li>
                <li className={styles.menuBtn}>
                    <input onClick={isMenuOpen ? closeMenu : openMenu} checked={!menuCloserBtn} type="checkbox" role="button" aria-label="Display the menu" className={styles.menu}/>
                </li>
            </ul>
				{isMenuOpen && <Menu isClosing={isMenuClosing} onClose={closeMenu} />}
                {isMailSendOpen && <MailSender closerFunc={() => setMailSendOpen(false)} />}
        </section>
    )
}
