export const site = {
  name: 'Mise en Box',
  tagline: 'Cook better, box by box.',
  description:
    'Meal kits, bakery recipes, pantry staples and kitchen tools — delivered to your door every week.',
  phone: '09-123456789',
  email: 'admin@inabox.com',
  address: 'Yangon, Myanmar',
  mapLink: 'https://goo.gl/maps/e6mmhTan8jZt9U847',
  hours: [
    { day: 'Monday – Friday', time: '8:00 – 20:00' },
    { day: 'Saturday', time: '9:00 – 18:00' },
    { day: 'Sunday', time: '10:00 – 16:00' },
  ],
  copyright: new Date().getFullYear(),
}

export interface NavChild {
  label: string
  to: string
}

export interface NavItem {
  label: string
  to?: string
  children?: NavChild[]
}

export const navigation: NavItem[] = [
  { label: 'Recipes', to: '/recipes' },
  {
    label: 'Products & Services',
    children: [
      { label: 'At Home', to: '/kitchen' },
      { label: 'Ingredients', to: '/pantry' },
      { label: 'Meal Planner', to: '/meal-planner' },
      { label: 'Download App', to: '/app' },
      { label: 'Weekly Recipe', to: '/weekly-recipes' },
      { label: 'Gift Box', to: '/gift-box' },
    ],
  },
  { label: 'Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const testimonials = [
  {
    quote:
      'The recipe cards are the reason I stopped ordering takeaway. Everything arrives measured, and dinner takes 30 minutes.',
    name: 'Aye Chan',
    role: 'Weekly box subscriber',
  },
  {
    quote:
      'I bought the BBQ set for ten people and everyone asked where the caterer was from. It was my oven, apparently.',
    name: 'Daniel Ko',
    role: 'Game day host',
  },
  {
    quote:
      'Finally a pantry shelf I actually use. The 00 flour and the spice tins live next to the hob now.',
    name: 'Marlar Tun',
    role: 'Home baker',
  },
]

export const steps = [
  {
    title: 'Pick your box',
    body: 'Choose recipes, pantry refills or a full package for the week ahead.',
  },
  {
    title: 'We pack it fresh',
    body: 'Pre-measured ingredients and tested methods, boxed the morning it ships.',
  },
  {
    title: 'Cook and enjoy',
    body: 'Follow the card, sit down together, and recycle the box. That is it.',
  },
]
