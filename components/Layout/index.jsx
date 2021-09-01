import Navbar from '../Navbar';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      { children }
    </div>
  )
}