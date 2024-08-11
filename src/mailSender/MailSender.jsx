import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, TextField, Typography } from "@mui/material";
import styles from './mailSender.module.scss'
import { colors } from "../media/colorsModule";

export const MailSender = ({closerFunc}) => {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const procedureRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    emailjs.init('eMUUVSryYXujrGr69');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_s9uw4kh";
    const templateId = "template_ky3fuks";
    try {
		setLoading(true);
		await emailjs.send(serviceId, templateId, {
		  name: nameRef.current.value,
		  procedure: procedureRef.current.value,
		  phone_number: phoneRef.current.value,
		});
		alert("Email successfully sent. Check your inbox.");
	  } catch (error) {
		console.log(error);
		alert("Failed to send email. Please try again later.");
	  } finally {
		setLoading(false);
	  }
	};
  
	return (
	<Box sx={{backgroundColor: colors.color_2_half, width: '100%', height: '100vh', position: 'absolute', left: '0', top: '0'}} className={styles.mailSenderBg}>
	  <Box component="section" sx={{ padding: '20px', textAlign: 'center', backgroundColor: colors.color_3, height: 500, marginTop: '100px', paddingBlock: '20px', maxWidth: '700px', marginInline: 'auto', borderRadius: '10px' }}>
		<Box sx={{display: 'flex', justifyContent: 'center'}}>
			<Typography variant="h4" gutterBottom>
				Записаться на процедуру
			</Typography>
			<button style={{width: '30px', fontSize: '24px', backgroundColor: colors.color_3, border: 'none', position: 'absolute', right: '5%', top: '60px', borderRadius: '4px'}} onClick={closerFunc}>X</button>
		</Box>
		<form onSubmit={handleSubmit}>
		  <Box className="form_group" sx={{ marginBottom: '20px' }}>
			<TextField
			  inputRef={nameRef}
			  label="Имя"
			  placeholder="Введите ваше имя"
			  fullWidth
			  required
			  />
		  </Box>
		  <Box className="form_group" sx={{ marginBottom: '20px' }}>
			<TextField
			  inputRef={procedureRef}
			  label="Процедура"
			  placeholder="Введите название процедуры"
			  fullWidth
			  required
			  />
		  </Box>
		  <Box className="form_group" sx={{ marginBottom: '20px' }}>
			<TextField
			  inputRef={phoneRef}
			  label="Номер телефона"
			  placeholder="Введите ваш номер телефона"
			  fullWidth
			  required
			  />
		  </Box>
		  <Button
		  	sx={{marginTop: '120px'}}
			type="submit"
			variant="contained"
			color="primary"
			disabled={loading}
			>
			{loading ? "Отправка..." : "Записаться"}
		  </Button>
		</form>
	  </Box>
	</Box>
	);
  };