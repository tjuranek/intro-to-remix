// import type { ActionArgs } from '@remix-run/node';
// import { redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';
// import { createMachine } from '~/models/machine';

// TODO: add an action that creates a machine and redirects to the /machines route

export default function CreateMachine() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="bg-white w-96 p-8">
        <Form method="post">
          <div className="my-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Machine Name"
              />
            </div>
          </div>

          <div className="my-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Model
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="model"
                id="model"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Machine Model"
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
