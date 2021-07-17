import { Layout } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../../assests/style/admin-layout.scss';

export default function MainLayout({ children }) {
  return (
    <Layout className="admin-layout__container">
      <Header />
      <Layout.Content className="admin-layout__content">
        <div className="admin-layout-background">
          {children}
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}