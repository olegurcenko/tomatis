/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { CardWrapper } from "../helpers/cardWrapper";
import { pagesData } from "../pagesData/pages";
import { Box, Typography } from "@mui/material";

export const Therapy:React.FC = () => {
	return (
		<section>
			<Typography variant="h3" sx={{marginInline: 'auto', width: 'fit-content', marginTop: '100px'}}>Терария</Typography>
			<Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: 1200, width: '90%', marginInline: 'auto'}}>
				{pagesData.slice(4, ).map((page, index) => <CardWrapper key={index} {...page} />)}
			</Box>
			
		</section>
	)
}