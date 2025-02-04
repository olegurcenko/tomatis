import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import InfoIcon from "@mui/icons-material/Info";
import { MailSender } from "../../../mailSender/MailSender";
import { colors } from "../../../media/colorsModule";

export const TherapyDetails = () => {
    const [isMailSendOpen, setMailSendOpen] = useState(false);
  
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
            Индивидуальная Программа Терапии
          </Typography>

          {/* Courses Section */}
          <Grid container spacing={4}>
            {/* Course 1 */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#007f6a", mb: 2 }}
              >
                1 Курс
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon sx={{ color: "#007f6a" }} />
                  </ListItemIcon>
                  <ListItemText primary="12 дней прослушивания по 4,5 часа в день" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon sx={{ color: "#007f6a" }} />
                  </ListItemIcon>
                  <ListItemText primary="Индивидуальный подход к написанию программы" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon sx={{ color: "#007f6a" }} />
                  </ListItemIcon>
                  <ListItemText primary="Запись голоса матери (54 часа)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon sx={{ color: "#007f6a" }} />
                  </ListItemIcon>
                  <ListItemText primary="Моторная стимуляция костными вибраторами" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon sx={{ color: "#007f6a" }} />
                  </ListItemIcon>
                  <ListItemText primary="3 занятия на гипотренажере JOBA" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon sx={{ color: "#007f6a" }} />
                  </ListItemIcon>
                  <ListItemText primary="3 занятия на двигательном тренажере" />
                </ListItem>
              </List>
            </Grid>

            {/* Courses 2, 3, 4 */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#007f6a", mb: 2 }}
              >
                2, 3, 4 Курс
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon sx={{ color: "#007f6a" }} />
                  </ListItemIcon>
                  <ListItemText primary="6-7 дней прослушивания по 4,5 часа в день" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon sx={{ color: "#007f6a" }} />
                  </ListItemIcon>
                  <ListItemText primary="Индивидуально написанная программа" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon sx={{ color: "#007f6a" }} />
                  </ListItemIcon>
                  <ListItemText primary="27 часов прослушивания" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon sx={{ color: "#007f6a" }} />
                  </ListItemIcon>
                  <ListItemText primary="Моторная стимуляция костными вибраторами" />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          {/* Schedule Section */}
          <Typography
            variant="h6"
            sx={{
              mt: 4,
              fontWeight: "bold",
              color: "#007f6a",
              mb: 2,
              textAlign: "center",
            }}
          >
            Расписание Смен
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    1 Смена
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    2 Смена
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">8:30-10:00</TableCell>
                  <TableCell align="center">10:00-11:30</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">11:30-13:00</TableCell>
                  <TableCell align="center">13:00-14:30</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">14:30-16:00</TableCell>
                  <TableCell align="center">16:00-17:30</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Additional Details */}
          <Divider sx={{ my: 4 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#007f6a", mb: 2 }}>
            Дополнительная Информация
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Перерывы между курсами прослушивания являются частью терапии и составляют 5-8 недель.
            Они важны для устойчивой интеграции полученного результата.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Дальнейшие курсы прослушивания определяются индивидуальными особенностями и потребностями человека.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Первым этапом прохождения терапии является <strong>обязательная консультация</strong> и тест-прослушивание ведущим
            специалистом Центра, томатис-терапевтом Николаевой Ириной Григорьевной. Длительность - 90 минут,
            стоимость - <strong>160 белорусских рублей</strong>.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            При невозможности проведения тест-прослушивания для ребёнка проводится только консультация нейропсихолога
            Николаевой Ириной Григорьевной длительностью 60 минут и стоимостью <strong>110 белорусских рублей</strong>.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Стоимость прослушивания:
            <ul>
              <li>
                <strong>I курс (54 часа)</strong> - <strong>2160 белорусских рублей</strong>.
              </li>
              <li>
                <strong>II, III и последующие курсы (27 часов)</strong> - <strong>1080 белорусских рублей</strong>.
              </li>
            </ul>
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center', marginTop :'50px'}}>

          <Button
            onClick={() => setMailSendOpen(true)}
            sx={{
              backgroundColor: colors.color_2,
              color: "white",
              padding: "8px 15px",
              borderRadius: "20px",
              fontSize: "24px",
              "&:hover": {
                backgroundColor: colors.color_2_half,
              },
            }}
            >
            Записаться
          </Button>
            </Box>
          {isMailSendOpen && (
                  <MailSender closerFunc={() => setMailSendOpen(false)} />
                )}
        </CardContent>
      </Card>
    </Box>
  );
};