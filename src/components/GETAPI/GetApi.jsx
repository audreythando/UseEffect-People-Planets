import React, {useState} from 'react';
import { Button , Divider } from '@chakra-ui/react';
import Planets from '../Planets/Planets';
import People from '../People/People';



function GetApi() {
    const [switched , setSwitched] = useState (false);

    const switchHandler = () => {
      setSwitched(!switched)
    }



  return (
    <div>
      
      <Button colorScheme='blue' onClick={switchHandler}>GET</Button>

      { switched ? <People/> : <Planets/>}
      <Divider />
    </div>
  )
}

export default GetApi;