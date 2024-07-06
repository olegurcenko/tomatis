import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../media/colorsModule";

const services = [
	{
	  description: "Процедура (1 процедура) длительностью 30 минут, начиная со 151-й процедуры",
	  price: "6,50 €"
	},
	{
	  description: "30 минут терапии Гигера вне времени терапии",
	  price: "6,50 €"
	},
	{
	  description: "Процедура (1 процедура) длительностью 30 минут",
	  price: "9,50 €"
	},
	{
	  description: "Звуковые упражнения",
	  price: "15,00 €"
	},
	{
	  description: "Ночная терапия (за ночь)",
	  price: "30,00 €"
	},
	{
	  description: "Обсуждение без прослушивания",
	  price: "35,00 €"
	},
	{
	  description: "Последующий тест на прослушивание и консультация",
	  price: "45,00 €"
	},
	{
	  description: "Первое прослушивание и консультация",
	  price: "65,00 €"
	},
	{
	  description: "Запись голоса матери",
	  price: "75,00 €"
	},
	{
	  description: "Картирование мозга с консультацией",
	  price: "195,00 €"
	},
	{
	  description: "Картирование мозга для клиентов других центров, включая обсуждение",
	  price: "225,00 €"
	}
];

export const Prices:React.FC = () => {
	return (
		<Box sx={{maxWidth: 1200, width: '90%', marginInline: 'auto', position: 'relative', top: '-10px'}}>
			<Typography variant="h4" sx={{position: 'relative',top: '10px', backgroundColor: colors.color_2, color: colors.color_white, paddingBlock: 3, textAlign: 'center'}} >
				Цены на услуги
			</Typography>
			<List>
				{services.map((service, index) => (
					<ListItem sx={{display: 'flex', justifyContent: 'space-between', color: (index % 2 === 0 ? colors.color_grey : colors.color_white), backgroundColor: (index % 2 === 0) ? colors.color_3 : colors.color_2}}>
						<ListItemText sx={{maxWidth: '80%'}}>{service.description}</ListItemText>
						<ListItemText sx={{textAlign: 'end', textWrap: 'nowrap'}}>{service.price}</ListItemText>
					</ListItem>
				))}
			</List>
		</Box>
	)
}