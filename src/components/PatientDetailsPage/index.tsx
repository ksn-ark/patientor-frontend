import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import patientService from "../../services/patients";
import { Container } from "@mui/material";
import { Diagnosis, Patient } from "../../types";

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
          <div key={entry.id}>
            <p>
              {entry.date} {entry.description}
            </p>
            <ul>
              {entry.diagnosisCodes?.map((code) => (
                <li>
                  {code} {diagnoses.find((d) => d.code === code)?.name};
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default PatientDetailsPage;
