import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

export const Features = () => {
  const features = [
    {
      title: "Системность",
      description:
        "Мы предлагаем комплексный подход в коррекции развития ребёнка, в котором сочетается единство работы специалистов и ближайшего окружения ребёнка.",
    },
    {
      title: "Профессионализм",
      description:
        "Мы составляем индивидуальный маршрут коррекции, исходя из задач актуального состояния ребёнка, реализуя его с учётом эффективности и надёжности деятельности специалистов.",
    },
    {
      title: "Ответственность",
      description:
        "Мы гибко и динамично меняем программу развития в зависимости от достигнутых ребёнком результатов.",
    },
  ];

  return (
    <Box sx={{ py: 5 }}>
      {/*<Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
      >
        Наши Принципы
      </Typography>*/}
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
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
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "primary.main",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};