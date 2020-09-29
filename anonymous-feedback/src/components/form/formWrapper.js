import * as fs from 'fs';
import React, { useState, useEffect } from 'react';
import Form from "./form";

const FormWrapper = () => {
  const [caFile, setCaFile] = useState(null);

  useEffect (() => {
    let ca = null;
    console.log("a");

    try {
      ca = fs.readFileSync('/etc/ssl/certs/learning-iot-ca.crt');
      console.log("b");
    }
    catch(e) {
      console.log("c");
      console.log(e);
    }

    if (ca) {
      setCaFile(ca);
    }
    console.log(caFile);
  }, [])

  if (!caFile) {
    return(
      <div>
        <div className="instruction">
          you do not have the correct certificate saved on your system..<br/>
          to download the latest ca certificate to appropriate folder:<br/>
        </div>
        <div className="bash">
          `cd /etc/ssl/certs`<br/>
          `sudo rm learning-iot-ca.crt`<br/>
          `sudo curl -0 https://learning-iot.aidanparkinson.xyz -o learning-iot-ca.crt`
        </div>
      </div>)
  }

  return (
    <Form caFile={caFile}/>
    )
}

export default FormWrapper;
