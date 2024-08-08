import {
  FormControl,
  FormControlLabel,
  Input,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { EntryTypes, SetState, SickLeave } from "../../../types";
import { useState } from "react";

type props = {
  type: EntryTypes;
  employerName: string;
  setEmployerName: SetState<string>;
  sickLeave: SickLeave;
  setSickLeave: SetState<SickLeave>;
};

const OccupationalFields = ({
  type,
  employerName,
  sickLeave,
  setEmployerName,
  setSickLeave,
}: props) => {
  const [showSickLeave, setShowSickLeave] = useState(false);

  if (type !== "OccupationalHealthcare") {
    return null;
  }
  return (
    <FormControl fullWidth>
      <TextField
        required
        label="Employer Name"
        margin="normal"
        value={employerName}
        onChange={(event) => setEmployerName(event.target.value)}
      />

      <FormControlLabel
        control={<Switch onChange={() => setShowSickLeave(!showSickLeave)} />}
        label="Sick Leave"
      />
      {!showSickLeave && (
        <FormControl margin="normal">
          <Typography variant="subtitle1">Start Date:</Typography>
          <Input
            value={sickLeave.startDate}
            required
            margin="dense"
            type="date"
            onChange={(event) =>
              setSickLeave({ ...sickLeave, startDate: event.target.value })
            }
          />

          <Typography variant="subtitle1">End Date:</Typography>
          <Input
            value={sickLeave.endDate}
            required
            margin="dense"
            type="date"
            onChange={(event) =>
              setSickLeave({ ...sickLeave, endDate: event.target.value })
            }
          />
        </FormControl>
      )}
    </FormControl>
  );
};

export default OccupationalFields;
