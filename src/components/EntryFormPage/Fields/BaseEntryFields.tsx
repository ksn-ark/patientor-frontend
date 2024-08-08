import { FormControl, TextField } from "@mui/material";
import { NewBaseEntry, SetState } from "../../../types";

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
      <TextField
        required
        label="Date"
        margin="normal"
        value={baseEntry.date}
        onChange={(event) =>
          setBaseEntry({ ...baseEntry, date: event.target.value })
        }
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
      <TextField
        label="Diagnosis codes"
        margin="normal"
        value={baseEntry.diagnosisCodes?.join(", ")}
        onChange={(event) =>
          setBaseEntry({
            ...baseEntry,
            diagnosisCodes: event.target.value.split(", "),
          })
        }
      />
    </FormControl>
  );
};

export default BaseEntryFields;
