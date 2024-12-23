import React, { useState } from "react";
import data from '../../info.json';
import inst_img from '../../media/imagesToUse/inst.webp';
import tg_img from '../../media/imagesToUse/tg.webp';
import vk_img from '../../media/imagesToUse/vk.png';
import fb_img from '../../media/imagesToUse/fb.webp'
import logo from '../../media/imagesToUse/logo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from './media/styles/header.module.scss'
import { Menu } from "../../menu/menuMain";
import { Button } from "@mui/material";
import { ChangeCircle } from "@mui/icons-material";
import { MenuTransitions } from "../../pages/helpers/menuDropdowns";
import { MailSender } from "../../mailSender/MailSender";
export const HeaderMain: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const targetLink = location.pathname === '/tomatis' ? '/' : '/tomatis';
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [isMenuClosing, setMenuClosing] = useState<boolean>(false);
    const [menuCloserBtn, setMenuCloserBtn] = useState<boolean>(true);
    const [isMailSendOpen, setMailSendOpen] = useState<boolean>(false);


    const openMenu = () => {
        setMenuOpen(true);
		setMenuCloserBtn(false);
    }

    const closeMenu = () => {
		setMenuClosing(true);
		setMenuCloserBtn(true)
		setTimeout(() => {
			setMenuOpen(false);
			setMenuClosing(false);
		}, 800);
	};

    const links = [
        {
            main: {
                name: 'Специалисты',
            },
            buttons: [
                {
                    name: 'И.Г.',
                    link: 'staff_IG'
                },
                {
                    name: 'Специалисты',
                    link: 'staff_all'
                },
                {
                    name: 'Общая',
                    link: 'staff_main'
                }
            ]
        },
        {
            main: {
                name: 'Метод А. Томатиса',
            },
            buttons: [
                {
                    name: 'Что такое Томатис терапия?',
                    link: 'what_is_tt'
                },
                {
                    name: 'Кому нужна терапия?',
                    link: 'who_need_tt'
                },
                {
                    name: 'Как проходит терапия?',
                    link: 'how_tt'
                },
                {
                    name: 'Цены',
                    link: 'price_tt'
                },
                {
                    name: 'Вопрос ответ',
                    link: 'qa_tt'
                }
            ]
        },
        {
            main: {
              name: 'Услуги (направления)',
            },
            buttons: [
              {
                name: 'Диагностика нейропсихолога',
                link: 'neuro_diagnostics',
              },
              {
                name: 'Логопедия',
                link: 'logopedia',
              },
              {
                name: 'Нейрокоррекция',
                link: 'neuro_correction',
              },
              {
                name: 'Ава - терапия',
                link: 'aba_therapy',
              },
              {
                name: 'Игровая терапия',
                link: 'play_therapy',
              },
              {
                name: 'Сенсорная интеграция',
                link: 'sensory_integration',
              },
              {
                name: 'Коммуникативные группы',
                link: 'communication_groups',
              },
              {
                name: 'Интенсив',
                link: 'intensive',
              },
            ],
          },
          {
            main: {
              name: 'Цены',
            },
            buttons: [
              {
                name: 'Занятия',
                link: 'prices_sessions',
              },
              {
                name: 'Томатис',
                link: 'prices_tomatis',
              },
            ],
          },
          {
            main: {
              name: 'Отзывы',
            },
            buttons: [
              {
                name: 'Отзывы по Томатису',
                link: 'tomatis_reviews',
              },
            ],
          },
    ]

    const networksPhotoTemp: { [key: string]: string } = {
        instagram: inst_img,
        telegram: tg_img,
        vk: vk_img,
        facebook: fb_img
    };

    return (
        <section className={styles.header}>
            <ul className={styles.headerTop}>
                <li className={styles.adress}>Г. Минск, ул Мележа 5/1<br/>Г. Минск ул. Восточная 133</li>
                <li className={styles.workingHours}>9.00 – 20.00<br/>пн. – вс. (предв. Запись)</li>
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
                    <MenuTransitions linkName={links[0]}/>
                    <MenuTransitions linkName={links[1]}/>
                    <MenuTransitions linkName={links[2]}/>
                    <MenuTransitions linkName={links[3]}/>
                    <MenuTransitions linkName={links[4]}/>
                </li>
                {/*<li className={styles.buttonPortal}>
                    <Button onClick={() => navigate(targetLink)}>
                        <ChangeCircle/>
                    </Button>
                </li>*/}
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
