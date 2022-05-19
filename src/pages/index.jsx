import styles from './index.less';
import { Cascader } from 'antd';
export default function IndexPage() {

  const options = [
    {
      code: 'zhejiang',
      name: 'Zhejiang',
      items: [
        {
          code: 'hangzhou',
          name: 'Hangzhou',
          items: [
            {
              code: 'xihu',
              name: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      code: 'jiangsu',
      name: 'Jiangsu',
      items: [
        {
          code: 'nanjing',
          name: 'Nanjing',
          items: [
            {
              code: 'zhonghuamen',
              name: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  function onChange(value) {
    console.log(value);
  }
  return (
    <div>
      <Cascader
        className={styles.demo}
        fieldNames={{ label: 'name', value: 'code', children: 'items' }}
        options={options}
        onChange={onChange}
        placeholder="Please select"
      />
    </div>
  );
}
