import { useState } from 'react';

const AFFILIATE_LINKS = {
  nordvpn:   { url: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=150887&url_id=902', label: 'NordVPN',   commission: '100% + 30%/mo' },
  surfshark: { url: 'https://surfshark.com/?ref=YOUR',  label: 'Surfshark', commission: '40%/mo' },
  notion:    { url: 'https://notion.so/?ref=YOUR',      label: 'Notion',    commission: '50% x12mo' },
  jasper:    { url: 'https://jasper.ai/?ref=YOUR',      label: 'Jasper AI', commission: '30%/mo' },
  make:      { url: 'https://www.make.com/en/register?pc=devvault',       label: 'Make.com',  commission: '30%/mo' },
  bitwarden: { url: 'https://bitwarden.com/?ref=YOUR',  label: 'Bitwarden', commission: '25%/mo' },
};

export default function AffiliateLink({ product, children, badge = true }) {
  const [clicked, setClicked] = useState(false);
  const aff = AFFILIATE_LINKS[product];
  if (!aff) return null;

  const handleClick = () => {
    setClicked(true);
    // Track click (можна підключити Plausible / умову Cloudflare Worker)
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('AffiliateClick', { props: { product } });
    }
  };

  return (
    <a
      href={aff.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={`affiliate-link ${clicked ? 'clicked' : ''}`}
    >
      {children || aff.label}
      {badge && <span className="commission-badge">{aff.commission}</span>}
    </a>
  );
}
