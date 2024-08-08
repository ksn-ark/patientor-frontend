import { useState } from "react";

import { Button, CardContent } from "@mui/material";

import {
  Discharge,
  EntryTypes,
  HealthCheckRating,
  NewBaseEntry,
  NewEntry,
  SickLeave,
} from "../../types";
import { assertNever } from "../../utils";

import TypeSelectField from "./Fields/TypeSelectField";
import BaseEntryFields from "./Fields/BaseEntryFields";
import HospitalFields from "./Fields/HospitalFields";
import HealthCheckFields from "./Fields/HealthCheckFields";
import OccupationalFields from "./Fields/OccupationalFields";

type props = {
  submitEntry: (newEntry: NewEntry) => void;
};

const EntryForm = ({ submitEntry }: props) => {
  const [baseEntry, setBaseEntry] = useState<NewBaseEntry>({
    description: "",
    date: "",
    specialist: "",
  });
  const [discharge, setDischarge] = useState<Discharge>({
    date: "",
    criteria: "",
  });
  const [sickLeave, setSickLeave] = useState<SickLeave>({
    startDate: "",
    endDate: "",
  });

  const [employerName, setEmployerName] = useState("");
  const [healthCheckRating, setHealthCheckRating] =
    useState<HealthCheckRating>(0);

  const [type, setType] = useState<EntryTypes>("Hospital");

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    submitEntry(toNewEntry(baseEntry));
  };

  const toNewEntry = (newBaseEntry: NewBaseEntry): NewEntry => {
    switch (type) {
      case "Hospital":
        return { ...newBaseEntry, type, discharge };
      case "OccupationalHealthcare":
        return { type, sickLeave, employerName, ...newBaseEntry };
      case "HealthCheck":
        return { type, healthCheckRating, ...newBaseEntry };
      default:
        return assertNever(type);
    }
  };

  return (
    <CardContent component="form" onSubmit={handleSubmit}>
      <BaseEntryFields baseEntry={baseEntry} setBaseEntry={setBaseEntry} />
      <TypeSelectField type={type} setType={setType} />
      <HospitalFields
        type={type}
        discharge={discharge}
        setDischarge={setDischarge}
      />
      <HealthCheckFields
        type={type}
        rating={healthCheckRating}
        setRating={setHealthCheckRating}
      />
      <OccupationalFields
        type={type}
        employerName={employerName}
        setEmployerName={setEmployerName}
        sickLeave={sickLeave}
        setSickLeave={setSickLeave}
      />
      <Button type="submit" variant="contained" color="success" size="large">
        {"Submit"}
      </Button>
    </CardContent>
  );
};

export default EntryForm;
