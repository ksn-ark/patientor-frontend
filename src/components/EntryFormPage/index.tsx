import axios from "axios";
import { useState } from "react";

import { Button, Card, CardHeader } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

import { NewEntry, Patient, SetState } from "../../types";
import { isObjKey } from "../../utils";
import patientsService from "../../services/patients";

import EntryForm from "./EntryForm";

type props = {
  id: string;
  patient: Patient;
  setPatient: SetState<Patient | null | undefined>;
};

const EntryFormPage = ({ id, patient, setPatient }: props) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createEntry = async (newEntry: NewEntry) => {
    try {
      const addedEntry = await patientsService.createEntry(id, newEntry);
      setPatient({ ...patient, entries: patient.entries.concat(addedEntry) });
      setShow(false);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e?.response?.data && isObjKey("error", e?.response?.data)) {
          setError(String(e?.response?.data?.error));
        } else {
          console.log("unkonw axios error", e);
          setError("unknown axios error");
        }
      } else {
        console.log("unknown error", e);
        setError("unknown error");
      }
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <Card variant="outlined">
      {error && (
        <CardHeader avatar={<ErrorIcon color="error" />} title={error} />
      )}
      {show && <EntryForm submitEntry={createEntry} />}
      <Button
        variant="contained"
        color={show ? "error" : "primary"}
        onClick={() => setShow(!show)}
        style={{ margin: 15 }}
        size="large"
      >
        {show ? "Cancel" : "Add Entry"}
      </Button>
    </Card>
  );
};

export default EntryFormPage;
