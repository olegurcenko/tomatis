import React from "react";
import { pagesData } from "../pagesData/pages";
import { Box, Typography } from "@mui/material";
import { CardWrapper } from "../helpers/cardWrapper";
import { colors } from "../../media/colorsModule";

export const Method:React.FC = () => {
	return (
		<section>
			<Typography variant="h3" sx={{marginInline: 'auto', width: 'fit-content', marginTop: '100px', color: colors.color_white}}>Метод</Typography>
			<Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: 1200, width: '90%', marginInline: 'auto'}}>
				{pagesData.slice(0, 4).map((page, index) => (
          			<CardWrapper key={index} {...page} />
        		))}			
			</Box>
			
		</section>
	)
}