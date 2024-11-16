import Link from 'next/link';

interface MemberProps {
    avatar: string;
    name: string;
    role: string;
    linkedIn: string;
    description: string;
}

const teamMembers: MemberProps[] = [
    {
        avatar: 'john-smith.png',
        name: 'John Smith',
        role: 'CEO and Founder',
        linkedIn: 'https://www.linkedin.com/in/john-smith',
        description:
            '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    },
    {
        avatar: 'jane-doe.png',
        name: 'Jane Doe',
        role: 'Director of Operations',
        linkedIn: 'https://www.linkedin.com/in/jane-doe',
        description:
            '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    },
    {
        avatar: 'michael-brown.png',
        name: 'Michael Brown',
        role: 'Senior SEO Specialist',
        linkedIn: 'https://www.linkedin.com/in/michael-brown',
        description:
            '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    },
    {
        avatar: 'emily-johnson.png',
        name: 'Emily Johnson',
        role: 'PPC Manager',
        linkedIn: 'https://www.linkedin.com/in/emily-johnson',
        description:
            '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    },
    {
        avatar: 'brian-williams.png',
        name: 'Brian Williams',
        role: 'Social Media Specialist',
        linkedIn: 'https://www.linkedin.com/in/brian-williams',
        description:
            '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    },
    {
        avatar: 'sarah-kim.png',
        name: 'Sarah Kim',
        role: 'Content Creator',
        linkedIn: 'https://www.linkedin.com/in/sarah-kim',
        description:
            '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
    },
];

const Member = ({ avatar, name, role, linkedIn, description }: MemberProps) => (
    <div className='rounded-[40px] border border-b-4 border-background-2 ~p-6/10'>
        <div className='relative flex items-end gap-6'>
            <img
                src={`/media/team/${avatar}`}
                alt={`${name} portrait`}
                className='max-w-24'
            />
            <div className='flex flex-col ~text-sm/lg'>
                <span className='font-medium'>{name}</span>
                <span>{role}</span>
            </div>

            <Link
                href={linkedIn}
                target='_blank'
                className='absolute top-0 right-0 h-9 w-9 bg-background-2 rounded-full flex items-center justify-center'
            >
                <svg
                    width='17'
                    height='17'
                    viewBox='0 0 17 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-accent-1 w-full'
                >
                    <path
                        d='M0.317757 17H3.81308V5.68438H0.317757V17Z'
                        fill='currentColor'
                    />
                    <path
                        d='M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z'
                        fill='currentColor'
                    />
                    <path
                        d='M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z'
                        fill='currentColor'
                    />
                </svg>
            </Link>
        </div>

        <hr className='~my-5/6 border-background-2' />

        <p className='~text-xs/base'>{description}</p>
    </div>
);

const Team = () => (
    <div className='max-w-screen-xl w-full mx-auto px-5 ~mt-20/24'>
        <div className='flex items-center gap-12'>
            <div className='bg-accent-1 py-1 px-2 rounded-lg'>
                <h1 className='~text-xl/4xl font-medium'>Team</h1>
            </div>
            <p className='~text-sm/base max-w-xl'>
                Meet the skilled and experienced team behind our successful
                digital marketing strategies
            </p>
        </div>

        <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-3 ~gap-4/8'>
            {teamMembers.map((member) => (
                <Member key={member.name} {...member} />
            ))}
        </div>
    </div>
);

export { Team };
