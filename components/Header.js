import Link from 'next/link';
import PointerIcon from './PointerIcon';
import PointerIconSVG from './PointerIconSVG';
import RockIcon from './RockIcon';
import HandIcon from './HandIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper, faHandRock, faHandPointer } from '@fortawesome/free-regular-svg-icons'

export default function Header({ name }) {
  const faIconSize='2x';
  return (
    <header className="pt-20 pb-12">
      <div className='flex justify-center mb-2'>
        <span className='mx-1'><FontAwesomeIcon icon={faHandRock} size={faIconSize} color="#FFD900"/></span>
        <span className='mx-1'><FontAwesomeIcon icon={faHandPaper} size={faIconSize} color="#FF0093"  transform={{ rotate: 42 }}/></span>
        <span className='mx-1'><FontAwesomeIcon icon={faHandPointer} size={faIconSize} color="#29EEBE"/></span>
      </div>
      {/* <div className="flex">
        <span className="mx-2">
          <RockIcon/>
        </span>
        <span className="mx-2">
          <HandIcon />
        </span>
        <span className="mx-2">
          <PointerIcon/>
        </span>
      </div> */}
      {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
      <p className="text-1xl dark:text-white text-center font-medium tracking-wider">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
