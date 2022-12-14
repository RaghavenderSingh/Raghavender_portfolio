import Titlebar from './Titlebar';
import Sidebar from './Sidebar';
import Explorer from './Explorer';
import Bottombar from './Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
