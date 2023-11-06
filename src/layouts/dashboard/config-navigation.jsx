import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Teams',
    path: '/user',
    icon: icon('ic_user'),
  },
  
  {
    title: 'Loans Update',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: icon('ic_notification_chat'),
  },
  
];

export default navConfig;
