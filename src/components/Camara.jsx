import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

    const Camara = (props) => {
        const [data, setData] = useState('No result');
      
        return (
          <>
          <div style={{marginTop:30}}>
            <QrReader
            delay={300}
            style={{ height: 240, width: 320 }}
          
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }
      
                if (!!error) {
                  console.info(error);
                }
              }}
            
            />
           </div> 
            <p>{data}</p>
          </>
        );
      };
      
export default Camara 
