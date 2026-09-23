import type { TaskGroup } from '../types/dashboard';

export const taskGroups: TaskGroup[] = [
	[
		{
			label: 'Overdue',
			count: '3',
			className: 'bg-[#FFE9E9] text-[#ED4C5E]',
		},
	],
	[
		{
			label: 'Pending Manual',
			count: '10',
			className: 'bg-[#FEF3D2] text-[#C69812]',
		},
		{
			label: 'Pending Auto',
			count: '20',
			className: 'bg-[#EAF1FB] text-[#3B85E8]',
			error: true,
		},
	],
	[
		{
			label: 'Completed',
			count: '8',
			className: 'bg-[#E8F5D9] text-[#1A9D6E]',
		},
	],
];
