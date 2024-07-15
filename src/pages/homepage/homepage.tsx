import React from "react";
import { TextEditor } from "../helpers/textEditor";
import { Box, Typography } from "@mui/material";
import { colors } from "../../media/colorsModule";
import image_1 from './media/1.jpg'
import image_2 from './media/2.jpg'
import image_3 from './media/3.jpg'
import image_4 from './media/4.jpg'
import image_5 from './media/5.jpg'
import card_1 from './media/card1.png'
import card_2 from './media/card2.png'
import card_3 from './media/card3.png'
import card_4 from './media/card4.png'
import card_5 from './media/card5.png'
import card_6 from './media/card6.png'
import styles from './media/homepage.module.scss'
import { CardsHomepage } from "../helpers/cardsHomepage";

const textHomepage = [
	'Центр "Без границ" специализируется на инновационном методе лечения неговорящих детей — методе Томатиса. Мы с гордостью помогаем детям на пути к развитию и восстановлению речевых функций, используя передовые технологии и профессиональный подход.',
	'Метод Томатиса основан на звукотерапии и аудиостимуляции, специально разработанных для детей с нарушениями речи. Мы создаем комфортную и стимулирующую обстановку, где каждый ребенок может раскрыть свой потенциал и научиться общаться.',
	`- Первое прослушивание и консультация: Диагностика и планирование индивидуальной программы для вашего ребенка.
		- Аудиотерапия по методу Томатиса: Программы звуковой стимуляции, направленные на развитие речи и коммуникационных навыков.
		- Индивидуальные занятия и групповые классы: Поддержка и развитие каждого ребенка в удобной для него форме.
		- Консультации для родителей: Обучение методикам поддержки и взаимодействия с детьми.`,
	'Мы верим в каждого ребенка и стремимся помочь им достигнуть своих потенциальных возможностей в области речи и коммуникации. В "Без границ" каждый шаг направлен на создание положительного и благоприятного окружения, в котором дети могут расти и процветать.',
	`Хотите узнать больше о наших услугах или записаться на консультацию? Свяжитесь с нами прямо сейчас — мы всегда рады помочь вашему ребенку на пути к успешной коммуникации и самореализации!
	
	Давайте вместе сделаем шаг в будущее без границ для вашего ребенка!`
]

const homeServices = [
	{
		title: 'В чем заключается метод?',
		link: 'method',
		image: card_1,
	},
	{
		title: 'Как проходит терапия?',
		link: 'therapy',
		image: card_2,
	},
	{
		title: 'Голос матери',
		link: 'mothers_voice',
		image: card_3,
	},
	{
		title: 'Оборудование',
		link: 'qeuipment',
		image: card_4,
	},
	{
		title: 'Иностранные языки',
		link: 'page?name=foreign_languages',
		image: card_5,
	},
	{
		title: 'Дополнительные терапии',
		link: 'additional_methods',
		image: card_6,
	},

	
]

export const Homepage:React.FC = () => {
	return (
		<Box sx={{backgroundColor: colors.color_3, maxWidth: '1200px', marginInline: 'auto', width: '90%', position: 'relative', top: {xs: '70px', lg: '150px'}, marginBottom: {xs: '70px', lg: '150px'}, paddingBottom: '20px'}}>
			<Typography sx={{position: 'relative', fontSize: {xs: '36px', md: '48px', lg: '52px'}, top: {xs: '30px', md: '30px'}, marginBottom: {lg: '30px'}, textAlign: 'center'}}>Без границ</Typography>
			<Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: 1200, width: '90%', marginInline: 'auto', position: 'relative', top: {xs: '30px', lg: '0px'}, paddingBottom: {xs: '20px', lg: '40px'}}}>
				{homeServices.slice(0, 6).map((page, index) => (
          			<CardsHomepage key={index} {...page} />
        		))}			
			</Box>
			<Typography variant="h3" className={styles.mainTitle}>
				Добро пожаловать в центр "Без границ"!
			</Typography>
			<Typography variant="h3" className={styles.usualTitle}>
				О нас:
			</Typography>
			<TextEditor content={textHomepage[0]}/>
			<img
      		  style={{ maxHeight: 350, maxWidth: '90%', display: 'block', margin: '0 auto', marginBottom: '40px' }}
      		  src={image_1}
      		  alt={'Веселый ребенок'}
      		/>
			<Typography variant="h3" className={styles.usualTitle}>
				Наш подход:
			</Typography>
			<TextEditor content={textHomepage[1]}/>
			<img
      		  style={{ maxHeight: 350, maxWidth: '90%', display: 'block', margin: '0 auto', marginBottom: '40px' }}
      		  src={image_2}
      		  alt={'Веселый ребенок'}
      		/>
			<Typography variant="h3" className={styles.usualTitle}>
				Наши услуги:
			</Typography>
			<TextEditor content={textHomepage[2]}/>
			<img
      		  style={{ maxHeight: 350, maxWidth: '90%', display: 'block', margin: '0 auto', marginBottom: '40px' }}
      		  src={image_3}
      		  alt={'Веселый ребенок'}
      		/>
			<Typography variant="h3" className={styles.usualTitle}>
				Наша миссия:
			</Typography>
			<TextEditor content={textHomepage[3]}/>
			<img
      		  style={{ maxHeight: 350, maxWidth: '90%', display: 'block', margin: '0 auto', marginBottom: '40px' }}
      		  src={image_4}
      		  alt={'Веселый ребенок'}
      		/>
			<Typography variant="h3" className={styles.usualTitle}>
				Свяжитесь с нами:
			</Typography>
			<TextEditor content={textHomepage[3]}/>
			<img
      		  style={{ maxHeight: 350, maxWidth: '90%', display: 'block', margin: '0 auto'}}
      		  src={image_5}
      		  alt={'Веселый ребенок'}
      		/>
		</Box>
	)
}