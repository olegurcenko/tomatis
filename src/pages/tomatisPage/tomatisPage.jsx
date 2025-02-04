import { Box } from "@mui/material";
import { TomatisComponent } from "../homepage/tomatisComponent/tomatisComponent";
import { TomatisEffectiveness } from "../homepage/tomatisEffectiveness/tomatisEffectiveness";
import { TherapyProcess } from "../homepage/therapyProcess/therapyProcess";
import { TherapyDetails } from "../homepage/therapyDetails/therapyDetails";

export const TomatisPage = () => {
  return (
    <Box sx={{ maxWidth: '1200px', marginInline: 'auto', width: '90%', position: 'relative', top: {xs: '50px', lg: '50px'}, marginBottom: {xs: '90px', lg: '170px'}, paddingBottom: '20px'}}>
      <TomatisComponent />
      <TomatisEffectiveness />
      <TherapyProcess />
      <TherapyDetails />
    </Box>
  );
};
