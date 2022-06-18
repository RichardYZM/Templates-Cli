import { connect, history, useLocation } from 'umi';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';

function Index({ }) {
  const location = useLocation();
  const [current, setCurrent] = useState('');

  useEffect(() => {
    list.forEach((item) => {
      if (item.children) {
        if (item.children.findIndex((s) => location.pathname.indexOf(s.path) >= 0) >= 0) {
          let currentItem = item.children.find((s) => location.pathname.indexOf(s.path) >= 0);
          setCurrent(currentItem?.key || '');
        }
      } else {
        if (item.path === location.pathname) {
          setCurrent(item.key || '');
        }
      }
    });
  }, []);

  let list = [
    { key: 'index', label: '首页', path: '/' },
    /* Generate Menu */
  ];

  function onClick(val) {
    history.push(val.item.props.path);
    setCurrent(val.key);
  }

  return (
    <Menu
      mode="inline"
      selectedKeys={[current]}
      defaultOpenKeys={[]}
      items={list}
      onClick={onClick}
    />
  );
}

function mapStateToProps({ }) {
  return {};
}

export default connect(mapStateToProps)(Index);
