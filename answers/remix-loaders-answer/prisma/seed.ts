import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();

export async function main() {
  await prisma.machine.create({
    data: {
      name: 'Machine One',
      model: 'Model One'
    }
  });

  await prisma.machine.create({
    data: {
      name: 'Machine Two',
      model: 'Model Two'
    }
  });

  await prisma.machine.create({
    data: {
      name: 'Machine Three',
      model: 'Model Three'
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
