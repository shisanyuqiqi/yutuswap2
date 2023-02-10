import './AntOverrides.css'
import './App.css'

import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'
import { Button, Col, Layout, Menu, Row } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import { useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'

import DiscordIcon from './assets/icons/discordIcon'
import { PoweredByLiFi } from './assets/Li.Fi/poweredByLiFi'
import Carbon_Neutral_Protocol from './assets/misc/Carbon_Neutral_Protocol.png'
import Claiming from './components/Claiming'
import Dashboard from './components/Dashboard'
import { DiscordPopup } from './components/DiscordPopup'
import SwapCarbonOffsetEmbed from './components/EmbedViews/SwapCarbonOffsetEmbed'
import SwapEtherspotKlimaZapEmbed from './components/EmbedViews/SwapEtherspotKlimaZapEmbed'
import HistoryMigration from './components/HistoryMigration'
import NotFoundPage from './components/NotFoundPage'
import { Swap } from './components/Swap'
import SwapCarbonOffset from './components/SwapCarbonOffset'
import SwapCarbonOffsetV2 from './components/SwapCarbonOffsetV2'
import SwapEtherspotKlimaZap from './components/SwapEtherspotKlimaZap'
import SwapKlimaStakeV2 from './components/SwapKlimaStakeV2'
import SwapUkraine from './components/SwapUkraine'
import SwapV1 from './components/SwapV1'
import WalletButtons from './components/web3/WalletButtons'
import {
  ENABLE_KLIMA_STAKE_SHOWCASE,
  VITE_ENABLE_OFFSET_CARBON_SHOWCASE,
} from './constants/featureFlags'
import { useNavConfig } from './hooks/useNavConfig'
import { usePageViews } from './hooks/usePageViews'
import { ChainsTokensToolsProvider } from './providers/chainsTokensToolsProvider'
import { ToSectionCarbonOffsetProvider } from './providers/ToSectionCarbonOffsetProvider'
import { WalletProvider } from './providers/WalletProvider'
import setMetatags from './services/metatags'

function App() {
  const navConfig = useNavConfig()
  const location = useLocation()
  const path = usePageViews()
  const [adjustNavbar, setAdjustNavbar] = useState(location.pathname.includes('showcase'))
  const [showDiscordPopup, setShowDiscordPopup] = useState(false)

  useEffect(() => {
    setAdjustNavbar(location.pathname.includes('showcase'))
  }, [location])

  function offsetCarbonEmbedView() {
    setMetatags({
      title: 'LI.FI - Offset Carbon',
    })
    return (
      <div className="lifiEmbed">
        <ToSectionCarbonOffsetProvider>
          <SwapCarbonOffsetEmbed />
        </ToSectionCarbonOffsetProvider>

        {/* <div className="poweredBy">
          <a href="https://li.fi/" target="_blank" rel="nofollow noreferrer">
            <PoweredByLiFi />
          </a>
        </div> */}
        {/* <div className="wallet-buttons-embed-view">
          <WalletButtons />
        </div> */}
      </div>
    )
  }

  function stakeKlimaEmbedView() {
    setMetatags({
      title: 'LI.FI - Stake Klima',
    })
    return (
      <div className="lifiEmbed">
        <SwapEtherspotKlimaZapEmbed />
        {/* <div className="poweredBy">
          <a href="https://li.fi/" target="_blank" rel="nofollow noreferrer">
            <PoweredByLiFi />
          </a>
        </div>
        <div className="wallet-buttons-embed-view">
          <WalletButtons />
        </div> */}
      </div>
    )
  }

  // function widgetEmbed() {
  //   setMetatags({
  //     title: 'LI.FI - Swap',
  //   })
  //   const widgetConfig = {
  //     containerStyle: {
  //       borderRadius: '16px',
  //       boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
  //     },
  //   }

  //   return <LiFiWidget config={widgetConfig} />
  // }

  return (
    <WalletProvider>
      <ChainsTokensToolsProvider>
        {path === '/embed/carbon-offset' ? (
          offsetCarbonEmbedView()
        ) : path === '/embed/stake-klima' ? (
          stakeKlimaEmbedView()
        ) : (
          <Layout>
            <Header
              style={{
                position: adjustNavbar ? 'fixed' : 'absolute',
                zIndex: 900,
                width: '100%',
                padding: 0,
                top: 0,
                background: adjustNavbar ? 'white' : 'transparent',
              }}>
              <Row className="site-layout-menu">
                {/* Menu */}
                <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                  <div className="header-linkWrapper">
                    <Link to="/" className="wordmark">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="68px"
                        height="68px"
                        viewBox="0 0 68 68"
                        enable-background="new 0 0 68 68"
                        xmlSpace="preserve">
                        {' '}
                        <image
                          id="image0"
                          width="68"
                          height="68"
                          x="0"
                          y="0"
                          href="data:image/png;base64,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"
                        />
                      </svg>
                    </Link>
                  </div>
                  <Menu
                    items={navConfig}
                    theme="light"
                    mode="horizontal"
                    triggerSubMenuAction="hover"
                    defaultSelectedKeys={path ? [path] : []}
                  />
                </Col>

                {/* Links */}
                <Col
                  xs={0}
                  sm={0}
                  md={10}
                  lg={10}
                  xl={10}
                  style={{ float: 'right', paddingRight: 10 }}>
                  <Row justify="end" gutter={15}>
                    <Col>
                      <a
                        style={{
                          padding: '13.5px 24px 13.5px 24px',
                        }}
                        className="lifi-support-link headerIconLink lifi-header-social-links"
                        // href="https://discord.com/channels/849912621360218112/863689862514343946"
                        // target="_blank"
                        // rel="nofollow noreferrer"
                        onClick={() => {
                          setShowDiscordPopup(true)
                        }}>
                        <DiscordIcon style={{ marginRight: 4 }} /> Support
                      </a>
                    </Col>
                    <Col>
                      <WalletButtons className="wallet-buttons wallet-buttons-menu-full"></WalletButtons>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Header>

            <Content>
              <Routes>
                <Route path="/" element={<Navigate to="/swap" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/swap/*"
                  element={
                    <div className="lifiWrap swap-page">
                      <Swap />
                    </div>
                  }
                />
                <Route
                  path="/claiming"
                  element={
                    <div className="lifiWrap claim-page">
                      <Claiming />
                    </div>
                  }
                />
                <Route
                  path="/swap-v1"
                  element={
                    <div className="lifiWrap swap-page-v1">
                      <SwapV1 />
                    </div>
                  }
                />
                <Route
                  path="/showcase/ukraine"
                  element={
                    <div className="lifiWrap">
                      <SwapUkraine />
                    </div>
                  }
                />
                <Route path="/ukraine" element={<Navigate to="/showcase/ukraine" />} />
                <Route
                  path="/showcase/etherspot-klima"
                  element={
                    <div className="lifiWrap">
                      <SwapEtherspotKlimaZap />
                    </div>
                  }
                />

                <Route
                  path="/showcase/carbon-offset"
                  element={
                    <div className="lifiWrap">
                      <ToSectionCarbonOffsetProvider>
                        <SwapCarbonOffset />
                      </ToSectionCarbonOffsetProvider>
                    </div>
                  }
                />

                {VITE_ENABLE_OFFSET_CARBON_SHOWCASE && (
                  <Route
                    path="/showcase/carbon-offset-v2"
                    element={
                      <div className="lifiWrap">
                        <ToSectionCarbonOffsetProvider>
                          <SwapCarbonOffsetV2 />
                        </ToSectionCarbonOffsetProvider>
                      </div>
                    }
                  />
                )}
                {ENABLE_KLIMA_STAKE_SHOWCASE && (
                  <Route
                    path="/showcase/klima-stake-v2"
                    element={
                      <div className="lifiWrap">
                        <SwapKlimaStakeV2 />
                      </div>
                    }
                  />
                )}

                {/* <Route
                    path="/testnet"
                    element={() => {
                      setMetatags({
                        title: 'LI.FI - Testnet',
                      })
                      initStomt('swap')
                      const transferChains = getTransferChains(
                        import.meta.env.VITE_LIFI_ENABLED_CHAINS_TESTNET_JSON!,
                      )
                      return (
                        <div className="lifiWrap">
                          <Swap transferChains={transferChains} />
                        </div>
                      )
                    }}
                  /> */}
                <Route path="/history-migration" element={<HistoryMigration />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Content>

            {/* Social Links */}
            <div className="lifi-content-social-links">
              <a
                className="icon-link"
                href="https://twitter.com/duanhaocheng1"
                target="_blank"
                rel="nofollow noreferrer">
                <TwitterOutlined />
              </a>
              <a
                className="icon-link"
                href="https://t.me/Yutu188"
                target="_blank"
                rel="nofollow noreferrer">
                <GithubOutlined />
              </a>
              <Button
                className="lifi-support-link"
                onClick={() => {
                  setShowDiscordPopup(true)
                }}>
                <DiscordIcon style={{ marginRight: 4 }} /> Support
              </Button>
            </div>

            {/* <Footer></Footer> */}
            {/* <NotificationOverlay /> */}
            {!location.pathname.includes('dashboard') && (
              <a
                className="carbon-neutral-btn"
                href="https://www.klimadao.finance/infinity"
                target="_blank"
                rel="nofollow noreferrer">
                <img src={Carbon_Neutral_Protocol} width="250" alt="Carbon_Neutral_Protocol" />
              </a>
            )}

            <DiscordPopup show={showDiscordPopup} handleClose={() => setShowDiscordPopup(false)} />
          </Layout>
        )}
      </ChainsTokensToolsProvider>
    </WalletProvider>
  )
}

export { App }
