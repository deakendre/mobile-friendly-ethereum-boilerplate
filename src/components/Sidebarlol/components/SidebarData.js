import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Icon } from 'web3uikit';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Info',
    path: '/portofolio',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Transactions',
    path: '/ERC20Balance',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'DEX',
    path: '/1inch',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Rarity Ranker',
    path: '/nftBalance',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Crea NFT',
    path: '/nftCreateRinkeby',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
   {
    title: 'NFT Marketplace',
    path: '/NFTMarketPlace',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
   {
    title: 'Contract reader',
    path: '/Contract',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
   ,
   {
    title: 'Wallete',
    path: '/Wallet',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
];
