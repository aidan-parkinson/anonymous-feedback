import * as fs from 'fs';
import React, { useState, useEffect } from 'react';
import Form from "./form";

const FormWrapper = () => {
  const [caFile, setCaFile] = useState(null);

  useEffect (() => {
    let ca = null;

    try {
      ca = fs.readFileSync('/etc/ssl/certs/learning-iot-ca.crt');
    }
    catch(e) {
    }

    if (ca) {
      setCaFile(ca);
    }
  }, [])

  console.log(caFile);

  if (!caFile) {
    return(<div>loading</div>)
  }

  return (
    <Form caFile={caFile}/>
    )
}

export default FormWrapper;
