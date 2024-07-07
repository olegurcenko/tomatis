import React from "react";
import { TextEditor } from "../helpers/textEditor";
import { Box, Typography } from "@mui/material";
import { colors } from "../../media/colorsModule";
import image_1 from './media/1.jpg'
import image_2 from './media/2.jpg'
import image_3 from './media/3.jpg'
import image_4 from './media/4.jpg'
import image_5 from './media/5.jpg'
import styles from './media/homepage.module.scss'

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

export const Homepage:React.FC = () => {
	return (
		<Box sx={{backgroundColor: colors.color_3, maxWidth: '1200px', marginInline: 'auto', width: '90%', position: 'relative', top: {xs: '70px', lg: '150px'}, marginBottom: {xs: '70px', lg: '150px'}, paddingBottom: '20px'}}>
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