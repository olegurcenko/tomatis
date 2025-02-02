import { 
	Typography,
	Box, 
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Button, } from "@mui/material"
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import HearingIcon from "@mui/icons-material/Hearing";
import { useState } from "react";
import { MailSender } from "../../../mailSender/MailSender";
export const ContactInfo = () => {

    const [isMailSendOpen, setMailSendOpen] = useState(false);

	return (
		<Box sx={{ mt: 5, p: 4, backgroundColor: "#e3f2fd", borderRadius: "8px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Контактная информация
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ContactPhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Телефон: 8025-974-33-10" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText primary="Инстаграм: @bezgranits_nikolaeva" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Адрес: г. Минск, ул. Мележа 5, корпус 1" />
            </ListItem>
          </List>
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<HearingIcon />}
              onClick={() => setMailSendOpen(true)}
            >
              Записаться на консультацию
            </Button>
          </Box>
          {isMailSendOpen && (
                  <MailSender closerFunc={() => setMailSendOpen(false)} />
                )}
        </Box>
	)
}