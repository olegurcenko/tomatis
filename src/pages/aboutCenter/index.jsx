import { Box } from "@mui/material"
import { CenterInfo } from "./centerInfo/centerInfo"
import { CarouselReviews } from "../homepage/carouselReviews/carouselReviews"

export const AboutCenter = () => {
	return (
	<Box sx={{ maxWidth: '1200px', marginInline: 'auto', width: '90%', position: 'relative', top: { xs: '50px', lg: '80px' }, marginBottom: { xs: '90px', lg: '170px' }, paddingBottom: '20px' }}>
			<CenterInfo/>
		</Box>
	)
}