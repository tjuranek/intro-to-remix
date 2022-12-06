import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getMachines } from '~/models/machine';

export async function loader() {
  const machines = await getMachines();

  return json({ machines });
}

export default function Machines() {
  const { machines } = useLoaderData<typeof loader>();

  return (
    <>
      {machines.map((machine) => (
        <p key={machine.id}>{machine.name}</p>
      ))}
    </>
  );
}
