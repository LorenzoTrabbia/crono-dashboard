import {
	BriefcaseBusiness,
	CheckSquare,
	Link2,
	Target,
	UserRoundPlus,
} from 'lucide-react';
import type { OnboardingItem } from '../types/dashboard';

export const onboardingItems: OnboardingItem[] = [
	{
		label: 'Integrations Setup',
		duration: '5 min',
		icon: Link2,
		iconClassName: 'bg-[#DDF5F4] text-[#0A9B94]',
	},
	{
		label: 'Add new Contact',
		duration: '5 min',
		icon: BriefcaseBusiness,
		iconClassName: 'bg-[#DCEEFF] text-[#458FF5]',
	},
	{
		label: 'Create your first sequence',
		duration: '10 min',
		icon: Target,
		iconClassName: 'bg-[#FCE5F7] text-[#D840C3]',
	},
	{
		label: 'Add contacts to sequence',
		duration: '5 min',
		icon: UserRoundPlus,
		iconClassName: 'bg-[#FFF3D3] text-[#E5AD00]',
	},
	{
		label: 'Run your first task',
		duration: '10 min',
		icon: CheckSquare,
		iconClassName: 'bg-[#E8DFFF] text-[#8754E8]',
	},
];
