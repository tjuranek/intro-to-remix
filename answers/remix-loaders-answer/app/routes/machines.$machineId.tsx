import { json } from '@remix-run/node';
import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getMachine } from '~/models/machine';

export async function loader({ params }: LoaderArgs) {
  const { machineId } = params;

  if (!machineId) {
    throw new Error('Machine Id was not a param.');
  }

  const machine = await getMachine(Number(machineId));

  if (!machine) {
    throw new Error('Machine not found.');
  }

  return json({ machine });
}

export default function MachineId() {
  const { machine } = useLoaderData<typeof loader>();

  return <p>{machine.name}</p>;
}
