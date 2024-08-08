import { useEffect, useState } from "react";
import { Diagnosis, NewBaseEntry, SetState } from "../../../types";
import diagnosesService from "../../../services/diagnoses";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type props = {
  baseEntry: NewBaseEntry;
  setBaseEntry: SetState<NewBaseEntry>;
};

const DiagnosesField = ({ baseEntry, setBaseEntry }: props) => {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[] | null>(null);

  useEffect(() => {
    const getDiagnoses = async () => {
      const diagnoses = await diagnosesService.getAll();
      setDiagnoses(diagnoses);
    };

    void getDiagnoses();
  }, []);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    const codes = typeof value === "string" ? value.split(",") : value;
    setBaseEntry({ ...baseEntry, diagnosisCodes: codes });
  };

  const getSelected = (code: Diagnosis["code"]) => {
    if (baseEntry.diagnosisCodes?.includes(code)) {
      return { backgroundColor: "#d1d1d1" };
    }
    return {};
  };
  if (!diagnoses) return null;

  return (
    <FormControl margin="normal" fullWidth>
      <InputLabel id="diagnoses-label">Diagnoses</InputLabel>
      <Select
        labelId="diagnoses-label"
        multiple
        value={baseEntry.diagnosisCodes || []}
        onChange={handleChange}
        input={<OutlinedInput label="Diagnoses Codes" />}
      >
        {diagnoses.map((d) => (
          <MenuItem key={d.code} value={d.code} style={getSelected(d.code)}>
            {d.code}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DiagnosesField;
