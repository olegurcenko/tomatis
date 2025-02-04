import React, { useState } from "react";
import data from "../../info.json";
import inst_img from "../../media/imagesToUse/inst.webp";
import tg_img from "../../media/imagesToUse/tg.webp";
import vk_img from "../../media/imagesToUse/vk.png";
import fb_img from "../../media/imagesToUse/fb.webp";
import logo from "../../media/imagesToUse/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "../../menu/menuMain";
import {
  Button,
  Box,
  TextField,
  IconButton,
  Drawer,
  Menu as MuiMenu,
  MenuItem,
} from "@mui/material";
import { MenuTransitions } from "../../pages/helpers/menuDropdowns";
import { MailSender } from "../../mailSender/MailSender";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "../../media/colorsModule";

export const HeaderMain = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMailSendOpen, setMailSendOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);

  const networksPhotoTemp = {
    instagram: inst_img,
    telegram: tg_img,
    vk: vk_img,
    facebook: fb_img,
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleMenuClose1 = () => {
    setAnchorEl1(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0px 3px 8px rgba(0,0,0,0.24)",
        zIndex: 20,
      }}
    >
      {/* Верхняя панель с контактами */}
      <Box
        sx={{
          backgroundColor: "#f8f8f8",
          padding: "5px 0",
          fontSize: "14px",
          color: "#333",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <Box>
            <strong>г. Минск</strong> <br /> Урюче, ул. Ложинская 9 <br /> +375
            29 103-60-74
          </Box>
          <Box>
            <strong>ул. Одовскова, 115А</strong> <br /> +375 29 633-60-84
          </Box>
          <Box>
            <strong>Время работы:</strong> 9.00 – 20.00 <br /> пн. – вс. (по
            записи)
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            {data.links.map((link) =>
              link.status ? (
                <a key={link.url} href={link.url}>
                  <img
                    src={networksPhotoTemp[link.web_name]}
                    alt=""
                    style={{ height: "20px" }}
                  />
                </a>
              ) : null
            )}
          </Box>
        </Box>
      </Box>
      {/* Основной хедер */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "auto",
          padding: "10px 0",
          flexWrap: "wrap",
        }}
      >
        {/* Логотип */}
        <Box>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-around",
            width: "60%",
            marginLeft: "10%",
          }}
        >
          <Button
            sx={{ color: colors.color_2 }}
            onClick={() => {
              navigate("/");
            }}
          >
            Главная
          </Button>
          <Button
            sx={{ color: colors.color_2 }}
            aria-controls="services-menu1"
            aria-haspopup="true"
            onClick={handleMenuOpen1}
          >
            О центре
          </Button>
          <MuiMenu
            id="services-menu1"
            anchorEl={anchorEl1}
            open={Boolean(anchorEl1)}
            onClose={handleMenuClose1}
          >
            <MenuItem
              sx={{ color: colors.color_2 }}
              onClick={() => {
                handleMenuClose();
                navigate("/rules");
              }}
            >
              Правила посещения центра
            </MenuItem>
            <MenuItem
              sx={{ color: colors.color_2 }}
              onClick={() => {
                handleMenuClose();
                navigate("/specialists");
              }}
            >
              Специалисты
            </MenuItem>
            <MenuItem
              sx={{ color: colors.color_2 }}
              onClick={() => {
                handleMenuClose();
                navigate("/about-center");
              }}
            >
              Центр
            </MenuItem>
          </MuiMenu>
          <Button onClick={() => {navigate('tomatis_page')}} sx={{ color: colors.color_2 }}>Томатис</Button>
          <Button
            sx={{ color: colors.color_2 }}
            aria-controls="services-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            Услуги
          </Button>
          <MuiMenu
            id="services-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem sx={{ color: colors.color_2 }} onClick={handleMenuClose}>
              Диагностика и консультации
            </MenuItem>
            <MenuItem sx={{ color: colors.color_2 }} onClick={handleMenuClose}>
              Индивидуальные занятия
            </MenuItem>
            <MenuItem sx={{ color: colors.color_2 }} onClick={handleMenuClose}>
              Групповые занятия
            </MenuItem>
            <MenuItem sx={{ color: colors.color_2 }} onClick={handleMenuClose}>
              Интенсивный курс
            </MenuItem>
          </MuiMenu>
          <Button sx={{ color: colors.color_2 }}>Блог</Button>
          <Button onClick={() => {navigate('contacts')}} sx={{ color: colors.color_2 }}>Контакты</Button>
        </Box>
        {/* Группа кнопок для мобильных устройств */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", ml: "auto" }}>
          <Button
            onClick={() => setMailSendOpen(true)}
            sx={{
              backgroundColor: colors.color_2,
              color: "white",
              padding: "8px 15px",
              borderRadius: "20px",
              fontSize: "14px",
              "&:hover": {
                backgroundColor: colors.color_2_half,
              },
            }}
          >
            Записаться
          </Button>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      {/* Мобильное боковое меню */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, padding: 2 }}>
          <Button
            sx={{ width: "100%", justifyContent: "start" }}
            onClick={() => {
              navigate("/");
              setDrawerOpen(false);
            }}
          >
            Главная
          </Button>
          <Button
            sx={{ width: "100%", justifyContent: "start" }}
            onClick={handleMenuOpen1}
          >
            О центре
          </Button>
          <MuiMenu
            id="services-menu1"
            anchorEl={anchorEl1}
            open={Boolean(anchorEl1)}
            onClose={handleMenuClose1}
          >
            <MenuItem
              sx={{ color: colors.color_2 }}
              onClick={() => {
                handleMenuClose1();
                navigate("/rules");
                setDrawerOpen(false);
              }}
            >
              Правила посещения центра
            </MenuItem>
            <MenuItem
              sx={{ color: colors.color_2 }}
              onClick={() => {
                handleMenuClose1();
                navigate("/specialists");
                setDrawerOpen(false);
              }}
            >
              Специалисты
            </MenuItem>
            <MenuItem
              sx={{ color: colors.color_2 }}
              onClick={() => {
                handleMenuClose1();
                navigate("/about-center");
                setDrawerOpen(false);
              }}
            >
              Центр
            </MenuItem>
          </MuiMenu>
          <Button onClick={() => {navigate('tomatis_page')}} sx={{ width: "100%", justifyContent: "start" }}>
            Томатис
          </Button>
          <Button
            sx={{ width: "100%", justifyContent: "start" }}
            onClick={handleMenuOpen}
          >
            Услуги
          </Button>
          <MuiMenu
            id="services-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              sx={{ color: colors.color_2 }}
              onClick={() => {
                handleMenuClose();
                navigate("/services/diagnostics");
                setDrawerOpen(false);
              }}
            >
              Диагностика и консультации
            </MenuItem>
            <MenuItem
              sx={{ color: colors.color_2 }}
              onClick={() => {
                handleMenuClose();
                navigate("/services/individual");
                setDrawerOpen(false);
              }}
            >
              Индивидуальные занятия
            </MenuItem>
            <MenuItem
              sx={{ color: colors.color_2 }}
              onClick={() => {
                handleMenuClose();
                navigate("/services/group");
                setDrawerOpen(false);
              }}
            >
              Групповые занятия
            </MenuItem>
            <MenuItem
              sx={{ color: colors.color_2 }}
              onClick={() => {
                handleMenuClose();
                navigate("/services/intensive");
                setDrawerOpen(false);
              }}
            >
              Интенсивный курс
            </MenuItem>
          </MuiMenu>
          <Button
            sx={{ width: "100%", justifyContent: "start" }}
            onClick={() => {
              navigate("/blog");
              setDrawerOpen(false);
            }}
          >
            Блог
          </Button>
          <Button
            sx={{ width: "100%", justifyContent: "start" }}
            onClick={() => {
              navigate("/contacts");
              setDrawerOpen(false);
            }}
          >
            Контакты
          </Button>
        </Box>
      </Drawer>

      {isMenuOpen && <Menu onClose={() => setMenuOpen(false)} />}
      {isMailSendOpen && (
        <MailSender closerFunc={() => setMailSendOpen(false)} />
      )}
    </Box>
  );
};
