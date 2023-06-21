import { Header } from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import Section from '@/components/ui/section'
import Image from 'next/image'
import { webImageLoader } from "@/lib/imageLoader"

export default function NotFound() {
    return (
        <>
            <Header />
            <Section>
                <div className='container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8'>
                    <div className=''>
                        <h1 className='font-bold text-4xl uppercase text-right'>You found me!</h1>
                        <p className='text-muted-foreground mt-4 text-right'>Unfortunately you have also found a very <span className='font-bold'>elusive 404 page</span>, which means the page you are looking for is no longer here.</p>
                    </div>
                    <div className='rounded-lg bg-muted'>
                        <div className='relative h-80 w-80 mx-auto'>
                            <Image loader={webImageLoader} src="hello.png" fill className='' alt='Not Found' />
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}