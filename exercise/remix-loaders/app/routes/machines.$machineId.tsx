import { json } from '@remix-run/node';
import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
// import { getMachine } from '~/models/machine';

export async function loader({ params }: LoaderArgs) {
  /**
   * Load the machine data here for our parameter.
   *
   * You can throw errors from the loader if the param or machine are null!
   */
}

export default function MachineId() {}
