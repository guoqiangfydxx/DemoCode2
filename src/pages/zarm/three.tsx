/** @format */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import BScroll, { Wheel, BScrollInstance } from 'better-scroll';
import classNames from 'classnames';
import DATA from './data';
import { SeletedIndex, DataItem, Props } from './type';
import './index.scss';
BScroll.use(Wheel);

const stopPropagation = (e: { stopPropagation: () => void }) => {
  e.stopPropagation();
};

const preventDefault = (e: { preventDefault: () => void }) => {
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
    0, 0, 0
  ]);
  // const [selectedText, setSelectedText] = useState('open');

  const wrapperRef = useRef(null);
  const scrollRef = useRef<BScrollInstance[]>([]);

  const loadPickerData = useStableCallback(
    (newIndexPair: SeletedIndex, oldIndexPair: SeletedIndex) => {
      let provinces;
      let cities: DataItem[];
      let areas: DataItem[];
      // first instantiated
      if (!oldIndexPair) {
        provinces = DATA.map(({ value, name, disabled }) => ({
          value,
          name,
          disabled
        }));
        cities = DATA[newIndexPair[0]].subRegion;
        areas = cities[newIndexPair[1]].subRegion || [];
        setPickerData([provinces, cities, areas]);
      } else {
        // provinces'index changed, refresh cities data
        // eslint-disable-next-line no-lonely-if
        if (newIndexPair[0] !== oldIndexPair[0]) {
          cities = DATA[newIndexPair[0]].subRegion.slice();
          areas = (
            (cities[newIndexPair[1]] || cities[0]).subRegion || []
          ).slice();
          setPickerData((prev) => {
            const next = [...prev];
            next.splice(1, 1, cities);
            next.splice(2, 1, areas);
            return next;
          });
          // Since cities data changed
          // refresh better-scroll to recaculate scrollHeight
          scrollRef.current[1].refresh();
          scrollRef.current[2].refresh();
        } else if (newIndexPair[1] !== oldIndexPair[1]) {
          cities = DATA[newIndexPair[0]].subRegion.slice();
          areas = (cities[newIndexPair[1]].subRegion || []).slice();
          setPickerData((prev) => {
            const next = [...prev];
            next.splice(2, 1, areas);
            return next;
          });
          scrollRef.current[2].refresh();
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
    setSelectedIndexPair!(currentSelectedIndexPair);
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

  // console.log('pickerData>>>>', pickerData);
  console.log('currentIndex', selectedIndexPair);

  return (
    <div className="container view">
      <div className="container-btn" onClick={handleShow}>
        {value}
      </div>
      <div>
        近日，有网友反映，当下各大银行建议民众注销不使用的银行卡，但很多人忘记自己有多少张银行卡，因此希望搭建可供本人登录查询的平台或线下网点，一次性查询、注销银行卡。对此，人民银行回应称，已经在工作安排中考虑
        “一人多卡”查询服务提供的问题。
        据荔枝新闻官方微博11月18日消息，徐州警方接到群众报警称，自己可能被拉入一个传销组织。经查，该团伙通过搭建虚拟货币质押挖矿平台，发行没有任何价值的“空气币”，诱骗投资人加入其传销组织，其会员共有约11万人。经摸排，民警赴多地共抓获8名犯罪嫌疑人，涉案资金达10亿元，扣押大量虚拟币及现金，市值约4.5亿元。
        据荔枝新闻官方微博11月18日消息，徐州警方接到群众报警称，自己可能被拉入一个传销组织。经查，该团伙通过搭建虚拟货币质押挖矿平台，发行没有任何价值的“空气币”，诱骗投资人加入其传销组织，其会员共有约11万人。经摸排，民警赴多地共抓获8名犯罪嫌疑人，涉案资金达10亿元，扣押大量虚拟币及现金，市值约4.5亿元。
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
          onTouchMove={preventDefault}
        >
          <CSSTransition in={visible} classNames="picker-move" timeout={300}>
            <div className="picker-panel" onClick={stopPropagation}>
              <div className="picker-choose border-bottom-1px">
                <span className="cancel" onClick={handleCancel}>
                  取消
                </span>
                <span className="confirm" onClick={handleConfirm}>
                  确定
                </span>
                <h1 className="picker-title">省市区选择</h1>
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
