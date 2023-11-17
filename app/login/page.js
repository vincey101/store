'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function AuthPage() {
    const supabase = createClientComponentClient(AuthPage);
    const router = useRouter();
    const redirectTo = `${router.basePath}/login/callback`;


    return (
        <>
            <div id='AuthPage' className="w-full min-h-screen bg-white">
                <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                    <Link href='/' className='min-w-[178px]'>
                        <img src="/images/logo.png" width="120" />
                    </Link>
                </div>
                <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                    Login/Register
                </div>
                <div className="max-w-[400px] mx-auto px-2">
                    <Auth
                        onlyThirdPartyProviders
                        redirectTo={redirectTo}
                        supabaseClient={supabase}
                        providers={['google']}
                        appearance={{ theme: ThemeSupa }}

                    />

                </div>
            </div>
        </>
    )
}
