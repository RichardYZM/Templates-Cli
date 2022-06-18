import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '',
});

export default function IconComponent(props) {
  return <IconFont {...props} />;
}
