import Image from 'next/image';
import Link from 'next/link';
import './BreadCrumbs.scss';



export function BreadCrumbs ( { page }: { page: string } ) {
  return(
    <section className='breadcrumbs__section'>
      <Image fill priority src={`/backgrounds/breadcrumbs-background.jpg`} alt='' sizes='' style={{objectFit: 'cover'}} />
      <div className='container'>
        <h3>{page}</h3>
        <div className='breadcrumbs'>
          <Link href={'/'}>Home</Link>
          <h4>/ {page}</h4>
        </div>
      </div>
    </section>
  )
}