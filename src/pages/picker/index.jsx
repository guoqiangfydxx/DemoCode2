/** @format */

// /** @format */

// import React, { useState } from 'react';
// // import { DemoBlock, sleep } from 'demos';
// import { Button, CascadePicker } from 'antd-mobile';
// // import { CascadePickerOption } from '../../cascade-picker';

// function CascadePickerDemo() {
//   const [visible, setVisible] = useState(false);
//   const options = [
//     {
//       label: '浙江',
//       value: '浙江',
//       children: [
//         {
//           label: '杭州',
//           value: '杭州',
//           disabled: true
//         },
//         {
//           label: '宁波',
//           value: '宁波'
//         }
//       ]
//     },
//     {
//       label: '江苏',
//       value: '江苏',
//       children: [
//         {
//           label: '南京',
//           value: '南京'
//         },
//         {
//           label: '苏州',
//           value: '苏州'
//         }
//       ]
//     }
//   ];
//   return (
//     <>
//       <Button
//         onClick={() => {
//           setVisible(true);
//         }}
//       >
//         选择
//       </Button>
//       <CascadePicker
//         title="级联选择"
//         options={options}
//         visible={visible}
//         onClose={() => {
//           setVisible(false);
//         }}
//         onConfirm={(val) => {
//           console.log('onConfirm', val);
//         }}
//         onSelect={(val) => {
//           console.log('onSelect', val);
//         }}
//       />
//     </>
//   );
// }

// export default () => (
//   <>
//     <div>
//       <CascadePickerDemo />
//     </div>
//   </>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
// import { Button, Page, Picker, CityPicker } from 'react-weui';
import { CityPicker } from 'react-weui/build/packages/components/picker';
// import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import city from './city';

class PickerDemo extends React.Component {
  state = {
    pickerShow: true,
    // pickerValue: '',
    pickerGroup: [
      {
        items: [
          {
            label: 'Item1'
          },
          {
            label: 'Item2',
            disabled: true
          },
          {
            label: 'Item3'
          },
          {
            label: 'Item4'
          },
          {
            label: 'Item5'
          }
        ]
      }
    ],
    cityShow: false
  };

  // hide() {
  //   this.setState({
  //     pickerShow: false
  //     // cityShow: false
  //   });
  // }

  handleClick = () => {
    this.setState({
      cityShow: true
    });
  };

