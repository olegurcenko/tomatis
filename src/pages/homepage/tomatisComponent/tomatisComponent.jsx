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
} from "@mui/material";
import HearingIcon from "@mui/icons-material/Hearing";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PsychologyIcon from "@mui/icons-material/Psychology";

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
          {/* Title Section */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                backgroundColor: "#007f6a",
                margin: "0 auto",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              <HearingIcon sx={{ fontSize: 40, color: "#fff" }} />
            </Avatar>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mt: 2,
                mb: 1,
                color: "#007f6a",
              }}
            >
              ТОМАТИС
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                fontStyle: "italic",
              }}
            >
              СЛУХОВАЯ СТИМУЛЯЦИЯ МОЗГА по методу А. ТОМАТИСа
            </Typography>
          </Box>

          {/* Introduction */}
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "justify", lineHeight: 1.8 }}
          >
            Это интенсивная тренировка неврологических и физиологических систем
            человека путем прослушивания музыки и звуков, отфильтрованных с
            помощью специального оборудования.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "justify", lineHeight: 1.8 }}
          >
            В процессе тренировки оптимизируется передача слухового сообщения
            внутренним ухом в мозг, что позволяет{" "}
            <strong>ВОССТАНОВИТЬ</strong> дефицитные функции мозговых структур и{" "}
            <strong>СОЗДАТЬ</strong> новые нейронные связи.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* About Alfred Tomatis */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <PsychologyIcon
              sx={{ fontSize: 40, color: "#007f6a", mr: 2, boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#007f6a",
              }}
            >
              Альфред ТОМАТИС (1920 – 2001)
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "justify", lineHeight: 1.8 }}
          >
            Доктор медицины (Парижский факультет), ЛОР, специалист по нарушениям
            слуха и языка. Известный во всем мире как исследователь и терапевт,
            он дал свое имя трем законам, управляющим аудио-вокальной петлей -
            «эффект Томатиса».
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* Phases */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#007f6a",
              mb: 2,
              textAlign: "center",
            }}
          >
            Фазы терапии
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "justify", lineHeight: 1.8 }}
          >
            Эффективность терапии заключается в последовательном прохождении
            основных фаз и этапов терапии.
          </Typography>

          {/* Passive Phase */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "medium",
                mb: 2,
                color: "text.primary",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MusicNoteIcon sx={{ mr: 1, color: "#007f6a" }} />
              Пассивная фаза:
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
                  secondary="А. Томатис использовал термин «психологически не рождённые дети» к детям с отсутствием или нарушением коммуникации. На этом этапе мы используем специальные программы, имитирующие эффект психологического рождения ребенка."
                />
              </ListItem>
            </List>
          </Box>

          {/* Active Phase */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "medium",
                mb: 2,
                color: "text.primary",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PsychologyIcon sx={{ mr: 1, color: "#007f6a" }} />
              Активная фаза:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="4. Активная лингвистическая фаза (работа с микрофоном)"
                  secondary="Повторение слогов, слов, чтение, пение."
                />
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Modern Technology */}
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", lineHeight: 1.8 }}
          >
            Благодаря современным технологиям тестирования и проведения терапии
            на оригинальном оборудовании и знаниям, полученным в Институте
            Mozart Brain Lab (Бельгия), мы достигаем высоких положительных
            результатов терапии!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};