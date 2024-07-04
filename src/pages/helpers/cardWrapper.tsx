import { CardActionArea, CardMedia, CardContent, Typography, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CardInterface } from "./cardsData";

export const CardWrapper:React.FC<CardInterface> = ({image, title, text, link, steps}) => {
	return (
		<Link to={`/page?name=${link}`}>
			<Card sx={{ width: 350, marginBlock: '20px' }}>
    	  		<CardActionArea>
    	    		<CardMedia
    	    		  component="img"
    	    		  height="250"
    	    		  image={image}
    	    		  alt={title}
					  />
    	    		<CardContent>
    	      			<Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center', fontSize: 16}}>
    	        			{title}
    	      			</Typography>
    	      			<Typography variant="body2" color="text.secondary" sx={{marginInline: 'auto', fontSize: 14}}>
							{text.slice(0, 100)+'...'}
    	      			</Typography>
    	    		</CardContent>
    	  		</CardActionArea>
    		</Card>
		</Link>
	)
}