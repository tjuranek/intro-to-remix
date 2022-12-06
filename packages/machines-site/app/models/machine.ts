import { prisma } from '~/db.server';

/**
 * Creates a new machine and returns it.
 */
export async function createMachine(name: string, model: string) {
  return await prisma.machine.create({
    data: {
      name,
      model
    }
  });
}

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
 * Deletes a machine by id.
 */
export async function deleteMachine(id: number) {
  return await prisma.machine.delete({
    where: {
      id
    }
  });
}
