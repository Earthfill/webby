import jonathan from '@/assets/images/jonathan.svg';
import mary from '@/assets/images/mary.svg';
import barbara from '@/assets/images/barbara.svg';
import mischelle from '@/assets/images/mischelle.svg';
import eugene from '@/assets/images/eugene.svg';
import elizabeth from '@/assets/images/elizabeth.svg';
import rachel from '@/assets/images/rachel.svg';
import gertrude from '@/assets/images/gertrude.svg';
import { paths } from '@/paths';
import providers from '@/assets/images/providers.svg';
import suppliers from '@/assets/images/suppliers.svg';
import plans from '@/assets/images/plans.svg';
import patients from '@/assets/images/patients.svg';

export const links = [
  {
    id: 1,
    name: 'For Patients',
    path: paths.patients()
  },
  {
    id: 2,
    name: 'For Health Plans',
    path: paths.healthPlans()
  },
  {
    id: 3,
    name: 'For Providers',
    path: paths.providers()
  },
  {
    id: 4,
    name: 'For Suppliers',
    path: paths.suppliers()
  },
  {
    id: 5,
    name: 'Careers',
    path: paths.home()
  },
];

export const sections = [
  {
    id: 'Patients',
    title: 'Patients',
    description: 'Get high-quality care from the comfort of your home.',
    buttonText: 'For Patients',
    path: paths.patients()
  },
  {
    id: 'Health Plans',
    title: 'Health Plans',
    description: 'Optimize healthcare outcomes efficiently.',
    buttonText: 'For Health Plans',
    path: paths.healthPlans()
  },
  {
    id: 'Providers',
    title: 'Providers',
    description: 'Deliver top-notch care to your patients.',
    buttonText: 'For Providers',
    path: paths.providers()
  },
];

export const reviews = [
  {
    id: 1,
    name: 'Jonathan Sweeney',
    avatar: jonathan,
    review: "I love that model. I [used to have to] call all around, and I absolutely love that model that you could save me the time and headache of doing that."
  },
  {
    id: 2,
    name: 'Barbara Cook',
    avatar: barbara,
    review: "I am so happy with your company. Ever since my insurer switched to you, everything and everybody I've spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!"
  },
  {
    id: 3,
    name: 'Mary Rogers',
    avatar: mary,
    review: "I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful."
  },
  {
    id: 4,
    name: 'Mischelle Damrose',
    avatar: mischelle,
    review: "I think more people should be trained like [you]. You don't usually get that kind of help from a sales person. It's great to know that there are compassionate people out there... I really needed this machine."
  },
  {
    id: 5,
    name: 'Eugene Yoffee',
    avatar: eugene,
    review: "You guys really helped me out a lot— big time. I appreciate it so so much, I can't say enough good stuff about [Tomorrow Health]."
  },
  {
    id: 6,
    name: 'Elizabeth Bartman',
    avatar: elizabeth,
    review: "Oh thank you so so much, this has been a frustrating month but you made it all better. You've done such a great service to this child, I really appreciate it. You'll be in my prayers every night. How wonderful."
  },
  {
    id: 7,
    name: 'Rachel Nemeh',
    avatar: rachel,
    review: "Everyone I've spoken to — you are just phenomenal people. It means a lot, it's not unnoticed."
  },
  {
    id: 8,
    name: 'Gertrude Leathers',
    avatar: gertrude,
    review: "I really thank you very much. You know this intermediary with you people has helped tremendously. I'm so happy to have your help, thank you so much."
  },
];

export const pages = [
  {
    title: "For Providers",
    image: providers,
    path: paths.providers(),
  },
  {
    title: "For Suppliers",
    image: suppliers,
    path: paths.suppliers(),
  },
  {
    title: "Health Plans",
    image: plans,
    path: paths.healthPlans(),
  },
  {
    title: "For Patients",
    image: patients,
    path: paths.patients(),
  },
]