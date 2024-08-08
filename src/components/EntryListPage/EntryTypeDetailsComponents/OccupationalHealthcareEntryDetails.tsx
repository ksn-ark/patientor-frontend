import { CardContent, CardHeader, Typography } from "@mui/material";
import { OccupationalHealthcareEntry } from "../../../types";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

const OccupationalHealthcareEntryDetails = ({
  entry,
}: {
  entry: OccupationalHealthcareEntry;
}) => (
  <>
    <CardHeader
      title="Occupational Healthcare"
      subheader={`${entry.employerName} ${entry.date} `}
      avatar={<MedicalInformationIcon />}
    />
    <CardContent>
      <Typography variant="subtitle1">
        {entry.sickLeave
          ? `Sick leave: from ${entry.sickLeave?.startDate} to ${entry.sickLeave?.endDate}`
          : "no sick leave"}
      </Typography>
    </CardContent>
  </>
);

export default OccupationalHealthcareEntryDetails;
