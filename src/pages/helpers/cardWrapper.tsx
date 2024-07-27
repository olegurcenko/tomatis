import { CardActionArea, CardMedia, CardContent, Typography, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CardInterface } from "./cardsData";
import { colors } from "../../media/colorsModule";
import styles from './cardStyles.module.scss'

export const CardWrapper:React.FC<CardInterface> = ({image, title, text, link}) => {
	return (
		<Link className={styles.link} to={`/page?name=${link}`}>
			<Card sx={{ width: 350, marginBlock: '20px' }}>
    	  		<CardActionArea>
    	    		<CardMedia
    	    		  component="img"
    	    		  height="250"
    	    		  image={image}
    	    		  alt={title}
					  />
    	    		<CardContent sx={{ backgroundColor: colors.color_2_half }}>
    	      			<Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center', fontSize: 16, textDecoration: 'none'}}>
							{title}
    	      			</Typography>
    	      			<Typography variant="h6" color="text.secondary" sx={{marginInline: 'auto', fontSize: 14, textDecoration: 'none'}}>
							{text.slice(0, 100)+'...'}
    	      			</Typography>
    	    		</CardContent>
    	  		</CardActionArea>
    		</Card>
		</Link>
	)
}