import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import NFTMarketTransaction from "/home/endre/Desktop/BackupWEB3DevsIta/provastrana/ethereum-nft-marketplace-boilerplate/src/components/NFTMarketTransactions.jsx"
import NFTBalance from "components/NFTBalance";
import SearchCollections from "components/SearchCollections";
import NativeBalance from "components/NativeBalance";
import SubMenu from "antd/lib/menu/SubMenu";
import Contract from "components/Contract/Contract";
import Wallet from "components/Wallet";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import NFTCreatePolygon from "components/NFTCreatePolygon/NFTCreate";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

import Account from "components/Account";
import Chains from "components/Chains";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout, Tabs} from "antd";
import "antd/dist/antd.css";

import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
import QuickStart from "components/QuickStart";
import Ramper from "components/Ramper";
import NFTCreateRinkeby from "components/NFTCreateRinkeby/NFTCreate";
import RarityRanker from "components/rarityranker";
import InchDex from "components/InchDex";
import { Button, CryptoLogos, Logo } from "web3uikit";
import Intro from 'components/intro/Intro';

function Sidebarlol() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/quickstart' exact component={NFTMarketTransaction} />
          <Route path='/Intro' component={Intro} />
          <Route path='/NFTMarketplace' component={NFTTokenIds} />
           <Route path='/Rarity' exact component={RarityRanker} />
          <Route path='/DEX' component={InchDex} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default Sidebarlol;
