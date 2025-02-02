import { Box } from "@mui/material"
import { RulesComponent } from "./rulesComponent/rulesComponent"

export const CenterRules = () => {
	return (
		<Box sx={{ maxWidth: '1200px', marginInline: 'auto', width: '90%', position: 'relative', top: { xs: '100px', lg: '80px' }, marginBottom: { xs: '90px', lg: '170px' }, paddingBottom: '20px' }}>
			<RulesComponent/>			
		</Box>
	)
}