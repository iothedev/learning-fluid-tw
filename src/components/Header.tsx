import { Logo } from '@/components';
import Link from 'next/link';

const Header = () => (
    <div className='max-w-screen-xl w-full mx-auto'>
        <div className='px-6 py-5 flex items-center justify-between'>
            <Logo />

            <div className='hidden md:block space-x-5 ~text-xs/base'>
                <Link href='/'>About</Link>
                <Link href='/'>Integrations</Link>
                <Link href='/'>Pricing</Link>
                <Link href='/'>Blog</Link>
            </div>
        </div>
    </div>
);

export { Header };
