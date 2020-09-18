import { useEffect } from 'react';

const useMqtt = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "../browserMqtt.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, "../../browserMqtt.js");
};

export default useMqtt;
