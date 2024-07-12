import { CardActionArea, CardMedia, CardContent, Typography, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { HomepageCardInterface } from "./cardsData";
import { colors } from "../../media/colorsModule";
import styles from './cardStyles.module.scss'

export const CardsHomepage:React.FC<HomepageCardInterface> = ({image, title, link}) => {
	return (
		<Link className={styles.link} to={`/${link}`}>
			<Card sx={{ width: 350, marginBlock: '20px' }}>
    	  		<CardActionArea>
    	    		<CardMedia
    	    		  component="img"
    	    		  height="250"
    	    		  image={image}
    	    		  alt={title}
					  />
    	    		<CardContent sx={{ backgroundColor: colors.color_3 }}>
    	      			<Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center', fontSize: 16, textDecoration: 'none'}}>
							{title}
    	      			</Typography>
    	    		</CardContent>
    	  		</CardActionArea>
    		</Card>
		</Link>
	)
}