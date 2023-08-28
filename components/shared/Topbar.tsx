import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/logo.png' alt='logo' width={40} height={40}/>
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Bills Of Exchange</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
              <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
