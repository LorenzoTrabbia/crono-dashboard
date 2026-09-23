import amazonIcon from '../assets/icons/amazon.png';
import mIcon from '../assets/icons/m.png';
import mcdonaldIcon from '../assets/icons/mcdonald.png';
import redditIcon from '../assets/icons/reddit.png';
import type { ReplyAvatar } from '../types/dashboard';

export const avatars: ReplyAvatar[] = [
	{
		src: redditIcon,
		alt: 'Reddit',
		imageClassName: '',
	},
	{
		src: amazonIcon,
		alt: 'Amazon',
		imageClassName: '',
	},
	{
		src: mcdonaldIcon,
		alt: 'McDonald\'s',
		imageClassName: 'p-1',
	},
	{
		src: mIcon,
		alt: 'M',
		imageClassName: '',
	},
];
