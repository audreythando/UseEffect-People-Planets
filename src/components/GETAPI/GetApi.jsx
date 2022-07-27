import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Divider} from '@chakra-ui/react';
import {  } from '@chakra-ui/react';

function GetApi() {
  const [data, setData] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [fetchedPeople, setFetchedPeople] = useState(false);

  const url = 'https://swapi.dev/api/'

  const getPeople = () => {
    axios.get('https://swapi.dev/api/people')
      .then((resp) => {
        setPeople(resp.data.results)
        console.log(resp)
      }).catch(err => console.log(err))
  }

  const getPlanets = () => {
    axios.get('https://swapi.dev/api/planets')
      .then((resp) => {
        setPlanets(resp.data.results)
        console.log(resp)
      }).catch(err => console.log(err))
  }

  useEffect(() => {
    getPlanets();
    getPeople();
  }, []);

  const setListData = () => {
    if (fetchedPeople) {
      setData(planets);
      setFetchedPeople(false);
    } else {
      setData(people);
      setFetchedPeople(true);
    }
  }


  return (
    <div>
      {
        data.length > 0 ?
          data.map((item) => {
            return (
              <>
                <p key={item.name}>{item.name}</p>
                <Divider />
              </>
            )
          })
          : <p>No data...</p>
      }

      <Button colorScheme='blue' onClick={setListData}>GET {fetchedPeople ? 'PLANETS' : 'PEOPLE'}</Button>
    </div>
  )
}

export default GetApi;