import { useEffect, useState } from 'react';
import { Admin, Tutorial, Simulation } from '../types/types';
import { getAdmins, getSimulations, getTutorials } from '../ApiCallls/apiCalls';

export const useFetch = () => {
  const [simulationsData, setSimulationsData] = useState<string[]>([]);
  const [tutorialsData, setTutorialsData] = useState<string[]>([]);
  const [adminData, setAdminData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [simulations, tutorials, admins] = await Promise.all([
          getSimulations(),
          getTutorials(),
          getAdmins(),
        ]);

        if (simulations) {
          const simulationNames: string[] = simulations.map(
            (simulation: Simulation) => simulation.simulationName
          );
          setSimulationsData(simulationNames);
        } else {
          console.error('Simulations data is undefined');
        }

        if (tutorials) {
          const tutorialNames: string[] = Object.values(tutorials).map(
            (tutorial: Tutorial) => tutorial.tutorialName
          );
          setTutorialsData(tutorialNames);
        } else {
          console.error('Tutorials data is undefined');
        }

        if (admins) {
          const adminNames: string[] = Object.values(admins).map(
            (admin: Admin) => admin.username
          );
          setAdminData(adminNames);
        } else {
          console.error('Admins data is undefined');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return { simulationsData, tutorialsData, adminData };
};
