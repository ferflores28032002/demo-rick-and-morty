import SvgColor from 'src/components/svg-color';

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Locations',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Episodes',
    path: '/episodes',
    icon: icon('ic_cart'),
  },
  {
    title: 'Character',
    path: '/characters',
    icon: icon('ic_blog'),
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: icon('ic_heart'),
  },
];

export default navConfig;
