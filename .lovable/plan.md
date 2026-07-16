# APEX AGENT — Full Dashboard Clone

Build a complete, mobile-friendly clone of the APEX AGENT v7.0 Ultimate dashboard shown in the reference images, with smooth animations throughout.

## Design system
- Dark theme with neon purple/violet accents (matching reference: deep navy-black bg `#0a0a1a`, purple `#a855f7`, cyan/pink highlights)
- Font: Space Grotesk (headings) + Inter (body)
- Glassmorphism cards with subtle borders, glow shadows, rounded-2xl
- Animated gradient accents, pulse dots, hover lift, fade-in on scroll (framer-motion)

## Pages / routes
1. `/` — Landing (hero "AI-Powered Offensive Security Platform", features, CTA to dashboard)
2. `/dashboard` — Main dashboard (exact clone of image 1: sidebar + stats + AI chat + tool hub + quick tools + system overview + active tasks + recent activity + AI models + voice assistant + code runner + file upload + notes)
3. `/chat` — AI Chat full page
4. `/network-scanner` — Network scanner with scan form + results table
5. `/vulnerability-scan` — Vuln scan with donut score + severity cards + vulns table
6. `/system-monitor` — CPU/RAM/Disk/Network donuts + network activity chart + process monitor
7. `/tools-hub` — Full security tools grid
8. `/file-manager` — File table
9. `/red-team` — Red team ops cards + active operations
10. `/analytics` — Security score + threat detection + trends chart
11. `/settings` — General/Security/AI settings tabs
12. `/profile` — Operator profile + stats
13. `/login`, `/register`, `/forgot-password` — Auth pages (UI only)
14. 404 page

## Layout
- Persistent sidebar (APEX AGENT logo, nav, system status mini-chart at bottom)
- Top bar (search, model selector, online status, DAN mode toggle, settings, notifications, avatar)
- Mobile: sidebar collapses to hamburger drawer; top bar condenses; grids reflow to single column

## Animations (framer-motion + CSS)
- Page transitions (fade + slight rise)
- Staggered card reveal on mount
- Animated gradient border on active sidebar item
- Pulsing "Online" dot, glowing avatars
- Typing indicator in chat, animated code block copy
- Donut charts animate on view
- Voice assistant waveform animation
- Hover: card lift + glow, button shimmer
- Sidebar item slide-in indicator

## Tech
- TanStack Start routes under `src/routes/`
- shadcn components (already installed) for buttons, cards, tabs, inputs, dropdowns
- Recharts for area/line charts, custom SVG donuts
- framer-motion for animation
- lucide-react icons
- All static/mock data (no backend)
- Fully responsive: mobile drawer sidebar, stacked grids, touch-friendly sizes

## Deliverables
- 14 routes, shared `AppShell` layout with sidebar + topbar
- Design tokens in `src/styles.css` (dark purple neon theme)
- Reusable components: StatCard, ToolCard, DonutChart, ActivityRow, SidebarNav, TopBar
- Head metadata per route (title, description, og)
- Mobile-first responsive across all pages

Ready to build on approval.