  render() {
    const { pickerGroup, pickerShow, cityShow } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>open</Button>
        <div>
          哈尔滨市中级人民法院对哈尔滨市城镇化建设领导小组办公室原主任张明杰受贿、滥用职权案进行公开宣判，以受贿罪判处张明杰无期徒刑，剥夺政治权利终身，并处没收个人全部财产；以滥用职权罪判处张明杰有期徒刑十年，决定执行无期徒刑，剥夺政治权利终身，并处没收个人全部财产。对涉案违法所得及其孳息予以没收、追缴。
          违纪违法者，应实互通的理想状态，在技术层面、法律层面、道德伦理层面，都还有很长一段路要走。
          我们离元宇宙的世界有多远？这个问题可能短期内不会有答案，但各类打着元宇宙旗号的套路与骗局已经有滋生
          法院对哈尔滨市城镇化建设领导小组办公室原主任张明杰受贿、滥用职权案进行公开宣判，以受贿罪判处张明杰无期徒刑，剥夺政治权利终身，并处没收个人全部财产；以滥用职权罪判处张明杰有期徒刑十年，决定执行无期徒刑，剥夺政治权利终身，并处没收个人全部财产。对涉案违法所得及其孳息予以没收、追缴。
          违纪违法者，应实互通的理想状态，在技术层面、法律层面、道德伦理层面，都还有很长一段路要走。
          我们离元宇宙的世界有多远？这个问题可能短期内不会有答案，但各类打着元宇宙旗号的套路与骗局
          法院对哈尔滨市城镇化建设领导小组办公室原主任张明杰受贿、滥用职权案进行公开宣判，以受贿罪判处张明杰无期徒刑，剥夺政治权利终身，并处没收个人全部财产；以滥用职权罪判处张明杰有期徒刑十年，决定执行无期徒刑，剥夺政治权利终身，并处没收个人全部财产。对涉案违法所得及其孳息予以没收、追缴。
          违纪违法者，应实互通的理想状态，在技术层面、法律层面、道德伦理层面，都还有很长一段路要走。
          我们离元宇宙的世界有多远？这个问题可能短期内不会有答案，但各类打着元宇宙旗号的套路与骗局
          法院对哈尔滨市城镇化建设领导小组办公室原主任张明杰受贿、滥用职权案进行公开宣判，以受贿罪判处张明杰无期徒刑，剥夺政治权利终身，并处没收个人全部财产；以滥用职权罪判处张明杰有期徒刑十年，决定执行无期徒刑，剥夺政治权利终身，并处没收个人全部财产。对涉案违法所得及其孳息予以没收、追缴。
          违纪违法者，应实互通的理想状态，在技术层面、法律层面、道德伦理层面，都还有很长一段路要走。
          我们离元宇宙的世界有多远？这个问题可能短期内不会有答案，但各类打着元宇宙旗号的套路与骗局
          法院对哈尔滨市城镇化建设领导小组办公室原主任张明杰受贿、滥用职权案进行公开宣判，以受贿罪判处张明杰无期徒刑，剥夺政治权利终身，并处没收个人全部财产；以滥用职权罪判处张明杰有期徒刑十年，决定执行无期徒刑，剥夺政治权利终身，并处没收个人全部财产。对涉案违法所得及其孳息予以没收、追缴。
          违纪违法者，应实互通的理想状态，在技术层面、法律层面、道德伦理层面，都还有很长一段路要走。
          我们离元宇宙的世界有多远？这个问题可能短期内不会有答案，但各类打着元宇宙旗号的套路与骗局
          法院对哈尔滨市城镇化建设领导小组办公室原主任张明杰受贿、滥用职权案进行公开宣判，以受贿罪判处张明杰无期徒刑，剥夺政治权利终身，并处没收个人全部财产；以滥用职权罪判处张明杰有期徒刑十年，决定执行无期徒刑，剥夺政治权利终身，并处没收个人全部财产。对涉案违法所得及其孳息予以没收、追缴。
          违纪违法者，应实互通的理想状态，在技术层面、法律层面、道德伦理层面，都还有很长一段路要走。
          我们离元宇宙的世界有多远？这个问题可能短期内不会有答案，但各类打着元宇宙旗号的套路与骗局
          法院对哈尔滨市城镇化建设领导小组办公室原主任张明杰受贿、滥用职权案进行公开宣判，以受贿罪判处张明杰无期徒刑，剥夺政治权利终身，并处没收个人全部财产；以滥用职权罪判处张明杰有期徒刑十年，决定执行无期徒刑，剥夺政治权利终身，并处没收个人全部财产。对涉案违法所得及其孳息予以没收、追缴。
          违纪违法者，应实互通的理想状态，在技术层面、法律层面、道德伦理层面，都还有很长一段路要走。
          我们离元宇宙的世界有多远？这个问题可能短期内不会有答案，但各类打着元宇宙旗号的套路与骗局
          法院对哈尔滨市城镇化建设领导小组办公室原主任张明杰受贿、滥用职权案进行公开宣判，以受贿罪判处张明杰无期徒刑，剥夺政治权利终身，并处没收个人全部财产；以滥用职权罪判处张明杰有期徒刑十年，决定执行无期徒刑，剥夺政治权利终身，并处没收个人全部财产。对涉案违法所得及其孳息予以没收、追缴。
          违纪违法者，应实互通的理想状态，在技术层面、法律层面、道德伦理层面，都还有很长一段路要走。
          我们离元宇宙的世界有多远？这个问题可能短期内不会有答案，但各类打着元宇宙旗号的套路与骗局
          法院对哈尔滨市城镇化建设领导小组办公室原主任张明杰受贿、滥用职权案进行公开宣判，以受贿罪判处张明杰无期徒刑，剥夺政治权利终身，并处没收个人全部财产；以滥用职权罪判处张明杰有期徒刑十年，决定执行无期徒刑，剥夺政治权利终身，并处没收个人全部财产。对涉案违法所得及其孳息予以没收、追缴。
          违纪违法者，应实互通的理想状态，在技术层面、法律层面、道德伦理层面，都还有很长一段路要走。
          我们离元宇宙的世界有多远？这个问题可能短期内不会有答案，但各类打着元宇宙旗号的套路与骗局
        </div>
        <CityPicker
          data={city}
          onCancel={(e) => this.setState({ cityShow: false })}
          onChange={(text) => this.setState({ cityShow: false })}
          show={cityShow}
        />

        {/* <Picker
          onChange={(selected) => {
            let value = '';
            selected.forEach((s, i) => {
              value = pickerGroup[i].items[s].label;
            });
            this.setState({
              // pickerValue: value,
              // pickerShow: false
            });
          }}
          groups={pickerGroup}
          show={pickerShow}
          onCancel={(e) => this.setState({ pickerShow: false })}
        /> */}

        <br />
      </div>
    );
  }
}
export default PickerDemo;
