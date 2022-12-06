import { json } from '@remix-run/node';
import type { ActionArgs } from '@remix-run/node';
import { Form, Link, useLoaderData } from '@remix-run/react';
import { deleteMachine, getMachines } from '~/models/machine';

export async function loader() {
  const machines = await getMachines();

  return json({ machines });
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const machineId = formData.get('machineId');

  if (!machineId) {
    throw new Error('TODO: error handling');
  }

  await deleteMachine(Number(machineId));
  return json({});
}

export default function Machines() {
  const { machines } = useLoaderData<typeof loader>();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="overflow-hidden rounded-md bg-white  shadow">
        <ul className="divide-y divide-gray-200 w-96">
          {machines.map((machine) => (
            <li key={machine.id} className="px-6 py-4 hover:bg-slate-300">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-xl ">{machine.name}</h3>
                  <p>{machine.model}</p>
                </div>

                <Form method="post">
                  <button
                    type="submit"
                    name="machineId"
                    value={machine.id}
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </Form>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Link className="mt-4" to="/machines/create">
        <button
          type="button"
          className="inline-flex items-center w-96 text-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Machine
        </button>
      </Link>
    </div>
  );
}
