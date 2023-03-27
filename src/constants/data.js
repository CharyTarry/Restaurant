import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'KES 2500',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 'KES 2999',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: 'KES 7000',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'KES 5000',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'KES 2600',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'KES 2000',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'KES 1600',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'KES 1000',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'KES 3100',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'KES 2600',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Coveted recognition for exceptional culinary experiences.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Acknowledgement for emerging culinary talent.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Celebrating excellence in hospitality and accommodation.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Culinary excellence recognized with chef award.',
  },
];

export default { wines, cocktails, awards };
