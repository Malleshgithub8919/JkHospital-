import { useState } from 'react';
import { Menu, X, HeartPulse, Search, ArrowRight, Phone, MapPin } from 'lucide-react';

const nav = [['Home', 'home'], ['About Us', 'about'], ['Departments', 'departments'], ['Our Doctors', 'doctors'], ['Facilities', 'facilities'], ['Gallery', 'gallery'], ['Contact', 'contact']];

export default function Header({ onBook }) {
  const [open, setOpen] = useState(false);
  return <>
    <div className="utility">
      <span>♡ Compassion　|　Quality　|　Respect　|　Community　|　Your Health Our Priority</span>
      <div><a href="#contact"><Phone size={12}/> Emergency Support</a><a href="#contact">Patient Portal</a><a href="#contact"><MapPin size={12}/> Find Us</a><span className="social">f　◎　▶　in</span></div>
    </div>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="JK Hospital home"><span className="brand-mark"><HeartPulse/></span><span><b>JK HOSPITAL</b><small>T A N U K U</small></span></a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'navigation is-open' : 'navigation'}>{nav.map(([label, target]) => <a key={target} href={'#' + target} onClick={() => setOpen(false)}>{label}</a>)}<button className="search-button" aria-label="Search" onClick={() => document.getElementById('departments')?.scrollIntoView({behavior:'smooth'})}><Search size={18}/></button><button className="button button-teal" onClick={() => {setOpen(false);onBook()}}>Book Appointment <ArrowRight size={15}/></button></nav>
    </header>
  </>;
}
