import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
}

const teamMembers = [
  {
    name: 'Richard Farmosa',
    role: 'UX Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/richard.jpg',
  },
  {
    name: 'Ahmed Salih',
    role: 'Project Manager',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/ahmed.jpg',
  },
  {
    name: 'Guarav Shiven',
    role: 'Business Analyst',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/guarav.jpg',
  },
  {
    name: 'Haris Mughal',
    role: 'Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/haris.jpg',
  },
  {
    name: 'Stephen Oberoi',
    role: 'Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/stephen.jpg',
  },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Meet our Team</h1>
        <p className="mt-3 text-zinc-500">
          Meet the <span className="font-semibold text-purple-500">MusicalMoon</span> team.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="w-full rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] dark:border-zinc-800 dark:bg-zinc-900"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-5 h-24 w-24 rounded-full object-cover"
            />

            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="mt-1 text-sm text-zinc-500">{member.role}</p>
            <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}