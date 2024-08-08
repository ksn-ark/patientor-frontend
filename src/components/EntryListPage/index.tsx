import { Entry } from "../../types";
import HospitalEntryDetails from "./EntryTypeDetailsComponents/HospitalEntryDetails";
import OccupationalHealthcareEntryDetails from "./EntryTypeDetailsComponents/OccupationalHealthcareEntryDetails";
import HealthCheckEntryDetails from "./EntryTypeDetailsComponents/HealthCheckEntryDetails";
import { assertNever } from "../../utils";

const EntryDetails = ({ entry }: { entry: Entry }) => {
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntryDetails entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntryDetails entry={entry} />;
    case "HealthCheck":
      return <HealthCheckEntryDetails entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;
