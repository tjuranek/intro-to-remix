import { json } from '@remix-run/node';
// import type { ActionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getMachines } from '~/models/machine';

export async function loader() {
  const machines = await getMachines();

  return json({ machines });
}

// TODO: define an action for deleting a machine by id

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

                {/* Create a form with a button here! Hint: You can add a name/value to a button! */}
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
