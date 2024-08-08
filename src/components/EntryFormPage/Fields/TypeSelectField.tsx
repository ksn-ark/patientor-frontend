import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { EntryTypes, SetState } from "../../../types";

type props = {
  type: EntryTypes;
  setType: SetState<EntryTypes>;
};

const types: EntryTypes[] = [
  "Hospital",
  "HealthCheck",
  "OccupationalHealthcare",
];

const TypeSelectField = ({ type, setType }: props) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="type-select-label">Entry Type</InputLabel>
      <Select
        labelId="type-select-label"
        defaultValue={types[0]}
        value={type}
        label="Entry Type"
        fullWidth={true}
      >
        <MenuItem onClick={() => setType(types[0])} value={types[0]}>
          Hospital
        </MenuItem>
        <MenuItem onClick={() => setType(types[1])} value={types[1]}>
          Health Check
        </MenuItem>
        <MenuItem onClick={() => setType(types[2])} value={types[2]}>
          Occupational Healthcare
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default TypeSelectField;
