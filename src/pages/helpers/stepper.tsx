import { Box, Button, Paper, Step, StepContent, StepLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import Stepper from '@mui/material/Stepper';
import { StepData } from "./cardsData";

interface StepperCreatorProps {
	steps: StepData[];
}

export const StepperCreator:React.FC<StepperCreatorProps> = ({steps}) => {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1)
	}
	const handlePrev = () => {
		setActiveStep(activeStep - 1)
	}
	const handleReset = () => {
		setActiveStep(0)
	}

	return (
		<Box sx={{maxWidth: '800px', width: '90%', marginInline: 'auto'}}>
			<Stepper activeStep={activeStep} orientation={'vertical'}>
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel
							optional={
								(index === steps.length - 1) ? (
									<Typography variant="caption">Последняя фаза</Typography>
								) : null
							}>
							{step.label}
						</StepLabel>
						<StepContent>
							<Typography>{step.description}</Typography>
							<Box sx={{ mb: 2 }}>
								<section>
									<Button
										variant="contained"
										onClick={handleNext}
										sx={{mt: 1, mr: 1}}
									>
										{index === steps.length - 1 ? 'Конец' : 'Далее'}
									</Button>
									<Button
                  					  	disabled={index === 0}
                  					  	onClick={handlePrev}
                  					  	sx={{ mt: 1, mr: 1 }}
                  					>
                  					  	{'Назад'}
                  					</Button>
								</section>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} sx={{ p: 3 }}>
				<Typography>Все фазы окончены</Typography>
				<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
				  {'Посмотреть сначала'}
				</Button>
			  </Paper>
			)}
		</Box>
	)
}