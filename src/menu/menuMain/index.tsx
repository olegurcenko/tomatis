import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles/menu.module.scss';
import inst_img from '../../media/imagesToUse/inst.webp';
import tg_img from '../../media/imagesToUse/tg.webp';
import vk_img from '../../media/imagesToUse/vk.png';
import fb_img from '../../media/imagesToUse/fb.webp';
import data from '../../info.json';
import { colors } from '../../media/colorsModule';

export interface onCloseProps {
  onClose: () => void;
  isClosing: boolean;
}

export const Menu: React.FC<onCloseProps> = ({ isClosing, onClose }) => {
  const networksPhotoTemp: { [key: string]: string } = {
    instagram: inst_img,
    telegram: tg_img,
    vk: vk_img,
    facebook: fb_img,
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const links = [
    {
      main: {
        name: 'Специалисты',
      },
      buttons: [
        {
          name: 'И.Г.',
          link: '/staff_IG',
        },
        {
          name: 'Специалисты',
          link: '/staff_all',
        },
        {
          name: 'Общая',
          link: '/staff_main',
        },
      ],
    },
    {
      main: {
        name: 'Метод А. Томатиса',
      },
      buttons: [
        {
          name: 'Что такое Томатис терапия?',
          link: '/what_is_tt',
        },
        {
          name: 'Кому нужна терапия?',
          link: '/who_need_tt',
        },
        {
          name: 'Как проходит терапия?',
          link: '/how_tt',
        },
        {
          name: 'Цены',
          link: '/price_tt',
        },
        {
          name: 'Вопрос ответ',
          link: '/qa_tt',
        },
      ],
    },
    {
      main: {
        name: 'Услуги (направления)',
      },
      buttons: [
        {
          name: 'Диагностика нейропсихолога',
          link: '/neuro_diagnostics',
        },
        {
          name: 'Логопедия',
          link: '/logopedia',
        },
        {
          name: 'Нейрокоррекция',
          link: '/neuro_correction',
        },
        {
          name: 'Ава - терапия',
          link: '/aba_therapy',
        },
        {
          name: 'Игровая терапия',
          link: '/play_therapy',
        },
        {
          name: 'Сенсорная интеграция',
          link: '/sensory_integration',
        },
        {
          name: 'Коммуникативные группы',
          link: '/communication_groups',
        },
        {
          name: 'Интенсив',
          link: '/intensive',
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
          link: '/prices_sessions',
        },
        {
          name: 'Томатис',
          link: '/prices_tomatis',
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
          link: '/tomatis_reviews',
        },
      ],
    },
  ];

  return (
    <div className={isClosing ? styles.popupClosing : styles.popup}>
      <div className={styles.popupContent}>
        <div className={styles.linkColumn}>
          {links.map((section, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                sx={{ backgroundColor: colors.color_2 }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography sx={{ width: '100%', flexShrink: 0, color: colors.color_white }}>
                  {section.main.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <ul>
                    {section.buttons.map((button, idx) => (
                      <li key={idx}>
                        <Link style={{color: colors.color_grey, textDecoration: 'none', display: 'flex', justifyContent: 'space-between' }} onClick={onClose} to={button.link}>
                          <Typography sx={{marginRight: '20px'}}>{button.name}</Typography>
                          <Typography>{'>'}</Typography>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <section className={styles.links}>
          {data.links.map((link) =>
            link.status ? (
              <a className={styles.link} key={link.url} href={link.url}>
                <img src={networksPhotoTemp[link.web_name]} alt="" />
              </a>
            ) : (
              <React.Fragment key={link.url} />
            )
          )}
        </section>
        <section className={styles.contacts}>
          <p style={{color: colors.color_white}}>г. Минск, ул. Мележа 5/1</p>
          <p style={{color: colors.color_white}}>9.00-20.00 пн.-сб.</p>
          <p style={{color: colors.color_white}}>+375 29 120 32 42</p>
        </section>
      </div>
    </div>
  );
};
