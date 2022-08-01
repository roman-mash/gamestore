import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Search from '../Search/Search';
import SearchButton from '../UI/Buttons/SearchButton';
import { HeaderStyle, Logo } from './styled';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <HeaderStyle>
      <Link href="/">
        <Logo>
          <Image
            src="/images/logo.png"
            layout="fill"
            objectFit="contain"
            alt="Logo"
          />
        </Logo>
      </Link>
      <SearchButton onClick={() => setIsSearchVisible(true)} />
      <Search isVisible={isSearchVisible} setIsVisible={setIsSearchVisible} />
    </HeaderStyle>
  );
};

export default Header;
