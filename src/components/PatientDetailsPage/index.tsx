import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import patientService from "../../services/patients";
import { Container } from "@mui/material";
import { Patient } from "../../types";

const PatientDetailsPage = () => {
  const id = useParams().id;
  const [patient, setPatient] = useState<Patient | null>();

  const fetchPatient = async () => {
    if (!id) return;
    try {
      const fetchedObj = await patientService.getById(id);
      setPatient(fetchedObj);
    } catch (error) {
      setPatient(null);
    }
  };
  fetchPatient();

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
      </Container>
    </div>
  );
};

export default PatientDetailsPage;
