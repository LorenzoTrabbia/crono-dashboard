import {
	BriefcaseBusiness,
	Euro,
	ListTodo,
	User,
	Video,
} from 'lucide-react';
import type { PerformanceKpi } from '../types/dashboard';

export const kpis: PerformanceKpi[] = [
	{
		label: 'Contacts engaged',
		value: '0',
		target: '500',
		icon: User,
		color: '#3284F4',
		progress: '0%',
	},
	{
		label: 'Companies engaged',
		value: '0',
		target: '500',
		icon: BriefcaseBusiness,
		color: '#536FF0',
		progress: '50%',
	},
	{
		label: 'Activities',
		value: '1000',
		target: '2000',
		icon: ListTodo,
		color: '#9747FF',
		progress: '50%',
	},
	{
		label: 'Meetings',
		value: '20',
		target: '30',
		icon: Video,
		color: '#E9B400',
		progress: '50%',
	},
	{
		label: 'Deals',
		value: '100',
		target: '200',
		icon: ListTodo,
		color: '#E94BC0',
		progress: '50%',
	},
	{
		label: 'Pipeline',
		value: '50K',
		target: '100K',
		icon: Euro,
		color: '#13A77A',
		progress: '50%',
	},
];
