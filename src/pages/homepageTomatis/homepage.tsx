import React from "react";
import { TextEditor } from "../helpers/textEditor";
import { Box, Divider, Typography } from "@mui/material";
import { colors } from "../../media/colorsModule";
import card_1 from './media/card1.png'
import card_2 from './media/card2.png'
import card_3 from './media/card3.png'
import card_4 from './media/card4.png'
import card_5 from './media/card5.png'
import card_6 from './media/card6.png'
import { CardsHomepage } from "../helpers/cardsHomepage";

const homeServices = [
	{
		title: 'В чем заключается метод?',
		link: 'tomatis/method',
		image: card_1,
	},
	{
		title: 'Как проходит терапия?',
		link: 'tomatis/therapy',
		image: card_2,
	},
	{
		title: 'Голос матери',
		link: 'tomatis/mothers_voice',
		image: card_3,
	},
	{
		title: 'Оборудование',
		link: 'tomatis/equipment',
		image: card_4,
	},
	{
		title: 'Иностранные языки',
		link: 'tomatis/page?name=foreign_languages',
		image: card_5,
	},
	{
		title: 'Дополнительные терапии',
		link: 'tomatis/additional_methods',
		image: card_6,
	},

	
]

export const HomepageTomatis:React.FC = () => {
	return (
		<Box sx={{ maxWidth: '1200px', marginInline: 'auto', width: '90%', position: 'relative', top: {xs: '70px', lg: '150px'}, marginBottom: {xs: '70px', lg: '150px'}, paddingBottom: '20px'}}>
			<Typography sx={{position: 'relative', fontSize: {xs: '24px', md: '36px', lg: '36px'}, top: {xs: '30px', md: '30px'}, marginBottom: {lg: '30px'}, textAlign: 'center'}}>Слуховая стимуляция мозга по методу А. Томатиса</Typography>
			<Divider sx={{marginBlock: 3}} />
			<Box component="ul" sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: 2, flexWrap: 'wrap', p: 0, marginBlock: 4 }}>
				{homeServices.slice(0, 6).map((page, index) => (
          			<CardsHomepage key={index} {...page} />
        		))}			
			</Box>
		</Box>
	)
}