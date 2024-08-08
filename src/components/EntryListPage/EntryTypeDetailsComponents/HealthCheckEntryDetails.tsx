import { CardContent, CardHeader } from "@mui/material";
import { HealthCheckEntry, HealthCheckRating } from "../../../types";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HealthCheckEntryDetails = ({ entry }: { entry: HealthCheckEntry }) => {
  return (
    <>
      <CardHeader
        title="Routine Health Check"
        subheader={entry.date}
        avatar={<HealthAndSafetyIcon />}
      />
      <CardContent>
        {/*returns red hearts out of 4 for rating and grey ones for the points lost*/}
        {Object.values(HealthCheckRating).map((elem, index) => {
          if (typeof elem === "number") {
            if (elem < 4 - entry.healthCheckRating) {
              return <FavoriteIcon key={index} color="error" />;
            }
            return <FavoriteIcon key={index} color="disabled" />;
          }
          return null;
        })}
      </CardContent>
    </>
  );
};

export default HealthCheckEntryDetails;
