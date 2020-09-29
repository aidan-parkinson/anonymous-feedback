import * as fs from 'fs';
import React, { useState } from 'react';
import Form from "./form";

// const getCert = () => {
//   try {
//     var caFile = fs.readFileSync('/etc/ssl/certs/learning-iot-ca.crt');
//   }
//   catch(e) {
//     render() {
//       return (
//         <div>test</div>
//       )}
//     }
//   }

const FormWrapper = () => {
  const [caFile, setCaFile] = useState(null);

  useEffect (() => {
    const ca = null;

    try {
      ca = fs.readFileSync('/etc/ssl/certs/learning-iot-ca.crt');
    }
    catch(e) {
    }

    if (ca) {
      setCaFile(ca);
    }
  }, [])
  // const caFile = fs.readFileSync('/etc/ssl/certs/learning-iot-ca.crt');

  console.log(caFile);

if (!caFile) {
  return(<div>loading</div>)
}

return (
  <Form caFile={caFile}/>
  )
}

export default FormWrapper;
