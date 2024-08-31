import prisma from "../src/db/prisma";

const main = async () => {
  await prisma.users.upsert({
    where: {email: 'abhijay@testmail.com'},
    update: {},
    create: {
      email: 'abhijay@testmail.com',
      password: 'salt-hashed-password1',
      role: 'normal'
    }
  })
  console.log('dummy user-1 created.')

  await prisma.users.upsert({
    where: {email: 'rajvansh@testmail.com'},
    update: {},
    create: {
      email: 'rajvansh@testmail.com',
      password: 'salt-hashed-password2',
      role: 'admin'
    }
  })
  console.log('dummy user-2 created.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })