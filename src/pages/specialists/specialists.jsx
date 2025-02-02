import { Box } from "@mui/material";
import styled from "styled-components";
import alesya from './images/Алеся.jpg'
import anna from './images/Анна.jpg'
import viktoria from './images/Виктория.jpg'
import viktoria2 from './images/Виктория1.jpg'
import ekaterina from './images/Екатерина.jpg'
import marina from './images/Марина.jpg'
import marina2 from './images/Маринаэ.jpg'

const specialists = [
	{ name: "Николаева Ирина Григорьевна", role: "Нейропсихолог, томатис-терапевт, специалист PROMT", img: "irina.jpg" },
	{ name: "Анна", role: "Специалист PROMT", img: anna },
	{ name: "Екатерина", role: "Дефектолог", img: ekaterina },
	{ name: "Дарья", role: "Дефектолог", img: "darya.jpg" },
	{ name: "Алеся", role: "ABA-терапевт", img: alesya },
	{ name: "Наталья", role: "Дефектолог", img: "natalya.jpg" },
	{ name: "Оксана", role: "Логопед", img: "oksana.jpg" },
	{ name: "Елизавета", role: "Логопед, специалист по логопедическому массажу", img: "elizaveta.jpg" },
	{ name: "Марина", role: "Логопед", img: marina },
	{ name: "Надежда", role: "Логопед", img: "nadezhda.jpg" },
	{ name: "Светлана", role: "Миофункциональный специалист", img: "svetlana.jpg" },
	{ name: "Марина", role: "Специалист по нейрокоррекции", img: marina2 },
	{ name: "Виктория", role: "Специалист по нейрокоррекции", img: viktoria },
	{ name: "Виктория", role: "Игровой терапевт", img: viktoria2 },
	{ name: "Екатерина", role: "Игровой терапевт и дефектолог", img: "ekaterina2.jpg" }
  ];
  
  const SpecialistsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 20px;
	max-width: 1200px;
	margin: auto;
	padding: 20px;
  `;
  
  const SpecialistCard = styled.div`
	background: #fff;
	border-radius: 10px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	text-align: center;
	padding: 15px;
  `;
  
  const Image = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
	border-radius: 10px;
  `;
  
  const Name = styled.h3`
	font-size: 18px;
	margin: 10px 0;
  `;
  
  const Role = styled.p`
	font-size: 14px;
	color: #666;
  `;

export const Specialists = () => {
	return (
		<Box sx={{ maxWidth: '1200px', marginInline: 'auto', width: '90%', position: 'relative', top: { xs: '100px', lg: '80px' }, marginBottom: { xs: '90px', lg: '170px' }, paddingBottom: '20px' }}>
			<SpecialistsContainer>
      {specialists.map((specialist, index) => (
        <SpecialistCard key={index}>
          <Image src={specialist.img} alt={specialist.name} />
          <Name>{specialist.name}</Name>
          <Role>{specialist.role}</Role>
        </SpecialistCard>
      ))}
    </SpecialistsContainer>
		</Box>
	)
}




