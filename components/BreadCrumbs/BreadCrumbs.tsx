import Image from 'next/image';
import Link from 'next/link';
import './BreadCrumbs.scss';



export function BreadCrumbs ( { page }: { page: string } ) {
  return(
    <section className='breadcrumbs__section'>
      <Image fill priority src={`backgrounds/breadcrumbs-background.jpg`} alt='' sizes='' style={{objectFit: 'cover'}} />
      <div className='container'>
        <h3>{page}</h3>
        <h4><Link href={'/home'}>Home</Link> / {page}</h4>
      </div>
    </section>
  )
}