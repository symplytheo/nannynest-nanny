import countries from './countries.json';

export const COUNTRIES = countries.map(x => ({ label: x.name, value: x.name }));

export const PRONOUNS = [
  { label: 'He/Him', value: 'He/Him' },
  { label: 'She/Her', value: 'She/Her' },
  { label: 'They/Them', value: 'They/Them' },
  { label: 'Others', value: 'Others' },
];
