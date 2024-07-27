import { CardActionArea, CardMedia, CardContent, Typography, Card, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { HomepageCardInterface } from "./cardsData";
import { colors } from "../../media/colorsModule";
import styles from './cardStyles.module.scss'

export const CardsHomepage:React.FC<HomepageCardInterface> = ({image, title, link}) => {
	return (
		<Link className={styles.link} to={`/${link}`}>
			<Button sx={{
                            p: 0,
                            transition: 'transform .5s',
                            '@media screen and (min-width: 1200px)': {
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }
                        }}>
                            <Card className={styles.card} component="li" sx={{ 
                                width: 350, 
                                height: 400, 
                                backgroundColor: colors.color_2_half, 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                            }}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image={image}
                                    alt={title}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography
                                        sx={{
                                            color: colors.color_grey,
                                            textDecoration: 'none'
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Button>
		</Link>
	)
}