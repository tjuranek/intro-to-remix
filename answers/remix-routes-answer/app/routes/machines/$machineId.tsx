import { useParams } from '@remix-run/react';

export default function MachineId() {
  const { machineId } = useParams();

  return <p>{machineId}</p>;
}
