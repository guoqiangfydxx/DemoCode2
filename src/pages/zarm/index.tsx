/** @format */

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  MouseEventHandler,
  TouchEventHandler
} from 'react';
import { CSSTransition } from 'react-transition-group';
import BScroll, { Wheel, BScrollInstance } from 'better-scroll';
import classNames from 'classnames';
import DATA from './data';
import { SeletedIndex, DataItem, Props } from './type';
import './index.scss';

BScroll.use(Wheel);

const stopPropagation = (e: MouseEvent) => {
  e.stopPropagation();
};

const preventDefault = (e: MouseEvent) => {
  e.preventDefault();
};

const useStableCallback = (callback: any) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback((...args) => callbackRef.current(...args), []);
};

const initialValue = 'open';

const LinkageColumn = (props: Props) => {
  const { value = initialValue, onChange } = props;
  const [visible, setVisible] = useState(false);
  const [pickerData, setPickerData] = useState<DataItem[][]>(() => []);
  const [selectedIndexPair, setSelectedIndexPair] = useState<SeletedIndex>([
    6, 5
  ]);
  const wrapperRef = useRef(null);
  const scrollRef = useRef<BScrollInstance[]>([]);

  const loadPickerData = useStableCallback(
    (newIndexPair: SeletedIndex, oldIndexPair: SeletedIndex) => {
      let provinces;
      let cities: DataItem[];
      // first instantiated
      if (!oldIndexPair) {
        provinces = DATA.map(({ value, name, disabled }) => ({
          value,
          name,
          disabled
        }));
        cities = DATA[newIndexPair[0]].subRegion;
        setPickerData([provinces, cities]);
      } else {
        // provinces'index changed, refresh cities data
        // eslint-disable-next-line no-lonely-if
        if (newIndexPair[0] !== oldIndexPair[0]) {
          cities = DATA[newIndexPair[0]].subRegion.slice();
          setPickerData((prev) => {
            const next = [...prev];
            next.splice(1, 1, cities);
            return next;
          });
          // Since cities data changed
          // refresh better-scroll to recaculate scrollHeight
          scrollRef.current[1].refresh();
        }
      }
    }
  );

  const createWheels = useStableCallback(() => {
    const createWheel = (
      wheelWrapper: { children: (string | HTMLElement)[] } | null,
      i: number
    ) => {
      if (scrollRef.current[i]) {
        scrollRef.current[i].refresh();
      } else {
        const BS = (scrollRef.current[i] = new BScroll(
          wheelWrapper!.children[i],
          {
            wheel: {
              wheelWrapperClass: 'wheel-scroll',
              wheelItemClass: 'wheel-item',
              wheelDisabledItemClass: 'wheel-disabled-item',
              selectedIndex: selectedIndexPair[i]
            },
            useTransition: false,
            probeType: 3
          }
        ));

        // when any of wheels'scrolling ended , refresh data
        let prevSelectedIndexPair = selectedIndexPair;
        BS.on('scrollEnd', () => {
          const currentSelectedIndexPair = scrollRef.current.map(
            (wheel) => wheel.getSelectedIndex()
            // eslint-disable-next-line function-paren-newline
          );
          loadPickerData(currentSelectedIndexPair, prevSelectedIndexPair);
          prevSelectedIndexPair = currentSelectedIndexPair;
        });
      }
    };

    const wrapper = wrapperRef.current;
    for (let i = 0; i < pickerData.length; i++) {
      createWheel(wrapper, i);
    }
  });

  useEffect(() => {
    loadPickerData(selectedIndexPair);
  }, [loadPickerData, selectedIndexPair]);

  useEffect(() => {
    if (visible) {
      createWheels();
    }
  }, [visible, createWheels]);

  const handleShow = () => {
    if (visible) {
      return;
    }
    setVisible(true);
  };

  const handleHide = () => {
    setVisible(false);
  };

  const handleConfirm = () => {
    scrollRef.current.forEach((wheel) => {
      /*
       * if bs is scrolling, force it stop at the nearest wheel-item
       * or you can use 'restorePosition' method as the below
       */
      // wheel.stop()
      /*
       * if bs is scrolling, restore it to the start position
       * it is same with iOS picker and web Select element implementation
       * supported at v2.1.0
       */
      wheel.restorePosition();
    });
    handleHide();
    const currentSelectedIndexPair = scrollRef.current.map(
      (wheel) => wheel.getSelectedIndex()
      // eslint-disable-next-line function-paren-newline
    );
    setSelectedIndexPair(currentSelectedIndexPair);
    onChange!(
      pickerData
        .map((data, i) => {
          const index = currentSelectedIndexPair[i];
          return `${data[index].name}`;
        })
        .join('-')
    );
  };

  const handleCancel = () => {
    /*
     * if bs is scrolling, restore it to the start position
     * it is same with iOS picker and web Select element implementation
     * supported at v2.1.0
     */
    scrollRef.current.forEach((wheel) => {
      wheel.restorePosition();
    });
    handleHide();
  };

  console.log('currentIndex', selectedIndexPair);

  return (
    <div className="container view">
      <div className="container-btn" onClick={handleShow}>
        {value}
      </div>
      <div>
        哈尔滨市中级人民法院对哈尔滨市城镇化建设领导小组办公室原主任张明杰受贿、滥用职权案进行公开宣判，以受贿罪判处张明杰无期徒刑，剥夺政治权利终身，并处没收个人全部财产；以滥用职权罪判处张明杰有期徒刑十年，决定执行无期徒刑，剥夺政治权利终身，并处没收个人全部财产。对涉案违法所得及其孳息予以没收、追缴。
        违纪违法者，应该受到党纪国法严惩，这是再简单不过的道理。2014年9月，张明杰因涉嫌贪污、受贿与滥用职权罪被羁押。2020年，曲婉婷微博发文“为母叫屈”，受到众多网友质疑。人民群众痛恨腐败分子损害国家和人民的利益，攫取大量不义之财，满足亲属子女奢靡生活。如今，法院在查清案件事实的基础上进行公开宣判，以法治思维和法治方式惩治腐败，彰显了公平正义。严厉惩处腐败分子，是强化“不敢腐”高压态势的必然要求，任何腐败分子都要为自己的违纪违法行为付出相应代价。
        张明杰案之所以备受关注，不仅在于她是一位知名歌手的母亲，更因为她是侵害群众利益的“蛀虫”。据法院经审理查明的相关信息，张明杰徇私舞弊、滥用职权，致使国家征地补偿款被并购单位违规获取、部分职工安置款被违规使用，造成公共财产损失2亿多元。张明杰还在利用职务上的便利为并购单位谋取利益后，向该单位实际控制人索要500万元，以及折合9300多万元的股权。
        身为国家公职人员，张明杰本应用手中的权力为人民群众谋利益，但她全然忘却权为民用、利为民谋的道理，犯受贿罪、滥用职权罪，涉案金额巨大，严重损害人民群众的利益。对“蛀虫”依法予以严惩，正是深入整治群众身边腐败问题的具体实践，是反腐为民、反腐惠民的直接体现。
        每一次依法对腐败分子的惩治，都是一次正义的昭彰。网友这样评论张明杰案一审宣判的消息，“法律是公平的，正义不会缺席”“对腐败分子决不手软”“必须受到严惩，为其违法犯罪行为付出应有代价”。这再次证明，反腐败是民心所向，对腐败分子依法惩治正是回应人民群众的期待。
        务，从微软正努力打造“企业元宇宙”，到脸书改名为元宇宙（Metaverse）一词中的Meta……不仅科技公司在元宇宙赛道上争相布局，一些机构也积极参与其中。今天，我们就来聊聊元宇宙这个话题。
        不得不说的是，尽管已经耳熟能详，但元宇宙概念迄今仍没有清晰准确的定义。近30年前，科幻小说《雪崩》这样描述元宇宙：戴上耳机和目镜，找到连接终端，就能够以虚拟分身的方式进入由计算机模拟、与真实世界平行的虚拟空间。有人认为元宇宙会让人更有身临其境之感，用户将置身“实体互联网”之中；有人概括出元宇宙的几大特征，称元宇宙不仅是与真实世界平行的虚拟空间，更“和现实世界相互影响”，甚至拥有与现实世界相互联通的经济系统……多元的声音不一而足，可以明确的一点是：虽然元宇宙似乎拥有广阔空间和多种可能，但目前还是一个尚未成型的新兴事物。
        元宇宙概念的走红，背后有着相应的技术支撑和社会生活因素。一方面，经过多年的发展，虚拟现实、人工智能、区块链、5G通讯、可穿戴设备等底层技术的应用日渐成熟；另一方面，因为疫情等原因，线上办公、线上课程逐渐普及，人们在虚拟空间的停留时间更长，线上生活所占的比例不断升高。在一些具体的场景中，人们捕捉到元宇宙可能给生活带来的改变。从在游戏中参加虚拟演唱会，到在虚拟空间以虚拟形象参加会议，且会上可以用语音和动作进行实时交互，这些已经成为现实的案例，一定程度上打破了虚拟与现实的界线。尽管如此，有业内人士指出，元宇宙产业还远远达不到全产业覆盖和生态开放、经济自洽、虚实互通的理想状态，在技术层面、法律层面、道德伦理层面，都还有很长一段路要走。
        我们离元宇宙的世界有多远？这个问题可能短期内不会有答案，但各类打着元宇宙旗号的套路与骗局已经有滋生的苗头。一些知识付费项目把元宇宙包装成一夜暴富的机会，声称“未来只有元宇宙这一条路”，以贩卖焦虑的方式借机敛财。一些人言必称元宇宙，没有任何与之相关的实体内容却热衷于抢注各种相关商标，挖空心思从元宇宙概念中分得一杯“流量羹”。这就提示我们，对待新鲜事物，保持好奇和探索的同时，也要保留一份审慎和理性。即便元宇宙有可能成为真实世界的延伸与拓展，潜在的机遇和可能带来的变革值得期待，每个人仍需理性看待当前的元宇宙热潮，警惕任何以科技和未来为名义的忽悠。
        关于元宇宙的讨论仍在继续，有人充满乐观与向往，也有不少怀疑的声音。是镜花水月还是触摸得到的未来，是资本炒作还是新的赛道，是新瓶装旧酒还是科技新突破，下结论前不妨“让子弹飞一会儿”。不过可以明确的是，一些新概念承载着人们对技术发展的信心，以及对未来美好生活的期待。推动新概念及其产业逐步走向成熟需要时间，通向令人神往的科技未来需要脚踏实地、打好发展地基。正如不论虚拟现实、增强现实还是混合现实，中心词都是“现实”，这也预示着离开了现实的支撑，终归是海市蜃楼无本之木。“基础不牢地动山摇”，这样的道理不论在真实宇宙还是元宇宙，应该都是适用的。
        这正是：万物皆可元宇宙？理性常在少烦忧。
        宙热潮，警惕任何以科技和未来为名义的忽悠。
        关于元宇宙的讨论仍在继续，有人充满乐观与向往，也有不少怀疑的声音。是镜花水月还是触摸得到的未来，是资本炒作还是新的赛道，是新瓶装旧酒还是科技新突破，下结论前不妨“让子弹飞一会儿”。不过可以明确的是，一些新概念承载着人们对技术发展的信心，以及对未来美好生活的期待。推动新概念及其产业逐步走向成熟需要时间，通向令人神往的科技未来需要脚踏实地、打好发展地基。正如不论虚拟现实、增强现实还是混合现实，中心词都是“现实”，这也预示着离开了现实的支撑，终归是海市蜃楼无本之木。“基础不牢地动山摇”，这样的道理不论在真实宇宙还是元宇宙，应该都是适用的。
        这正是：万物皆可元宇宙？理性常在少烦忧。
      </div>
      <CSSTransition
        in={visible}
        classNames="picker-fade"
        timeout={300}
        onEnter={(node: { style: { display: string } }) => {
          node.style.display = 'block';
        }}
        onExited={(node) => {
          node.style.display = '';
        }}
      >
        <div
          className="picker"
          onClick={handleCancel}
          onTouchMove={
            preventDefault as unknown as TouchEventHandler<HTMLDivElement>
          }
        >
          <CSSTransition in={visible} classNames="picker-move" timeout={300}>
            <div
              className="picker-panel"
              onClick={
                stopPropagation as unknown as MouseEventHandler<HTMLDivElement>
              }
            >
              <div className="picker-choose border-bottom-1px">
                <span className="cancel" onClick={handleCancel}>
                  取消
                </span>
                <span className="confirm" onClick={handleConfirm}>
                  确定
                </span>
                <h1 className="picker-title">省市选择</h1>
              </div>
              <div className="picker-content">
                <div className="mask-top border-bottom-1px" />
                <div className="mask-bottom border-top-1px" />
                <div className="wheel-wrapper" ref={wrapperRef}>
                  {pickerData.map((data, index) => (
                    <div className="wheel" key={index}>
                      <ul className="wheel-scroll">
                        {data.map((item) => (
                          <li
                            key={item.value}
                            className={classNames([
                              'wheel-item',
                              { 'wheel-disabled-item': item.disabled }
                            ])}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="picker-footer" />
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
};

export default LinkageColumn;
