import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import patientService from "../../services/patients";
import { Card, CardContent, Container, Typography } from "@mui/material";
import { Diagnosis, Patient } from "../../types";
import EntryDetails from "./EntryDetails";

const PatientDetailsPage = ({ diagnoses }: { diagnoses: Diagnosis[] }) => {
  const id = useParams().id;
  const [patient, setPatient] = useState<Patient | null>();

  useEffect(() => {
    const fetchPatient = async () => {
      if (!id) return;
      try {
        const fetchedObj = await patientService.getById(id);
        setPatient(fetchedObj);
      } catch (error) {
        setPatient(null);
      }
    };
    void fetchPatient();
  }, [id]);

  if (!id) return <h1>Malformatted id in url</h1>;
  if (patient === null) return <h1>404 patient not found</h1>;
  if (!patient) return null;

  return (
    <div>
      <Container>
        <h1>{patient.name}</h1>
        <p>
          gender: {patient.gender} <br />
          ssn: {patient.ssn} <br />
          occupation: {patient.occupation}
        </p>
        <h2>Entries</h2>
        {patient.entries.map((entry) => (
          <Card variant="outlined">
            <EntryDetails key={entry.id} entry={entry} />
            <CardContent>
              <Typography variant="subtitle1">
                <i>{entry.description}</i>
              </Typography>
              <ul>
                {entry.diagnosisCodes?.map((code) => (
                  <li>
                    {code} {diagnoses.find((d) => d.code === code)?.name};
                  </li>
                ))}
              </ul>
              <p> Diagnosed by {entry.specialist} </p>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default PatientDetailsPage;
