import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export const DiagnoseConsult = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 4,
          color: "#007f6a",
        }}
      >
        Консультация нейропсихолога
      </Typography>

      {/* Первый блок */}
      <Card sx={{ mb: 4 }}>
        <Slider {...sliderSettings}>
          <CardMedia
            component="img"
            height="100%"
            sx={{ maxHeight: "500px" }}
            image={image1}
            alt="therapy"
          />
          <CardMedia
            component="img"
            height="100%"
            sx={{ maxHeight: "500px" }}
            image={image2}
            alt="therapy"
          />
          <CardMedia
            component="img"
            height="100%"
            sx={{ maxHeight: "500px" }}
            image={image3}
            alt="therapy"
          />
        </Slider>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#007f6a", mb: 2 }}
          >
            Консультация Томатис-терапевта
          </Typography>
          <Container sx={{ py: 4, maxWidth: "800px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4, color: "#007f6a" }}
      >
        Слуховая стимуляция по методу А.Томатиса
      </Typography>

      <Box sx={{ mb: 4, p: 3, borderRadius: 2, bgcolor: "#f0f7f4" }}>
        <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          Метод Томатиса – это интенсивная тренировка неврологических и физиологических
          систем человека с использованием специального оборудования. В основе метода лежит
          прослушивание музыки Моцарта и записанного голоса матери, которые проходят фильтрацию и
          адаптацию для стимуляции слухового восприятия.
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#007f6a", mt: 3, mb: 2 }}
      >
        Диагностика и разработка программы терапии
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.6 }}>
        Наш ведущий специалист центра, <strong>Николаева Ирина Григорьевна</strong>, проведёт комплексную
        <strong> нейропсихологическую диагностику</strong>. Она включает в себя:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">Определение актуального уровня развития ребёнка.</Typography>
        </li>
        <li>
          <Typography variant="body1">Выявление преобладающих функций психики.</Typography>
        </li>
        <li>
          <Typography variant="body1">Тест-прослушивание для детей и взрослых.</Typography>
        </li>
      </ul>
      <Typography variant="body1" sx={{ fontSize: "18px", mt: 2 }}>
        На основе этих данных томатис-терапевт разрабатывает
        <strong> индивидуальную программу слуховой стимуляции</strong>, адаптированную под особенности ребёнка.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#007f6a", mt: 3, mb: 2 }}
      >
        Ограничения и стоимость консультации
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.6 }}>
        Если у ребёнка имеются противопоказания для тест-прослушивания, проводится
        <strong> консультация нейропсихолога</strong> без аудиотеста.
      </Typography>
      <ul>
        <li>
          <Typography variant="body1"><strong>Длительность консультации:</strong> 60-90 минут.</Typography>
        </li>
        <li>
          <Typography variant="body1"><strong>Стоимость:</strong> 110-160 рублей.</Typography>
        </li>
      </ul>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#007f6a", mt: 3, mb: 2 }}
      >
        Повторные консультации
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.6 }}>
        Перед каждым последующим курсом терапии необходимо пройти
        <strong> повторную консультацию</strong>. Она включает:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">Сбор обратной связи о результатах предыдущего курса.</Typography>
        </li>
        <li>
          <Typography variant="body1">Определение ключевых точек для дальнейшей терапии.</Typography>
        </li>
        <li>
          <Typography variant="body1">Коррекцию и сопровождение терапии.</Typography>
        </li>
      </ul>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#007f6a", mt: 3, mb: 2 }}
      >
        Обязательность тест-прослушивания
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.6 }}>
        <strong>Консультация и тест-прослушивание являются обязательными</strong> перед началом терапии. Однако при необходимости данная услуга может быть проведена отдельно с последующей выдачей <strong>индивидуальной программы терапии</strong>.
      </Typography>
      <ul>
        <li>
          <Typography variant="body1"><strong>Длительность:</strong> 60-90 минут.</Typography>
        </li>
        <li>
          <Typography variant="body1"><strong>Стоимость:</strong> 200 рублей.</Typography>
        </li>
      </ul>
    </Container>
        </CardContent>
      </Card>

      {/* Второй блок */}
      <Card>
        <Slider {...sliderSettings}>
          <CardMedia
            component="img"
            height="100%"
            sx={{ maxHeight: "500px" }}
            image={image4}
            alt="therapy"
          />
          <CardMedia
            component="img"
            height="100%"
            sx={{ maxHeight: "500px" }}
            image={image5}
            alt="therapy"
          />
          <CardMedia
            component="img"
            height="100%"
            sx={{ maxHeight: "500px" }}
            image={image6}
            alt="therapy"
          />
        </Slider>
        <CardContent>
        <Container sx={{ py: 4, maxWidth: "800px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4, color: "#007f6a" }}
      >
        Консультация нейропсихолога
      </Typography>

      <Box sx={{ mb: 4, p: 3, borderRadius: 2, bgcolor: "#f0f7f4" }}>
        <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.6 }}>
          Консультация – это встреча с квалифицированным специалистом, который оценивает развитие
          высших психических функций ребёнка: <strong>памяти, внимания, мышления и речи</strong>. 
          Это помогает выявить возможные отклонения в развитии или трудности в обучении.
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#007f6a", mt: 3, mb: 2 }}
      >
        Диагностика и методы исследования
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.6 }}>
        Для определения уровня развития используются передовые методики, включая <strong>ADOS-2</strong>.
        Это один из наиболее эффективных инструментов для оценки психического развития ребёнка и 
        выявления индивидуальных особенностей.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#007f6a", mt: 3, mb: 2 }}
      >
        Ведущий специалист
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.6 }}>
        Консультацию проводит <strong>Николаева Ирина Григорьевна</strong> – основательница центра, 
        <strong>нейропсихолог, томатис-терапевт, коррекционный педагог</strong>, специалист по раннему сопровождению детей.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#007f6a", mt: 3, mb: 2 }}
      >
        Онлайн-консультации
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.6 }}>
        Для иногородних семей или тех, кто испытывает сложности с посещением центра, доступны <strong>онлайн-консультации</strong>. На них можно:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">Обсудить особенности развития ребёнка.</Typography>
        </li>
        <li>
          <Typography variant="body1">Получить рекомендации по взаимодействию и обучению.</Typography>
        </li>
        <li>
          <Typography variant="body1">
            Определить программу интенсивов (<strong>ссылка на курс</strong>).
          </Typography>
        </li>
        <li>
          <Typography variant="body1">Разработать маршрут дальнейшего сопровождения.</Typography>
        </li>
      </ul>
    </Container>
        </CardContent>
      </Card>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007f6a",
            color: "white",
            fontSize: "20px",
            padding: "10px 20px",
          }}
        >
          Записаться
        </Button>
      </Box>
    </Container>
  );
};
