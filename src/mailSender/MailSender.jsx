import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "./mailSender.module.scss";
import { colors } from "../media/colorsModule";
import CloseIcon from "@mui/icons-material/Close";

export const MailSender = ({ closerFunc, procedurePlaceholder = "Введите название процедуры" }) => {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const procedureRef = useRef();
  const phoneRef = useRef();
  const formRef = useRef(); // Ref for detecting clicks outside the form

  useEffect(() => {
    emailjs.init("eMUUVSryYXujrGr69");
  }, []);

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      closerFunc(); // Close the mail sender if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
    <Box
      sx={{
        backgroundColor: colors.color_2_half,
        width: "100%",
        height: "100vh",
        position: "fixed",
        left: "0",
        top: "0",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={styles.mailSenderBg}
    >
      <Box
        component="section"
        ref={formRef} // Attach ref to the form container
        sx={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: colors.color_3,
          height: 500,
          paddingBlock: "20px",
          maxWidth: "700px",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Записаться на процедуру
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box className="form_group" sx={{ marginBottom: "20px" }}>
            <TextField
              inputRef={nameRef}
              label="Имя"
              placeholder="Введите ваше имя"
              fullWidth
              required
            />
          </Box>
          <Box className="form_group" sx={{ marginBottom: "20px" }}>
            <TextField
              inputRef={procedureRef}
              label="Процедура"
              placeholder={procedurePlaceholder} // Dynamic placeholder
              fullWidth
              required
            />
          </Box>
          <Box className="form_group" sx={{ marginBottom: "20px" }}>
            <TextField
              inputRef={phoneRef}
              label="Номер телефона"
              placeholder="Введите ваш номер телефона"
              fullWidth
              required
            />
          </Box>
          <Button
            sx={{ marginTop: "20px" }}
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
