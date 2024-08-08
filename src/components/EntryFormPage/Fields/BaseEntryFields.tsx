import { FormControl, Input, TextField, Typography } from "@mui/material";
import { NewBaseEntry, SetState } from "../../../types";
import DiagnosesField from "./DiagnosesField";

type props = {
  baseEntry: NewBaseEntry;
  setBaseEntry: SetState<NewBaseEntry>;
};

const BaseEntryFields = ({ baseEntry, setBaseEntry }: props) => {
  return (
    <FormControl fullWidth>
      <TextField
        required
        label="Description"
        margin="normal"
        value={baseEntry.description}
        onChange={(event) =>
          setBaseEntry({ ...baseEntry, description: event.target.value })
        }
      />
      <Typography variant="subtitle1">Date:</Typography>
      <Input
        value={baseEntry.date}
        onChange={(event) =>
          setBaseEntry({ ...baseEntry, date: event.target.value })
        }
        margin="dense"
        type="date"
      />
      <TextField
        required
        label="Specialist"
        margin="normal"
        value={baseEntry.specialist}
        onChange={(event) =>
          setBaseEntry({ ...baseEntry, specialist: event.target.value })
        }
      />
      <DiagnosesField baseEntry={baseEntry} setBaseEntry={setBaseEntry} />
    </FormControl>
  );
};

export default BaseEntryFields;
