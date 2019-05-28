import { Factory } from 'ember-cli-mirage'
import faker from 'faker'

export default Factory.extend({
  name: () => `${faker.name.firstName()} ${faker.name.lastName()}`,
  website: faker.internet.url,
  picture: faker.internet.avatar,
  company: faker.company.companyName,
})
