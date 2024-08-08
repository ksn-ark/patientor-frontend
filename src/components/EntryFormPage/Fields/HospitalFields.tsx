import { FormControl, Input, TextField, Typography } from "@mui/material";
import { Discharge, EntryTypes, SetState } from "../../../types";

type props = {
  type: EntryTypes;
  discharge: Discharge;
  setDischarge: SetState<Discharge>;
};

const HospitalFields = ({ type, discharge, setDischarge }: props) => {
  if (type !== "Hospital") {
    return null;
  }
  return (
    <FormControl fullWidth>
      <Typography variant="h6">Discharge</Typography>
      <Typography variant="subtitle1">Date: </Typography>
      <Input
        value={discharge.date}
        required
        margin="dense"
        type="date"
        onChange={(event) =>
          setDischarge({ ...discharge, date: event.target.value })
        }
      />
      <TextField
        label="Criteria"
        margin="normal"
        value={discharge.criteria}
        onChange={(event) =>
          setDischarge({ ...discharge, criteria: event.target.value })
        }
      />
    </FormControl>
  );
};

export default HospitalFields;
