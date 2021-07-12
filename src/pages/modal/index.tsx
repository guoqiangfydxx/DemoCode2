import React, { useEffect } from 'react';
import { Modal } from 'antd';

const names: any[] = [];
for (let i = 0; i < 10; i++) {
  names.push({
    name: `测试${i}`,
    id: i,
  });
}
function TestModal() {
  useEffect(() => {
    for (const item of names) {
      Modal.confirm({
        title: item.name,
        content: '意大利点球击败英格兰夺冠!C罗,欧洲杯金靴​!媒体:光明网 2021-07-12 08:13 当地时间11日,在伦敦举行的2020年欧洲杯决赛中,意.',
        onOk() {
          console.log('ok', item.id);
        },
        onCancel() {
          console.log('cancel', item.id);
        },
        icon: null,
      });
    }
  }, []);

  return (
    <div>配置多个弹框一起出现，并且不同的弹框要有不同的问题</div>
  );
}
export default TestModal;
