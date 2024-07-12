import React from "react";
import { pagesData } from "../pagesData/pages";
import { Box, Typography } from "@mui/material";
import { CardWrapper } from "../helpers/cardWrapper";
import { colors } from "../../media/colorsModule";
import { TextEditor } from "../helpers/textEditor";

const additMethods = 'В Атлантисе мы знаем, что слуховая стимуляция мозга может дать большой эффект, если мы выполняем определенную программу, дополненную дополнительными методами. Стимуляция мозга остается основой, с помощью которой мы создаем новые связи или восстанавливаем утраченные связи. Но чтобы дети и взрослые действительно достигли предела своих возможностей, мы добавляем всевозможные дополнительные методы лечения. Сочетание обучения слушанию приведет к изменениям быстрее и эффективнее. Более того, все эти дополнительные методы лечения бесплатны во время сеансов прослушивания.'

export const AdditionalMethods:React.FC = () => {
	return (
		<section style={{backgroundColor: colors.color_3, maxWidth: '1200px', marginInline: 'auto', width: '90%'}}>
			<Typography variant="h3" sx={{marginInline: 'auto', width: 'fit-content', position: 'relative', top: {xs: '100px', lg: '200px'}, marginBottom: {xs: '50px', lg: '80px'}, color: colors.color_grey}}>Дополнительные методы</Typography>
			<Box sx={{marginInline: 'auto', width: 'fit-content', position: 'relative', top: {xs: '100px', lg: '200px'}, marginBottom: {xs: '50px', lg: '80px'}, color: colors.color_grey}}>
				<TextEditor content={additMethods}/>
			</Box>
			<Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: 1200, width: '90%', marginInline: 'auto', position: 'relative', top: {xs: '80px', lg: '160px'}, paddingBottom: {xs: '100px', lg: '160px'}}}>
				{pagesData.slice(11, 17).map((page, index) => (
          			<CardWrapper key={index} {...page} />
        		))}
			</Box>
			
		</section>
	)
}