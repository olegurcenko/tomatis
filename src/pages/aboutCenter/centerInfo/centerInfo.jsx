import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,

} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ContactInfo } from "./contactInfo";


// Create a custom theme with the new primary color
const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 135, 106, 0.7882352941)", // Replace blue with the custom color
    },
  },
});

export const CenterInfo = () => {
  const services = [
    {
      icon: "🧠",
      title: "Нейропсихолог",
      description:
        "Диагностика нарушений психического функционирования, определение зоны ближайшего развития, подбор коррекционных мероприятий.",
    },
    {
      icon: "🗣",
      title: "Специалист PROMT",
      description:
        "Формирование языковой системы у неговорящих детей с помощью методики Новиковой-Иванцовой, основанное на теории моторного научения.",
    },
    {
      icon: "🧩",
      title: "Нейрокоррекция",
      description:
        "Комплекс коррекционных методик для переструктурирования нарушенных функций мозга и создания компенсирующих средств.",
    },
    {
      icon: "🧑‍🏫",
      title: "АВА-терапия",
      description:
        "Диагностика базового уровня навыков и разработка индивидуального плана коррекции поведения.",
    },
    {
      icon: "🧑‍⚕️",
      title: "Логопедия",
      description:
        "Диагностика и коррекция нарушений речевого развития с целью улучшения качества речи.",
    },
    {
      icon: "🎮",
      title: "Игровая терапия",
      description:
        "Применение игровых приёмов для развития социального взаимодействия и когнитивных функций.",
    },
    {
      icon: "🎧",
      title: "Слуховая стимуляция по методу Томатиса",
      description:
        "Интенсивная тренировка неврологических систем путем прослушивания отфильтрованных звуков.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 4 }}>
        {/* Header Section */}
        <Box textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            О ЦЕНТРЕ
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Центр развития речи Ирины Николаевой: комплексный подход для вашего ребенка
          </Typography>
        </Box>

        {/* About Section */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="body1" paragraph>
            Центр развития речи “БезГраниц” Ирины Николаевой был открыт в марте
            2019 года нейропсихологом и томатис-терапевтом Николаевой Ириной
            Григорьевной, объединяя разнопрофильных специалистов для
            систематической и долговременной работы с детьми.
          </Typography>
          <Typography variant="body1" paragraph>
            С 2024 года в Центре проводится терапия слуховой стимуляции по методу
            А. Томатис, которая ускоряет темпы продвижения и помогла большому
            количеству детей в их развитии и социализации.
          </Typography>
        </Box>

        {/* Services Section */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          Услуги
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    {service.icon} {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <ContactInfo/>
    </ThemeProvider>
  );
};