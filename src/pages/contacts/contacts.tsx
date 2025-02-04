import { Box, Card, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../media/colorsModule";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Contacts:React.FC = () => {
	return (
		<Box sx={{ maxWidth: '1200px', marginInline: 'auto', width: '90%', position: 'relative', top: {xs: '30px', lg: '50px'}, marginBottom: {xs: '110px', lg: '190px'}, paddingBottom: '20px', borderRadius: '25px', paddingTop: '30px'}}>
			<Typography variant="h3" sx={{textAlign: 'center'}}>
				Контакты
			</Typography>
			<List sx={{marginInline: 'auto', display: {xs: 'block', lg: 'flex'}, justifyContent: {xs: 'center', md: 'space-around'}, width: {xs: 'fit-content', md: 600, lg: 900}}}>
				<List sx={{display: {sx: 'block', md: 'flex', lg: 'block'}, marginInline: 'auto'}}>
					<ListItem sx={{color: colors.color_grey}}>
						<PhoneIcon sx={{marginRight: '5px'}} htmlColor={colors.color_2}/>
						<Typography>+375 29 120 32 42</Typography>
					</ListItem>
					<ListItem sx={{color: colors.color_grey}}>
						<MailOutlineIcon sx={{marginRight: '5px'}} htmlColor={colors.color_2}/>
						<Typography>olegurcenko4@gmail.com</Typography>
					</ListItem>
				</List>
				<List sx={{display: {sx: 'block', md: 'flex', lg: 'block'}, marginInline: 'auto'}}>
					<ListItem sx={{color: colors.color_grey}}>
						<AccessTimeIcon sx={{marginRight: '5px'}} htmlColor={colors.color_2}/>
						<Typography>9.00-20.00 пн.-сб.</Typography>
					</ListItem>
					<ListItem sx={{color: colors.color_grey}}>
						<LocationOnIcon sx={{marginRight: '5px'}} htmlColor={colors.color_2}/>
						<Typography>г. Минск, ул. Мележа 5/1</Typography>
					</ListItem>
				</List>
				<List sx={{display: {sx: 'block', md: 'flex', lg: 'block'}, marginInline: 'auto'}}>
					<ListItem>
						<a style={{display: 'flex', textDecoration: 'none', color: colors.color_grey}} href="#">
							<InstagramIcon sx={{marginRight: '5px'}} htmlColor={colors.color_2}/>
							<Typography>Мы в Instagram</Typography>
						</a>
					</ListItem>
					<ListItem>
						<a style={{display: 'flex', textDecoration: 'none', color: colors.color_grey}} href="#">
							<FacebookIcon sx={{marginRight: '5px'}} htmlColor={colors.color_2}/>
							<Typography>Мы в Facebook</Typography>
						</a>
					</ListItem>
				</List>
			</List>
			<Box sx={{display: 'flex', justifyContent: 'center'}}>
				<iframe style={{marginInline: 'auto', maxWidth: 600, width: '80%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.999664648724!2d31.005138376675372!3d52.42480377203634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d4685260b92bff%3A0xd5bcdb66cac9591a!2z0JHQldCXINCT0KDQkNCd0JjQpiDRhtC10L3RgtGAINC00L7RgdGD0LPQsCDQuCDRgNCw0LfQstC40YLQuNGPINGC0LLQvtGA0YfQtdGB0YLQstCw!5e0!3m2!1sru!2scz!4v1721036033911!5m2!1sru!2scz" height="450"></iframe>
			</Box>
		</Box>
	)
}