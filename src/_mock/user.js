import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(10)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active','revoke', 'banned']),
  role: sample([
    'Manager',
    'Sales Manager',
    'R M',
    'Team lead',
    'Agent',
    'Recovery Agent',
    'H R',
    
  ]),
}));
