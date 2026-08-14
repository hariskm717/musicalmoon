const teamMembers = [
  {
    name: 'Richard Formosa',
    role: 'UX Designer',
    description: 'Richard is a creative UX Designer passionate about intuitive digital experiences, creating clean, engaging and user friendly interfaces.',
    image: '/richard.jpg',
  },
  {
    name: 'Ahmed Salih',
    role: 'Project Manager',
    description: 'Ahmed is a dedicated Project Manager focused on successful project delivery, leading teams through planning, collaboration, communication and execution.',
    image: '/ahmed.jpg',
  },
  {
    name: 'Guarav Shiven',
    role: 'Business Analyst',
    description: 'Gurav is a strategic Business Analyst focused on understanding business needs, identifying opportunities, improving processes and supporting informed decisions.',
    image: '/guarav.jpg',
  },
  {
    name: 'Haris Mughal',
    role: 'Developer',
    description: 'Haris is a dedicated Developer passionate about building reliable software solutions, focusing on clean code, collaboration and practical innovation.',
    image: '/haris.jpg',
  },
  {
    name: 'Stephen Oberoi',
    role: 'Developer',
    description:
      'Stephen is a skilled Developer passionate about building efficient software solutions, focusing on clean code, collaboration and dependable digital products.',
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