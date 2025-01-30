import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import HearingIcon from "@mui/icons-material/Hearing";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";
import BrainImage from "./assets/brain.jpg";
import TomatisImage from "./assets/tomatis.jpg";

export const TomatisComponent = () => {
  return (
    <Box sx={{ p: 4, minHeight: "100vh" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={10}>
          <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              {/* Header Section */}
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Avatar sx={{ width: 80, height: 80, bgcolor: "#007f6a", mx: "auto" }}>
                  <HearingIcon sx={{ fontSize: 40, color: "#fff" }} />
                </Avatar>
                <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, color: "#007f6a" }}>
                  Метод Томатиса
                </Typography>
                <Typography variant="h6" sx={{ color: "text.secondary", fontStyle: "italic" }}>
                  Слуховая стимуляция мозга по методу А. Томатиса
                </Typography>
              </Box>
              
              {/* Image Section */}
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <img src={TomatisImage} alt="Метод Томатиса" width="60%" style={{ borderRadius: "12px" }} />
              </Box>

              {/* Introduction */}
              <Typography variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
                Метод Томатиса — это уникальная программа слуховой стимуляции, направленная на
                восстановление когнитивных функций через прослушивание специально обработанной музыки.
              </Typography>
              
              <Divider sx={{ my: 4 }} />
              
              {/* About Alfred Tomatis */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <PsychologyIcon sx={{ fontSize: 40, color: "#007f6a", mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#007f6a" }}>
                  Альфред Томатис (1920 – 2001)
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
                Французский врач-оториноларинголог, который разработал инновационный метод аудиотерапии.
                Он открыл взаимосвязь между слуховым восприятием и развитием речи, когнитивных способностей
                и даже эмоционального состояния.
              </Typography>
              
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <img src={BrainImage} alt="Мозг и слух" width="60%" style={{ borderRadius: "12px" }} />
              </Box>

              <Divider sx={{ my: 4 }} />
              
              {/* Phases */}
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007f6a", mb: 2, textAlign: "center" }}>
                Фазы терапии
              </Typography>
              
              {/* Passive Phase */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <MusicNoteIcon sx={{ mr: 1, color: "#007f6a" }} /> Пассивная фаза
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="1. Подготовка уха и мозга"
                      secondary="Прослушивание специально отфильтрированной музыки Моцарта и григорианского пения."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="2. Возвращение к пренатальному восприятию"
                      secondary="Используется голос матери, фильтрованный через специальные частоты."
                    />
                  </ListItem>
                </List>
              </Box>
              
              {/* Active Phase */}
              <Box>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PsychologyIcon sx={{ mr: 1, color: "#007f6a" }} /> Активная фаза
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="3. Работа с микрофоном"
                      secondary="Активное повторение слов, чтение, пение с микрофоном."
                    />
                  </ListItem>
                </List>
              </Box>
              
              <Divider sx={{ my: 4 }} />
              
              {/* Conclusion */}
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Применение метода Томатиса помогает детям и взрослым улучшить концентрацию, развитие речи,
                коммуникативные навыки, устранить тревожность и стресс. Мы используем современное оборудование
                и методики, подтвержденные международными исследованиями!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
