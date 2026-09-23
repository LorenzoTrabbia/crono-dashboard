import type { LucideIcon } from 'lucide-react';

export type TaskSummary = {
	label: string;
	count: string;
	className: string;
	error?: boolean;
};

export type TaskGroup = TaskSummary[];

export type ReplyAvatar = {
	src: string;
	alt: string;
	imageClassName: string;
};

export type PerformanceKpi = {
	label: string;
	value: string;
	target: string;
	icon: LucideIcon;
	color: string;
	progress: string;
};

export type OnboardingItem = {
	label: string;
	duration: string;
	icon: LucideIcon;
	iconClassName: string;
};
