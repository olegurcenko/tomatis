/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { CardWrapper } from "../helpers/cardWrapper";
import { pagesData } from "../pagesData/pages";
import { Box, Typography } from "@mui/material";
import { colors } from "../../media/colorsModule";

export const Therapy:React.FC = () => {
	return (
		<section style={{backgroundColor: colors.color_3, maxWidth: '1200px', marginInline: 'auto', width: '90%'}}>
			<Typography variant="h3" sx={{marginInline: 'auto', width: 'fit-content', position: 'relative', top: {xs: '100px', lg: '200px'}, marginBottom: {xs: '50px', lg: '80px'}, color: colors.color_grey}}>Терария</Typography>
			<Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: 1200, width: '90%', marginInline: 'auto', position: 'relative', top: {xs: '80px', lg: '160px'}, paddingBottom: {xs: '100px', lg: '160px'}}}>
				{pagesData.slice(4, ).map((page, index) => <CardWrapper key={index} {...page} />)}
			</Box>
			
		</section>
	)
}