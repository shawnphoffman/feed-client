import { faQuestionCircle, faSpaceStationMoon } from '@awesome.me/kit-ac8ad9255a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'

// Menu items.
const items = [
	{
		title: 'Star Wars Feed',
		url: '/',
		icon: faSpaceStationMoon,
	},
	{
		title: 'About',
		url: '/about',
		icon: faQuestionCircle,
	},
	// {
	// 	title: 'Calendar',
	// 	url: '#',
	// 	icon: Calendar,
	// },
	// {
	// 	title: 'Search',
	// 	url: '#',
	// 	icon: Search,
	// },
	// {
	// 	title: 'Settings',
	// 	url: '#',
	// 	icon: Settings,
	// },
]

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="text-base font-bold h-12">BlueSky Feed Client</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map(item => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<FontAwesomeIcon icon={item.icon} />
											{/* <item.icon /> */}
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
