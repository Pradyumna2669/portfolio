'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import GradientMenu, { type GradientMenuItem } from '@/components/ui/gradient-menu';
import { useScroll } from '@/lib/use-scroll';
import {
	IoCodeSlashOutline,
	IoTrophyOutline,
	IoPersonOutline,
	IoSparklesOutline,
} from 'react-icons/io5';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);
	const contactHref = 'mailto:pradyumnagkulkarni93@gmail.com';

	const links = [
		{
			label: 'Projects',
			href: '#projects',
		},
		{
			label: 'Achievements',
			href: '#achievements',
		},
		{
			label: 'About',
			href: '#about',
		},
		{
			label: 'Skills',
			href: '#skills',
		},
	];

	const desktopMenuItems: GradientMenuItem[] = [
		{
			title: 'Projects',
			href: '#projects',
			icon: <IoCodeSlashOutline />,
			gradientFrom: '#3b82f6',
			gradientTo: '#8b5cf6',
		},
		{
			title: 'Achievements',
			href: '#achievements',
			icon: <IoTrophyOutline />,
			gradientFrom: '#f59e0b',
			gradientTo: '#ef4444',
		},
		{
			title: 'About',
			href: '#about',
			icon: <IoPersonOutline />,
			gradientFrom: '#10b981',
			gradientTo: '#06b6d4',
		},
		{
			title: 'Skills',
			href: '#skills',
			icon: <IoSparklesOutline />,
			gradientFrom: '#a855f7',
			gradientTo: '#ec4899',
		},
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
			<div
				className={cn(
					'mx-auto w-full max-w-7xl rounded-full border border-transparent px-2 transition-all ease-out md:px-4',
					{
						'border-white/10 bg-background/70 shadow-[0_10px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl':
							scrolled && !open,
						'border-white/10 bg-background/90 backdrop-blur-xl': open,
					},
				)}
			>
				<nav
					className={cn(
						'flex h-16 w-full items-center justify-between gap-4 rounded-full px-3 md:h-[4.2rem] md:px-5 md:transition-all md:ease-out',
						{
							'md:px-2': scrolled,
						},
					)}
				>
					<a href="#" className="flex items-center gap-3 text-foreground group">
						<span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-sm font-bold tracking-wider text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-transform group-hover:scale-105">
							PK
						</span>
						<div className="flex flex-col">
							<span className="text-sm font-bold tracking-wide text-foreground">
								PRADYUMNA KULKARNI
							</span>
							<span className="hidden text-[11px] font-medium text-muted-foreground sm:inline-block">
								Full-Stack Developer
							</span>
						</div>
					</a>
					<div className="hidden flex-1 items-center justify-center md:flex">
						<GradientMenu items={desktopMenuItems} />
					</div>
					<div className="hidden items-center gap-3 md:flex">
						<Button asChild variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
							<a href="https://learn.microsoft.com/en-in/users/pradyumnakulkarni-0751/achievements" target="_blank" rel="noopener noreferrer">
								Microsoft Profile
							</a>
						</Button>
						<Button asChild className="bg-primary hover:bg-primary/90 shadow-md">
							<a href={contactHref}>Get in Touch</a>
						</Button>
					</div>
					<Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
						<MenuToggleIcon open={open} className="size-5" duration={300} />
					</Button>
				</nav>

				<div
					className={cn(
						'bg-background/95 fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-white/10 backdrop-blur-2xl md:hidden',
						open ? 'block' : 'hidden',
					)}
				>
					<div
						data-slot={open ? 'open' : 'closed'}
						className={cn(
							'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
							'flex h-full w-full flex-col justify-between gap-y-4 p-6',
						)}
					>
						<div className="grid gap-y-3">
							{links.map((link) => (
								<a
									key={link.label}
									onClick={() => setOpen(false)}
									className={buttonVariants({
										variant: 'ghost',
										className: 'justify-start text-base py-3',
									})}
									href={link.href}
								>
									{link.label}
								</a>
							))}
						</div>
						<div className="flex flex-col gap-3 pb-8">
							<Button asChild variant="outline" className="w-full">
								<a href="https://learn.microsoft.com/en-in/users/pradyumnakulkarni-0751/achievements" target="_blank" rel="noopener noreferrer">
									Microsoft Profile
								</a>
							</Button>
							<Button asChild className="w-full">
								<a href={contactHref}>Get in Touch</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
