import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '../data/siteData.js';

const photo = (id, width=700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export default function Gallery() {
  const [active, setActive] = useState(-1);
  useEffect(() => {
    if (active < 0) return;
    const key = e => {
      if (e.key === 'Escape') setActive(-1);
      if (e.key === 'ArrowRight') setActive(i => (i + 1) % gallery.length);
      if (e.key === 'ArrowLeft') setActive(i => (i - 1 + gallery.length) % gallery.length);
    };
    document.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; };
  }, [active]);

  return <>
    <div className="gallery-grid">{gallery.map((item, i) => <button className="gallery-tile" key={item.title} onClick={() => setActive(i)} aria-label={`Open ${item.title} image`}><img src={photo(item.image)} alt={`Illustrative ${item.title.toLowerCase()} photograph`} loading="lazy"/><span>{item.title}<b>↗</b></span></button>)}</div>
    {active >= 0 && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Hospital gallery" onMouseDown={e => {if (e.target === e.currentTarget) setActive(-1);}}><button className="lightbox-close" onClick={() => setActive(-1)} aria-label="Close"><X/></button><button className="lightbox-prev" onClick={() => setActive(i => (i - 1 + gallery.length) % gallery.length)} aria-label="Previous"><ChevronLeft/></button><figure><img src={photo(gallery[active].image, 1500)} alt={gallery[active].title}/><figcaption>{gallery[active].title} <small>Illustrative image</small></figcaption></figure><button className="lightbox-next" onClick={() => setActive(i => (i + 1) % gallery.length)} aria-label="Next"><ChevronRight/></button></div>}
  </>;
}
