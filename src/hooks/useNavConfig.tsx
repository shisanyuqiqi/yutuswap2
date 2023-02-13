import { CaretDownOutlined } from '@ant-design/icons'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import WalletButtons from '../components/web3/WalletButtons'
import {
  ENABLE_KLIMA_STAKE_SHOWCASE,
  VITE_ENABLE_CLAIMING,
  VITE_ENABLE_OFFSET_CARBON_SHOWCASE,
} from '../constants/featureFlags'
import { useIsMobile } from './useIsMobile'

export const useNavConfig = () => {
  const isMobile = useIsMobile()

  const navConfig = useMemo(() => {
    return [
      { label: <Link to="/swap">Swap & Bridge</Link>, key: '/swap' },
      VITE_ENABLE_CLAIMING
        ? {
            label: (
              <a href="/claiming" rel="nofollow noreferrer">
                Claiming
              </a>
            ),
            key: '/claiming',
          }
        : null,
      { label: <Link to="/dashboard">Dashboard</Link>, key: '/dashboard' },
      {
        label: (
          <a href="http://yutumoon.com/" target="_blank" rel="nofollow noreferrer">
            Official Website
          </a>
        ),
        key: 'dev-list',
      },
      {
        label: (
          <span className="lifi-more-submenu-title-wrapper">
            More <CaretDownOutlined className="lifi-more-submenu-title-icon" />
          </span>
        ),
        key: 'lifi-more-submenu',
        disabled: false,
        children: [
          {
            label: (
              <a href="http://yutumoon.com/raodmap/" target="_blank" rel="nofollow noreferrer">
                RoadMap
              </a>
            ),
            key: 'roadmap',
          },

          {
            label: (
              <a href="http://yutumoon.com/about/" target="_blank" rel="nofollow noreferrer">
                About
              </a>
            ),
            key: 'about',
          },
          {
            label: (
              <a href="https://t.me/Yutu188" target="_blank" rel="nofollow noreferrer">
                Btok
              </a>
            ),
            key: 'Btok',
          },
          {
            label: (
              <a href="https://twitter.com/duanhaocheng1" target="_blank" rel="nofollow noreferrer">
                Twitter
              </a>
            ),
            key: 'twitter',
          },
        ],
      },
      isMobile
        ? {
            key: 'wallet-button',
            label: <WalletButtons></WalletButtons>,
          }
        : null,
    ]
  }, [isMobile])

  return navConfig
}
