import { Link } from "@/i18n/routing";
import {HamburgerMenuIcon} from "@radix-ui/react-icons"
import Image from "next/image";
export default function Navigation({user, locale}: {user:any; locale: string}) {

    return <nav className="flex py-2 justify-between px-8 items-center">

    <Link  locale={locale} href={"/"} className="flex items-center gap-2">
        <Image src="/Logo.png" alt="Mentally Logo" height={40} width={40}/>
        <h3 className="text-text-main text-xl">Mentally</h3>
    </Link>


    <div className=" hidden max-sm:flex cursor-pointer">
      <HamburgerMenuIcon color="#00b3ee" height={24} width={24}/>
    </div>
    <div className="flex gap-4 text-text-main-blue max-sm:hidden " >


      {!user && 
      <>
      <Link locale={locale} href="/auth/sign-in">
        Sign In
      </Link>
      <Link locale={locale} href="/auth/create-account">
        Create Account
      </Link>
      </>}
      
      {user && <Link locale={locale} href="/auth/sign-out">
        Sign Out
      </Link>}

      {user && <div className="text-text-main-blue">Logged as {user?.name}</div>}
    </div>
    
  </nav>
}