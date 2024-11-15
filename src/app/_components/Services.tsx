import Link from 'next/link';
import clsx from 'clsx';

interface ServiceProps {
    title: string;
    href: string;
    graphic: string;
    variant: 1 | 2 | 3;
}

const Service = ({ title, href, graphic, variant }: ServiceProps) => (
    <Link
        href={href}
        className={clsx(
            'group block rounded-[40px] border border-b-4 border-background-2 py-6 px-8 overflow-hidden relative',
            {
                'bg-background-3': variant === 1,
                'bg-accent-1': variant === 2,
                'bg-background-2': variant === 3,
            }
        )}
    >
        <div className='flex justify-between gap-6'>
            <div className='flex flex-col gap-12'>
                <div className='~text-xl/3xl font-medium'>
                    {title.split('\n').map((segment, index) => (
                        <h1
                            key={index}
                            className={clsx('w-fit rounded-md px-1', {
                                'bg-accent-1': variant === 1,
                                'bg-background-1':
                                    variant === 2 || variant === 3,
                            })}
                        >
                            {segment}
                        </h1>
                    ))}
                </div>

                <div className='flex items-center gap-4'>
                    <div
                        className={clsx(
                            'h-10 w-10 rounded-full flex items-center justify-center duration-150 -rotate-45 group-hover:rotate-0',
                            {
                                'bg-background-2 text-accent-1': variant === 1,
                                'bg-background-1 text-background-2':
                                    variant === 2 || variant === 3,
                            }
                        )}
                    >
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M1.66016 10.5C0.831729 10.5 0.160156 11.1716 0.160156 12C0.160156 12.8284 0.831729 13.5 1.66016 13.5V10.5ZM22.7208 13.0607C23.3066 12.4749 23.3066 11.5251 22.7208 10.9393L13.1749 1.3934C12.5891 0.807612 11.6393 0.807612 11.0536 1.3934C10.4678 1.97918 10.4678 2.92893 11.0536 3.51472L19.5388 12L11.0536 20.4853C10.4678 21.0711 10.4678 22.0208 11.0536 22.6066C11.6393 23.1924 12.5891 23.1924 13.1749 22.6066L22.7208 13.0607ZM1.66016 13.5L21.6602 13.5V10.5L1.66016 10.5V13.5Z'
                                fill='currentColor'
                            />
                        </svg>
                    </div>

                    <span
                        className={clsx('~text-sm/lg', {
                            'text-background-2': variant === 1 || variant == 2,
                            'text-background-1': variant === 3,
                        })}
                    >
                        Learn more
                    </span>
                </div>
            </div>

            <img
                src={`/media/services/${graphic}`}
                className='absolute -right-1/3 sm:right-6 top-1/2 -translate-y-1/2 p-'
            />
        </div>
    </Link>
);

const serviceList: ServiceProps[] = [
    {
        title: 'Search engine\noptimization',
        href: '/seo',
        graphic: 'seo.png',
        variant: 1,
    },
    {
        title: 'Pay-per-click\nadvertising',
        href: '/ppc',
        graphic: 'ppc.png',
        variant: 2,
    },
    {
        title: 'Social Media\nMarketing',
        href: '/social-media',
        graphic: 'social-media.png',
        variant: 3,
    },
    {
        title: 'Email\nMarketing',
        href: '/email-marketing',
        graphic: 'email-marketing.png',
        variant: 1,
    },
    {
        title: 'Content\nCreation',
        href: '/content-creation',
        graphic: 'content-creation.png',
        variant: 2,
    },
    {
        title: 'Analytics and\nTracking',
        href: '/analytics',
        graphic: 'analytics.png',
        variant: 3,
    },
];

const Services = () => (
    <div className='max-w-screen-xl w-full mx-auto px-5 ~mt-20/24'>
        <div className='flex items-center gap-12'>
            <div className='bg-accent-1 py-1 px-2 rounded-lg'>
                <h1 className='~text-xl/4xl font-medium'>Services</h1>
            </div>
            <p className='~text-sm/base max-w-xl'>
                At our digital marketing agency, we offer a range of services to
                help businesses grow and succeed online. These services include:
            </p>
        </div>

        <div className='mt-12 grid lg:grid-cols-2 ~gap-4/8'>
            {serviceList.map((service: ServiceProps, index: number) => (
                <Service key={index} {...service} />
            ))}
        </div>
    </div>
);

export { Services };
