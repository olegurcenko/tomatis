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
} from "@mui/material";
import HearingIcon from "@mui/icons-material/Hearing";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BrainImage from "./assets/brain.jpg";
import TomatisImage from "./assets/tomatis.jpg";

export const TomatisComponent = () => {
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
          {/* Header Section */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Avatar sx={{ width: 80, height: 80, bgcolor: "#007f6a", mx: "auto" }}>
              <HearingIcon sx={{ fontSize: 40, color: "#fff" }} />
            </Avatar>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, color: "#007f6a" }}>
              Слуховая стимуляция мозга по методу А. Томатиса
            </Typography>
            <Typography variant="h6" sx={{ color: "text.secondary", fontStyle: "italic" }}>
              Интенсивная тренировка неврологических и физиологических систем
            </Typography>
          </Box>

          {/* Image Section */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img src={TomatisImage} alt="Метод Томатиса" width="60%" style={{ maxWidth: '400px', borderRadius: "12px" }} />
          </Box>

          {/* Introduction */}
          <Typography variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
            Слуховая стимуляция мозга по методу А. Томатиса – это интенсивная тренировка неврологических
            и физиологических систем человека путем прослушивания музыки и звуков, отфильтрованных с помощью
            специального оборудования.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
            В процессе тренировки оптимизируется передача слухового сообщения внутренним ухом в мозг,
            что позволяет восстановить дефицитные функции мозговых структур и создать новые нейронные связи.
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
            Доктор медицины (Парижский факультет), ЛОР, специалист по нарушениям слуха и языка.
            Известный во всем мире как исследователь и терапевт, он дал свое имя трем законам, управляющим
            аудио-вокальной петлей — «эффект Томатиса».
          </Typography>

          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img src={BrainImage} alt="Мозг и слух" width="60%" style={{ maxWidth: '400px', borderRadius: "12px" }} />
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
                  primary="1. Подготовка к пренатальному прослушиванию"
                  secondary="Подготовка уха и мозга к специальной звуковой стимуляции и совместной работе. В программе мы используем НЕфильтрованную музыку Моцарта и НЕфильтрованное григорианское пение."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2. Слушание «как в утробе матери»"
                  secondary="Этап возвращения к первоначальному общению, с целью повышения мотивации к коммуникации. Мы используем «ГОЛОС МАТЕРИ», фильтрованный высокими частотами, дающими мощную психическую энергию мозгу человека."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3. Акустическое рождение"
                  secondary="Используются специальные программы, имитирующие эффект психологического рождения ребенка, который помогает детям с нарушениями коммуникации."
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
                  primary="4. Активная лингвистическая фаза (работа с микрофоном)"
                  secondary="Повторение слогов, слов, чтение, пение с использованием микрофона для активной работы с речью."
                />
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Conclusion */}
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Слуховая стимуляция мозга по методу А. Томатиса – это наиболее комплексная и эффективная
            технология из всех существующих программ слуховой стимуляции. Она становится все более
            популярной в Европе и других развитых странах благодаря своей невероятной эффективности.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Эффективность терапии заключается в последовательном прохождении основных фаз и этапов терапии.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
