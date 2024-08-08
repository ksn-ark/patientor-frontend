import { TextField } from "@mui/material";
import { EntryTypes, HealthCheckRating, SetState } from "../../../types";

type props = {
  type: EntryTypes;
  rating: HealthCheckRating;
  setRating: SetState<HealthCheckRating>;
};

const HealthCheckFields = ({ type, rating, setRating }: props) => {
  if (type !== "HealthCheck") {
    return null;
  }
  return (
    <TextField
      required
      label="Rating"
      margin="normal"
      type="number"
      fullWidth
      value={rating}
      onChange={(event) => {
        const rating = event.target.value as unknown as HealthCheckRating;
        setRating(rating);
      }}
    />
  );
};

export default HealthCheckFields;
