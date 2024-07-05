import React from "react";
import { TextEditor } from "./textEditor";
import { useLocation } from "react-router-dom";
import { pagesData } from '../pagesData/pages'
import { colors } from "../../media/colorsModule";
import { Typography } from "@mui/material";
import { StepperCreator } from "./stepper";

export const Page:React.FC = () => {
	const location = useLocation();
	const pageName: string | null = new URLSearchParams(location.search).get('name');
	const card = pagesData.find((card: { link: string | null; }) => card.link === pageName)
	return (
		<section style={{backgroundColor: colors.color_3, paddingBlock: 5, maxWidth: 1200, marginInline: 'auto', position: 'relative', top: '-5px'}}>
			<Typography variant="h3" sx={{textAlign: 'center', marginBlock: '20px'}}>
				{card!.title}
			</Typography>
      		<img
      		  style={{ maxHeight: 350, maxWidth: '90%', display: 'block', margin: '0 auto', marginBottom: '40px' }}
      		  src={card!.image}
      		  alt={card!.title}
      		/>
      		<TextEditor content={card!.text} />
			{card?.steps ? <StepperCreator steps={card.steps}/> : null}
		</section>
	)
}