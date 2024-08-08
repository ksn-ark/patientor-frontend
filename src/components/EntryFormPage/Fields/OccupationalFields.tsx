import {
  FormControl,
  FormControlLabel,
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
      {showSickLeave && (
        <>
          <TextField
            label="Start date"
            required
            margin="normal"
            value={sickLeave.startDate}
            onChange={(event) =>
              setSickLeave({ ...sickLeave, startDate: event.target.value })
            }
          />
          <TextField
            label="End date"
            required
            margin="normal"
            value={sickLeave.endDate}
            onChange={(event) =>
              setSickLeave({ ...sickLeave, endDate: event.target.value })
            }
          />
        </>
      )}
    </FormControl>
  );
};

export default OccupationalFields;
