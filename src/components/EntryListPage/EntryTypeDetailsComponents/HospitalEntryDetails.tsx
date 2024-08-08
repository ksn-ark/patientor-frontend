import { CardContent, CardHeader, Typography } from "@mui/material";
import { HospitalEntry } from "../../../types";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const HospitalEntryDetails = ({ entry }: { entry: HospitalEntry }) => {
  return (
    <>
      <CardHeader
        title="Hospital Healthcare"
        subheader={entry.date}
        avatar={<LocalHospitalIcon />}
      />
      <CardContent>
        <Typography variant="subtitle1">
          Discharged on {entry.discharge.date}
          <p>Notes : {entry.discharge.criteria}</p>
        </Typography>
      </CardContent>
    </>
  );
};

export default HospitalEntryDetails;
