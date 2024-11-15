import Link from 'next/link';

const Logo = () => (
    <Link href='/' className='w-fit flex items-center gap-3 select-none'>
        <svg
            className='w-6 h-6'
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z'
                fill='currentColor'
            />
        </svg>

        <h1 className='~text-xl/2xl font-semibold'>Positivus</h1>
    </Link>
);

export { Logo };
