import React, {useState} from 'react';
import icon from '../images/icon-arrow.svg';

const ipRegex = /^(?:(?:2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(?:2[0-4]\d|25[0-5]|[01]?\d\d?)$/;
const domainRegex = /^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}$/;

const Header = ({getInfoByIp}) => {
const [search, setSearch] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  if(ipRegex.test(search)) {
    getInfoByIp(search, 'ipAddress');
  }else if(domainRegex.test(search)) {
    getInfoByIp(search, 'domain');
  }

  setSearch('');
}

  return (
  <header>
    <h1>
      IP address tracker
    </h1>
    <form onSubmit={handleSubmit}>
      <input
       value={search} 
       placeholder="Search for any ip addresses or domain" 
       type="text" 
       onChange={(e) => setSearch(e.target.value)}
       />
      <button type="submit"><img src={icon} alt="arrow-icon"/></button>
    </form>
  </header>
  )
}

export default Header
