import { connect } from 'umi';
import { Layout } from 'antd';
import styles from './index.scss';
import Menu from './menu';
const { Sider, Header, Content } = Layout;

function Index({ children }) {


  return (
    <Layout className={styles.normal}>
      <Header className={styles.header}>
        <div>LOGO</div>
        <div>header</div>
      </Header>
      <Layout>
        <Sider className={styles.Sider}>
          <Menu />
        </Sider>
        <Content className={styles.content}>
          {children}
        </Content>

      </Layout>
    </Layout>
  );
}

function mapStateToProps({ loading, layout }) {
  return {
  };
}

export default connect(mapStateToProps)(Index);
