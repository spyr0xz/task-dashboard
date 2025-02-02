import React, { ReactNode } from 'react'

interface NavbarProps {
  children?: ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({children}) => {
  return (
    <>
    {children}
    </>
  ) 
}
