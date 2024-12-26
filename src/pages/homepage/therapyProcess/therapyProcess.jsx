import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PsychologyIcon from "@mui/icons-material/Psychology";

export const TherapyProcess = () => {
  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "1200px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <CardContent>
          {/* Header */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#007f6a",
              mb: 4,
            }}
          >
            Оригинальный подход Центра «БезГраниц»
          </Typography>

          {/* Reasons */}
          <Typography variant="h6" sx={{ mb: 2, color: "#007f6a" }}>
            Преимущества оригинального подхода:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#007f6a" }} />
              </ListItemIcon>
              <ListItemText primary="Метод требует особо сложного электронного оборудования профессионального стандарта (24 бит, 48 кГц), имеющего многочисленные регулировки и рабочие параметры." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#007f6a" }} />
              </ListItemIcon>
              <ListItemText primary="Терапия должна проводиться в условиях, отличных от повседневной жизни, в специально отведенном для этого месте (в центре)." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#007f6a" }} />
              </ListItemIcon>
              <ListItemText primary="Эффективность терапии зависит от возможности корректировать настройки индивидуальной программы в процессе терапии." />
            </ListItem>
          </List>

          {/* Process */}
          <Typography variant="h6" sx={{ mt: 4, mb: 2, color: "#007f6a" }}>
            Процесс терапии:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <AssignmentTurnedInIcon sx={{ color: "#007f6a" }} />
              </ListItemIcon>
              <ListItemText
                primary="Первая встреча (консультация)"
                secondary="Направлена на диагностику особенностей развития человека, определение целей терапии, объяснение подхода и ответы на возникающие вопросы."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AssignmentTurnedInIcon sx={{ color: "#007f6a" }} />
              </ListItemIcon>
              <ListItemText
                primary="Тест-прослушивание"
                secondary="При возможности проводится тест, предоставляющий информацию о языковой обработке, моторике, поведении, аналитическом слушании, концентрации, памяти и состоянии мотивации."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PsychologyIcon sx={{ color: "#007f6a" }} />
              </ListItemIcon>
              <ListItemText
                primary="Индивидуальный подход"
                secondary="При невозможности тестирования дети проходят нейропсихологическую диагностику, метод наблюдения, анкетирование и видеомоделинг."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};