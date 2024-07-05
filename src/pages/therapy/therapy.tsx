/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { CardWrapper } from "../helpers/cardWrapper";
import { pagesData } from "../pagesData/pages";
import { Box, Typography } from "@mui/material";
import { colors } from "../../media/colorsModule";

export const Therapy:React.FC = () => {
	return (
		<section>
			<Typography variant="h3" sx={{marginInline: 'auto', width: 'fit-content', marginTop: '100px', color: colors.color_white}}>Терария</Typography>
			<Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: 1200, width: '90%', marginInline: 'auto'}}>
				{pagesData.slice(4, ).map((page, index) => <CardWrapper key={index} {...page} />)}
			</Box>
			
		</section>
	)
}