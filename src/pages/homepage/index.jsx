import { Box, Button, Card, CardContent, CardMedia, Divider } from "@mui/material";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionMain } from "./accordion/accordionMain";
import { TextEditor } from "../helpers/textEditor";
import { Features } from "./features/features";
import { CenterInfo } from "./centerInfo/centerInfo";
import { RulesComponent } from "./rulesComponent/rulesComponent";
import { TomatisComponent } from "./tomatisComponent/tomatisComponent";
import { TomatisEffectiveness } from "./tomatisEffectiveness/tomatisEffectiveness";
import { TherapyProcess } from "./therapyProcess/therapyProcess";
import { TherapyDetails } from "./therapyDetails/therapyDetails";
import { VideoElem } from "./videoElem/videoElem";


const text = [`Добро пожаловать в Центр развития речи Ирины Николаевой  “Без Границ”– место, где мы поддерживаем детей и их родителей на пути к полноценному развитию и раскрытию уникальных способностей. Наша команда профессионалов включает (??? в себя???)  нейропсихологов, логопедов, АВА-терапевтов, дефектологов, специалистов по игровой терапии, а также миофункциональных логопедов и эксперта по слуховой стимуляции мозга по методу А. Томатиса.

Ведущий специалист нашего центра, нейропсихолог Ирина Николаева, проведёт индивидуальную консультацию для Вас и Вашего ребенка, чтобы разработать персональный маршрут, учитывающий все аспекты развития и цели коррекции. Мы создаём среду, в которой каждый ребёнок может безопасно и с поддержкой продвигаться в развитии вперёд, улучшая речь, внимание, память, мышление,  моторику и коммуникативные навыки.

Независимо от того, на каком этапе развития находится ваш ребёнок, мы предлагаем эффективные методы, ориентированные на улучшение качества жизни Вашего ребёнка и всей семьи.`,]

export const Homepage = () => {
    

    return (
        //<Box sx={{ maxWidth: '1200px', marginInline: 'auto', width: '90%', position: 'relative', top: {xs: '70px', lg: '150px'}, marginBottom: {xs: '70px', lg: '150px'}, paddingBottom: '20px'}}>
        //    <Typography sx={{position: 'relative', fontSize: {xs: '36px', md: '36px', lg: '48px'}, top: {xs: '30px', md: '30px'}, marginBottom: {lg: '30px'}, textAlign: 'center'}}>Наши направления</Typography>
        //    <Divider sx={{marginBlock: 3}} />
        //    <Box component="ul" sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: 2, flexWrap: 'wrap', p: 0, marginBlock: 4 }}>
        //        {[
        //            { img: neurocorrection_img, title: 'Нейрокоррекция', link: 'neurocorrection' },
        //            { img: logopedia_img, title: 'Логопедия', link: 'logopedia' },
        //            { img: logopedical_massage_img, title: 'Логопедический массаж', link: 'logopedical-massage' },
        //            { img: communication_groups_img, title: 'Коммуникативные группы', link: 'communication-groups' },
        //            { img: aba_therapy_img, title: 'АВА-терапия', link: 'aba-therapy' },
        //            { img: play_therapy_img, title: 'Игровая терапия', link: 'play-therapy' },
        //            { img: sensory_integration_img, title: 'Сенсорная интеграция', link: 'sensory-integration' },
        //        ].map((item, index) => (
        //            <Link to={`/definition?service=${item.link}`} key={index} className={styles.link}>
        //                <Button sx={{
        //                    p: 0,
        //                    transition: 'transform .5s',
        //                    '@media screen and (min-width: 1200px)': {
        //                        '&:hover': {
        //                            transform: 'scale(1.05)',
        //                        },
        //                    }
        //                }}>
        //                    <Card className={styles.card} component="li" sx={{ 
        //                        width: 350, 
        //                        height: 400, 
        //                        backgroundColor: colors.color2Half, 
        //                        display: 'flex', 
        //                        flexDirection: 'column', 
        //                        justifyContent: 'center', 
        //                        alignItems: 'center',
        //                    }}>
        //                        <CardMedia
        //                            component="img"
        //                            height="100%"
        //                            image={item.img}
        //                            alt={item.title}
        //                            sx={{ objectFit: 'cover' }}
        //                        />
        //                        <CardContent>
        //                            <Typography
        //                                sx={{
        //                                    color: colors.colorGrey,
        //                                    textDecoration: 'none'
        //                                }}
        //                            >
        //                                {item.title}
        //                            </Typography>
        //                        </CardContent>
        //                    </Card>
        //                </Button>
        //            </Link>
        //        ))}
        //    </Box>
        //</Box>
        <Box sx={{ maxWidth: '1200px', marginInline: 'auto', width: '90%', position: 'relative', top: {xs: '100px', lg: '180px'}, marginBottom: {xs: '90px', lg: '170px'}, paddingBottom: '20px'}}>
            <VideoElem/>
            <AccordionMain/>
            <Divider variant="middle" sx={{marginBlock: '40px'}}/>
            <TextEditor content={text[0]}/>
            <Divider variant="middle" sx={{marginBlock: '40px'}}/>
            <Typography variant="h3" sx={{textAlign: 'center'}}>УНИКАЛЬНОСТЬ ЦЕНТРА</Typography>
            <Features/>
            <CenterInfo/>
            <RulesComponent/>
            <TomatisComponent/>
            <TomatisEffectiveness/>
            <TherapyProcess/>
            <TherapyDetails/>
        </Box>
    )
}
