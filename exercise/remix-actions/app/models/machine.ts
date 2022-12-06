import { prisma } from '~/db.server';

/**
 * Export a createMachine function here. Hint: 'create: { data: {} }' would be helpful!
 */

/**
 * Returns all available machines.
 */
export async function getMachines() {
  return await prisma.machine.findMany();
}

/**
 * Returns a machine by id, or null if not found.
 */
export async function getMachine(id: number) {
  return await prisma.machine.findUnique({
    where: {
      id
    }
  });
}

/**
 * Export a delete function here. Hint: 'delete: { where: {} }' would be helpful!
 */
