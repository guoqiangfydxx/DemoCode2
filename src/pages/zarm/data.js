/** @format */

const data = [
  {
    name: '北京',
    value: '110000',
    subRegion: [
      {
        name: '北京市',
        value: '110000',
        subRegion: [
          {
            name: '东城区',
            value: '110101'
          },
          {
            name: '西城区',
            value: '110102',
            disabled: true
          },
          {
            name: '朝阳区',
            value: '110105'
          },
          {
            name: '丰台区',
            value: '110106'
          },
          {
            name: '石景山区',
            value: '110107'
          },
          {
            name: '海淀区',
            value: '110108'
          },
          {
            name: '门头沟区',
            value: '110109'
          },
          {
            name: '房山区',
            value: '110111'
          },
          {
            name: '通州区',
            value: '110112'
          },
          {
            name: '顺义区',
            value: '110113'
          },
          {
            name: '昌平区',
            value: '110114'
          },
          {
            name: '大兴区',
            value: '110115'
          },
          {
            name: '怀柔区',
            value: '110116'
          },
          {
            name: '平谷区',
            value: '110117'
          },
          {
            name: '密云县',
            value: '110228'
          },
          {
            name: '延庆县',
            value: '110229'
          }
        ]
      }
    ]
  },
  {
    name: '天津',
    value: '120000',
    disabled: true,
    subRegion: [
      {
        name: '天津市',
        value: '120000',
        subRegion: [
          {
            name: '和平区',
            value: '120101'
          },
          {
            name: '河东区',
            value: '120102'
          },
          {
            name: '河西区',
            value: '120103'
          },
          {
            name: '南开区',
            value: '120104'
          },
          {
            name: '河北区',
            value: '120105'
          },
          {
            name: '红桥区',
            value: '120106'
          },
          {
            name: '东丽区',
            value: '120110'
          },
          {
            name: '西青区',
            value: '120111'
          },
          {
            name: '津南区',
            value: '120112'
          },
          {
            name: '北辰区',
            value: '120113'
          },
          {
            name: '武清区',
            value: '120114'
          },
          {
            name: '宝坻区',
            value: '120115'
          },
          {
            name: '滨海新区',
            value: '120116'
          },
          {
            name: '宁河县',
            value: '120221'
          },
          {
            name: '静海县',
            value: '120223'
          },
          {
            name: '蓟县',
            value: '120225'
          }
        ]
      }
    ]
  },
  {
    name: '河北省',
    value: '130000',
    subRegion: [
      {
        name: '石家庄市',
        value: '130100',
        subRegion: [
          {
            name: '市辖区',
            value: '130101'
          },
          {
            name: '长安区',
            value: '130102'
          },
          {
            name: '桥西区',
            value: '130104'
          },
          {
            name: '新华区',
            value: '130105'
          },
          {
            name: '井陉矿区',
            value: '130107'
          },
          {
            name: '裕华区',
            value: '130108'
          },
          {
            name: '藁城区',
            value: '130109'
          },
          {
            name: '鹿泉区',
            value: '130110'
          },
          {
            name: '栾城区',
            value: '130111'
          },
          {
            name: '井陉县',
            value: '130121'
          },
          {
            name: '正定县',
            value: '130123'
          },
          {
            name: '行唐县',
            value: '130125'
          },
          {
            name: '灵寿县',
            value: '130126'
          },
          {
            name: '高邑县',
            value: '130127'
          },
          {
            name: '深泽县',
            value: '130128'
          },
          {
            name: '赞皇县',
            value: '130129'
          },
          {
            name: '无极县',
            value: '130130'
          },
          {
            name: '平山县',
            value: '130131'
          },
          {
            name: '元氏县',
            value: '130132'
          },
          {
            name: '赵县',
            value: '130133'
          },
          {
            name: '辛集市',
            value: '130181'
          },
          {
            name: '晋州市',
            value: '130183'
          },
          {
            name: '新乐市',
            value: '130184'
          }
        ]
      },
      {
        name: '唐山市',
        value: '130200',
        // disabled: true,
        subRegion: [
          // {
          //   name: '市辖区',
          //   value: '130201'
          // },
          // {
          //   name: '路南区',
          //   value: '130202'
          // },
          // {
          //   name: '路北区',
          //   value: '130203'
          // },
          // {
          //   name: '古冶区',
          //   value: '130204'
          // },
          // {
          //   name: '开平区',
          //   value: '130205'
          // },
          // {
          //   name: '丰南区',
          //   value: '130207'
          // },
          // {
          //   name: '丰润区',
          //   value: '130208'
          // },
          // {
          //   name: '曹妃甸区',
          //   value: '130209'
          // },
          // {
          //   name: '滦县',
          //   value: '130223'
          // },
          // {
          //   name: '滦南县',
          //   value: '130224'
          // },
          // {
          //   name: '乐亭县',
          //   value: '130225'
          // },
          // {
          //   name: '迁西县',
          //   value: '130227'
          // },
          // {
          //   name: '玉田县',
          //   value: '130229'
          // },
          {
            name: '遵化市',
            value: '130281'
          },
          {
            name: '迁安市',
            value: '130283'
          }
        ]
      },
      {
        name: '秦皇岛市',
        value: '130300',
        subRegion: [
          {
            name: '市辖区',
            value: '130301'
          },
          {
            name: '海港区',
            value: '130302'
          },
          {
            name: '山海关区',
            value: '130303'
          },
          {
            name: '北戴河区',
            value: '130304'
          },
          {
            name: '青龙满族自治县',
            value: '130321'
          },
          {
            name: '昌黎县',
            value: '130322'
          },
          {
            name: '抚宁县',
            value: '130323'
          },
          {
            name: '卢龙县',
            value: '130324'
          }
        ]
      },
      {
        name: '邯郸市',
        value: '130400',
        subRegion: [
          {
            name: '市辖区',
            value: '130401'
          },
          {
            name: '邯山区',
            value: '130402'
          },
          {
            name: '丛台区',
            value: '130403'
          },
          {
            name: '复兴区',
            value: '130404'
          },
          {
            name: '峰峰矿区',
            value: '130406'
          },
          {
            name: '邯郸县',
            value: '130421'
          },
          {
            name: '临漳县',
            value: '130423'
          },
          {
            name: '成安县',
            value: '130424'
          },
          {
            name: '大名县',
            value: '130425'
          },
          {
            name: '涉县',
            value: '130426'
          },
          {
            name: '磁县',
            value: '130427'
          },
          {
            name: '肥乡县',
            value: '130428'
          },
          {
            name: '永年县',
            value: '130429'
          },
          {
            name: '邱县',
            value: '130430'
          },
          {
            name: '鸡泽县',
            value: '130431'
          },
          {
            name: '广平县',
            value: '130432'
          },
          {
            name: '馆陶县',
            value: '130433'
          },
          {
            name: '魏县',
            value: '130434'
          },
          {
            name: '曲周县',
            value: '130435'
          },
          {
            name: '武安市',
            value: '130481'
          }
        ]
      },
      {
        name: '邢台市',
        value: '130500',
        subRegion: [
          {
            name: '市辖区',
            value: '130501'
          },
          {
            name: '桥东区',
            value: '130502'
          },
          {
            name: '桥西区',
            value: '130503'
          },
          {
            name: '邢台县',
            value: '130521'
          },
          {
            name: '临城县',
            value: '130522'
          },
          {
            name: '内丘县',
            value: '130523'
          },
          {
            name: '柏乡县',
            value: '130524'
          },
          {
            name: '隆尧县',
            value: '130525'
          },
          {
            name: '任县',
            value: '130526'
          },
          {
            name: '南和县',
            value: '130527'
          },
          {
            name: '宁晋县',
            value: '130528'
          },
          {
            name: '巨鹿县',
            value: '130529'
          },
          {
            name: '新河县',
            value: '130530'
          },
          {
            name: '广宗县',
            value: '130531'
          },
          {
            name: '平乡县',
            value: '130532'
          },
          {
            name: '威县',
            value: '130533'
          },
          {
            name: '清河县',
            value: '130534'
          },
          {
            name: '临西县',
            value: '130535'
          },
          {
            name: '南宫市',
            value: '130581'
          },
          {
            name: '沙河市',
            value: '130582'
          }
        ]
      },
      {
        name: '保定市',
        value: '130600',
        subRegion: [
          {
            name: '市辖区',
            value: '130601'
          },
          {
            name: '新市区',
            value: '130602'
          },
          {
            name: '北市区',
            value: '130603'
          },
          {
            name: '南市区',
            value: '130604'
          },
          {
            name: '满城县',
            value: '130621'
          },
          {
            name: '清苑县',
            value: '130622'
          },
          {
            name: '涞水县',
            value: '130623'
          },
          {
            name: '阜平县',
            value: '130624'
          },
          {
            name: '徐水县',
            value: '130625'
          },
          {
            name: '定兴县',
            value: '130626'
          },
          {
            name: '唐县',
            value: '130627'
          },
          {
            name: '高阳县',
            value: '130628'
          },
          {
            name: '容城县',
            value: '130629'
          },
          {
            name: '涞源县',
            value: '130630'
          },
          {
            name: '望都县',
            value: '130631'
          },
          {
            name: '安新县',
            value: '130632'
          },
          {
            name: '易县',
            value: '130633'
          },
          {
            name: '曲阳县',
            value: '130634'
          },
          {
            name: '蠡县',
            value: '130635'
          },
          {
            name: '顺平县',
            value: '130636'
          },
          {
            name: '博野县',
            value: '130637'
          },
          {
            name: '雄县',
            value: '130638'
          },
          {
            name: '涿州市',
            value: '130681'
          },
          {
            name: '定州市',
            value: '130682'
          },
          {
            name: '安国市',
            value: '130683'
          },
          {
            name: '高碑店市',
            value: '130684'
          }
        ]
      },
      {
        name: '张家口市',
        value: '130700',
        subRegion: [
          {
            name: '市辖区',
            value: '130701'
          },
          {
            name: '桥东区',
            value: '130702'
          },
          {
            name: '桥西区',
            value: '130703'
          },
          {
            name: '宣化区',
            value: '130705'
          },
          {
            name: '下花园区',
            value: '130706'
          },
          {
            name: '宣化县',
            value: '130721'
          },
          {
            name: '张北县',
            value: '130722'
          },
          {
            name: '康保县',
            value: '130723'
          },
          {
            name: '沽源县',
            value: '130724'
          },
          {
            name: '尚义县',
            value: '130725'
          },
          {
            name: '蔚县',
            value: '130726'
          },
          {
            name: '阳原县',
            value: '130727'
          },
          {
            name: '怀安县',
            value: '130728'
          },
          {
            name: '万全县',
            value: '130729'
          },
          {
            name: '怀来县',
            value: '130730'
          },
          {
            name: '涿鹿县',
            value: '130731'
          },
          {
            name: '赤城县',
            value: '130732'
          },
          {
            name: '崇礼县',
            value: '130733'
          }
        ]
      },
      {
        name: '承德市',
        value: '130800',
        subRegion: [
          {
            name: '市辖区',
            value: '130801'
          },
          {
            name: '双桥区',
            value: '130802'
          },
          {
            name: '双滦区',
            value: '130803'
          },
          {
            name: '鹰手营子矿区',
            value: '130804'
          },
          {
            name: '承德县',
            value: '130821'
          },
          {
            name: '兴隆县',
            value: '130822'
          },
          {
            name: '平泉县',
            value: '130823'
          },
          {
            name: '滦平县',
            value: '130824'
          },
          {
            name: '隆化县',
            value: '130825'
          },
          {
            name: '丰宁满族自治县',
            value: '130826'
          },
          {
            name: '宽城满族自治县',
            value: '130827'
          },
          {
            name: '围场满族蒙古族自治县',
            value: '130828'
          }
        ]
      },
      {
        name: '沧州市',
        value: '130900',
        subRegion: [
          {
            name: '市辖区',
            value: '130901'
          },
          {
            name: '新华区',
            value: '130902'
          },
          {
            name: '运河区',
            value: '130903'
          },
          {
            name: '沧县',
            value: '130921'
          },
          {
            name: '青县',
            value: '130922'
          },
          {
            name: '东光县',
            value: '130923'
          },
          {
            name: '海兴县',
            value: '130924'
          },
          {
            name: '盐山县',
            value: '130925'
          },
          {
            name: '肃宁县',
            value: '130926'
          },
          {
            name: '南皮县',
            value: '130927'
          },
          {
            name: '吴桥县',
            value: '130928'
          },
          {
            name: '献县',
            value: '130929'
          },
          {
            name: '孟村回族自治县',
            value: '130930'
          },
          {
            name: '泊头市',
            value: '130981'
          },
          {
            name: '任丘市',
            value: '130982'
          },
          {
            name: '黄骅市',
            value: '130983'
          },
          {
            name: '河间市',
            value: '130984'
          }
        ]
      },
      {
        name: '廊坊市',
        value: '131000',
        subRegion: [
          {
            name: '市辖区',
            value: '131001'
          },
          {
            name: '安次区',
            value: '131002'
          },
          {
            name: '广阳区',
            value: '131003'
          },
          {
            name: '固安县',
            value: '131022'
          },
          {
            name: '永清县',
            value: '131023'
          },
          {
            name: '香河县',
            value: '131024'
          },
          {
            name: '大城县',
            value: '131025'
          },
          {
            name: '文安县',
            value: '131026'
          },
          {
            name: '大厂回族自治县',
            value: '131028'
          },
          {
            name: '霸州市',
            value: '131081'
          },
          {
            name: '三河市',
            value: '131082'
          }
        ]
      },
      {
        name: '衡水市',
        value: '131100',
        subRegion: [
          {
            name: '市辖区',
            value: '131101'
          },
          {
            name: '桃城区',
            value: '131102'
          },
          {
            name: '枣强县',
            value: '131121'
          },
          {
            name: '武邑县',
            value: '131122'
          },
          {
            name: '武强县',
            value: '131123'
          },
          {
            name: '饶阳县',
            value: '131124'
          },
          {
            name: '安平县',
            value: '131125'
          },
          {
            name: '故城县',
            value: '131126'
          },
          {
            name: '景县',
            value: '131127'
          },
          {
            name: '阜城县',
            value: '131128'
          },
          {
            name: '冀州市',
            value: '131181'
          },
          {
            name: '深州市',
            value: '131182'
          }
        ]
      }
    ]
  },
  {
    name: '山西省',
    value: '140000',
    subRegion: [
      {
        name: '太原市',
        value: '140100',
        subRegion: [
          {
            name: '市辖区',
            value: '140101'
          },
          {
            name: '小店区',
            value: '140105'
          },
          {
            name: '迎泽区',
            value: '140106'
          },
          {
            name: '杏花岭区',
            value: '140107'
          },
          {
            name: '尖草坪区',
            value: '140108'
          },
          {
            name: '万柏林区',
            value: '140109'
          },
          {
            name: '晋源区',
            value: '140110'
          },
          {
            name: '清徐县',
            value: '140121'
          },
          {
            name: '阳曲县',
            value: '140122'
          },
          {
            name: '娄烦县',
            value: '140123'
          },
          {
            name: '古交市',
            value: '140181'
          }
        ]
      },
      {
        name: '大同市',
        value: '140200',
        subRegion: [
          {
            name: '市辖区',
            value: '140201'
          },
          {
            name: '城区',
            value: '140202'
          },
          {
            name: '矿区',
            value: '140203'
          },
          {
            name: '南郊区',
            value: '140211'
          },
          {
            name: '新荣区',
            value: '140212'
          },
          {
            name: '阳高县',
            value: '140221'
          },
          {
            name: '天镇县',
            value: '140222'
          },
          {
            name: '广灵县',
            value: '140223'
          },
          {
            name: '灵丘县',
            value: '140224'
          },
          {
            name: '浑源县',
            value: '140225'
          },
          {
            name: '左云县',
            value: '140226'
          },
          {
            name: '大同县',
            value: '140227'
          }
        ]
      },
      {
        name: '阳泉市',
        value: '140300',
        subRegion: [
          {
            name: '市辖区',
            value: '140301'
          },
          {
            name: '城区',
            value: '140302'
          },
          {
            name: '矿区',
            value: '140303'
          },
          {
            name: '郊区',
            value: '140311'
          },
          {
            name: '平定县',
            value: '140321'
          },
          {
            name: '盂县',
            value: '140322'
          }
        ]
      },
      {
        name: '长治市',
        value: '140400',
        subRegion: [
          {
            name: '市辖区',
            value: '140401'
          },
          {
            name: '城区',
            value: '140402'
          },
          {
            name: '郊区',
            value: '140411'
          },
          {
            name: '长治县',
            value: '140421'
          },
          {
            name: '襄垣县',
            value: '140423'
          },
          {
            name: '屯留县',
            value: '140424'
          },
          {
            name: '平顺县',
            value: '140425'
          },
          {
            name: '黎城县',
            value: '140426'
          },
          {
            name: '壶关县',
            value: '140427'
          },
          {
            name: '长子县',
            value: '140428'
          },
          {
            name: '武乡县',
            value: '140429'
          },
          {
            name: '沁县',
            value: '140430'
          },
          {
            name: '沁源县',
            value: '140431'
          },
          {
            name: '潞城市',
            value: '140481'
          }
        ]
      },
      {
        name: '晋城市',
        value: '140500',
        subRegion: [
          {
            name: '市辖区',
            value: '140501'
          },
          {
            name: '城区',
            value: '140502'
          },
          {
            name: '沁水县',
            value: '140521'
          },
          {
            name: '阳城县',
            value: '140522'
          },
          {
            name: '陵川县',
            value: '140524'
          },
          {
            name: '泽州县',
            value: '140525'
          },
          {
            name: '高平市',
            value: '140581'
          }
        ]
      },
      {
        name: '朔州市',
        value: '140600',
        subRegion: [
          {
            name: '市辖区',
            value: '140601'
          },
          {
            name: '朔城区',
            value: '140602'
          },
          {
            name: '平鲁区',
            value: '140603'
          },
          {
            name: '山阴县',
            value: '140621'
          },
          {
            name: '应县',
            value: '140622'
          },
          {
            name: '右玉县',
            value: '140623'
          },
          {
            name: '怀仁县',
            value: '140624'
          }
        ]
      },
      {
        name: '晋中市',
        value: '140700',
        subRegion: [
          {
            name: '市辖区',
            value: '140701'
          },
          {
            name: '榆次区',
            value: '140702'
          },
          {
            name: '榆社县',
            value: '140721'
          },
          {
            name: '左权县',
            value: '140722'
          },
          {
            name: '和顺县',
            value: '140723'
          },
          {
            name: '昔阳县',
            value: '140724'
          },
          {
            name: '寿阳县',
            value: '140725'
          },
          {
            name: '太谷县',
            value: '140726'
          },
          {
            name: '祁县',
            value: '140727'
          },
          {
            name: '平遥县',
            value: '140728'
          },
          {
            name: '灵石县',
            value: '140729'
          },
          {
            name: '介休市',
            value: '140781'
          }
        ]
      },
      {
        name: '运城市',
        value: '140800',
        subRegion: [
          {
            name: '市辖区',
            value: '140801'
          },
          {
            name: '盐湖区',
            value: '140802'
          },
          {
            name: '临猗县',
            value: '140821'
          },
          {
            name: '万荣县',
            value: '140822'
          },
          {
            name: '闻喜县',
            value: '140823'
          },
          {
            name: '稷山县',
            value: '140824'
          },
          {
            name: '新绛县',
            value: '140825'
          },
          {
            name: '绛县',
            value: '140826'
          },
          {
            name: '垣曲县',
            value: '140827'
          },
          {
            name: '夏县',
            value: '140828'
          },
          {
            name: '平陆县',
            value: '140829'
          },
          {
            name: '芮城县',
            value: '140830'
          },
          {
            name: '永济市',
            value: '140881'
          },
          {
            name: '河津市',
            value: '140882'
          }
        ]
      },
      {
        name: '忻州市',
        value: '140900',
        subRegion: [
          {
            name: '市辖区',
            value: '140901'
          },
          {
            name: '忻府区',
            value: '140902'
          },
          {
            name: '定襄县',
            value: '140921'
          },
          {
            name: '五台县',
            value: '140922'
          },
          {
            name: '代县',
            value: '140923'
          },
          {
            name: '繁峙县',
            value: '140924'
          },
          {
            name: '宁武县',
            value: '140925'
          },
          {
            name: '静乐县',
            value: '140926'
          },
          {
            name: '神池县',
            value: '140927'
          },
          {
            name: '五寨县',
            value: '140928'
          },
          {
            name: '岢岚县',
            value: '140929'
          },
          {
            name: '河曲县',
            value: '140930'
          },
          {
            name: '保德县',
            value: '140931'
          },
          {
            name: '偏关县',
            value: '140932'
          },
          {
            name: '原平市',
            value: '140981'
          }
        ]
      },
      {
        name: '临汾市',
        value: '141000',
        subRegion: [
          {
            name: '市辖区',
            value: '141001'
          },
          {
            name: '尧都区',
            value: '141002'
          },
          {
            name: '曲沃县',
            value: '141021'
          },
          {
            name: '翼城县',
            value: '141022'
          },
          {
            name: '襄汾县',
            value: '141023'
          },
          {
            name: '洪洞县',
            value: '141024'
          },
          {
            name: '古县',
            value: '141025'
          },
          {
            name: '安泽县',
            value: '141026'
          },
          {
            name: '浮山县',
            value: '141027'
          },
          {
            name: '吉县',
            value: '141028'
          },
          {
            name: '乡宁县',
            value: '141029'
          },
          {
            name: '大宁县',
            value: '141030'
          },
          {
            name: '隰县',
            value: '141031'
          },
          {
            name: '永和县',
            value: '141032'
          },
          {
            name: '蒲县',
            value: '141033'
          },
          {
            name: '汾西县',
            value: '141034'
          },
          {
            name: '侯马市',
            value: '141081'
          },
          {
            name: '霍州市',
            value: '141082'
          }
        ]
      },
      {
        name: '吕梁市',
        value: '141100',
        subRegion: [
          {
            name: '市辖区',
            value: '141101'
          },
          {
            name: '离石区',
            value: '141102'
          },
          {
            name: '文水县',
            value: '141121'
          },
          {
            name: '交城县',
            value: '141122'
          },
          {
            name: '兴县',
            value: '141123'
          },
          {
            name: '临县',
            value: '141124'
          },
          {
            name: '柳林县',
            value: '141125'
          },
          {
            name: '石楼县',
            value: '141126'
          },
          {
            name: '岚县',
            value: '141127'
          },
          {
            name: '方山县',
            value: '141128'
          },
          {
            name: '中阳县',
            value: '141129'
          },
          {
            name: '交口县',
            value: '141130'
          },
          {
            name: '孝义市',
            value: '141181'
          },
          {
            name: '汾阳市',
            value: '141182'
          }
        ]
      }
    ]
  },
  {
    name: '内蒙古自治区',
    value: '150000',
    subRegion: [
      {
        name: '呼和浩特市',
        value: '150100',
        subRegion: [
          {
            name: '市辖区',
            value: '150101'
          },
          {
            name: '新城区',
            value: '150102'
          },
          {
            name: '回民区',
            value: '150103'
          },
          {
            name: '玉泉区',
            value: '150104'
          },
          {
            name: '赛罕区',
            value: '150105'
          },
          {
            name: '土默特左旗',
            value: '150121'
          },
          {
            name: '托克托县',
            value: '150122'
          },
          {
            name: '和林格尔县',
            value: '150123'
          },
          {
            name: '清水河县',
            value: '150124'
          },
          {
            name: '武川县',
            value: '150125'
          }
        ]
      },
      {
        name: '包头市',
        value: '150200',
        subRegion: [
          {
            name: '市辖区',
            value: '150201'
          },
          {
            name: '东河区',
            value: '150202'
          },
          {
            name: '昆都仑区',
            value: '150203'
          },
          {
            name: '青山区',
            value: '150204'
          },
          {
            name: '石拐区',
            value: '150205'
          },
          {
            name: '白云鄂博矿区',
            value: '150206'
          },
          {
            name: '九原区',
            value: '150207'
          },
          {
            name: '土默特右旗',
            value: '150221'
          },
          {
            name: '固阳县',
            value: '150222'
          },
          {
            name: '达尔罕茂明安联合旗',
            value: '150223'
          }
        ]
      },
      {
        name: '乌海市',
        value: '150300',
        subRegion: [
          {
            name: '市辖区',
            value: '150301'
          },
          {
            name: '海勃湾区',
            value: '150302'
          },
          {
            name: '海南区',
            value: '150303'
          },
          {
            name: '乌达区',
            value: '150304'
          }
        ]
      },
      {
        name: '赤峰市',
        value: '150400',
        subRegion: [
          {
            name: '市辖区',
            value: '150401'
          },
          {
            name: '红山区',
            value: '150402'
          },
          {
            name: '元宝山区',
            value: '150403'
          },
          {
            name: '松山区',
            value: '150404'
          },
          {
            name: '阿鲁科尔沁旗',
            value: '150421'
          },
          {
            name: '巴林左旗',
            value: '150422'
          },
          {
            name: '巴林右旗',
            value: '150423'
          },
          {
            name: '林西县',
            value: '150424'
          },
          {
            name: '克什克腾旗',
            value: '150425'
          },
          {
            name: '翁牛特旗',
            value: '150426'
          },
          {
            name: '喀喇沁旗',
            value: '150428'
          },
          {
            name: '宁城县',
            value: '150429'
          },
          {
            name: '敖汉旗',
            value: '150430'
          }
        ]
      },
      {
        name: '通辽市',
        value: '150500',
        subRegion: [
          {
            name: '市辖区',
            value: '150501'
          },
          {
            name: '科尔沁区',
            value: '150502'
          },
          {
            name: '科尔沁左翼中旗',
            value: '150521'
          },
          {
            name: '科尔沁左翼后旗',
            value: '150522'
          },
          {
            name: '开鲁县',
            value: '150523'
          },
          {
            name: '库伦旗',
            value: '150524'
          },
          {
            name: '奈曼旗',
            value: '150525'
          },
          {
            name: '扎鲁特旗',
            value: '150526'
          },
          {
            name: '霍林郭勒市',
            value: '150581'
          }
        ]
      },
      {
        name: '鄂尔多斯市',
        value: '150600',
        subRegion: [
          {
            name: '市辖区',
            value: '150601'
          },
          {
            name: '东胜区',
            value: '150602'
          },
          {
            name: '达拉特旗',
            value: '150621'
          },
          {
            name: '准格尔旗',
            value: '150622'
          },
          {
            name: '鄂托克前旗',
            value: '150623'
          },
          {
            name: '鄂托克旗',
            value: '150624'
          },
          {
            name: '杭锦旗',
            value: '150625'
          },
          {
            name: '乌审旗',
            value: '150626'
          },
          {
            name: '伊金霍洛旗',
            value: '150627'
          }
        ]
      },
      {
        name: '呼伦贝尔市',
        value: '150700',
        subRegion: [
          {
            name: '市辖区',
            value: '150701'
          },
          {
            name: '海拉尔区',
            value: '150702'
          },
          {
            name: '扎赉诺尔区',
            value: '150703'
          },
          {
            name: '阿荣旗',
            value: '150721'
          },
          {
            name: '莫力达瓦达斡尔族自治旗',
            value: '150722'
          },
          {
            name: '鄂伦春自治旗',
            value: '150723'
          },
          {
            name: '鄂温克族自治旗',
            value: '150724'
          },
          {
            name: '陈巴尔虎旗',
            value: '150725'
          },
          {
            name: '新巴尔虎左旗',
            value: '150726'
          },
          {
            name: '新巴尔虎右旗',
            value: '150727'
          },
          {
            name: '满洲里市',
            value: '150781'
          },
          {
            name: '牙克石市',
            value: '150782'
          },
          {
            name: '扎兰屯市',
            value: '150783'
          },
          {
            name: '额尔古纳市',
            value: '150784'
          },
          {
            name: '根河市',
            value: '150785'
          }
        ]
      },
      {
        name: '巴彦淖尔市',
        value: '150800',
        subRegion: [
          {
            name: '市辖区',
            value: '150801'
          },
          {
            name: '临河区',
            value: '150802'
          },
          {
            name: '五原县',
            value: '150821'
          },
          {
            name: '磴口县',
            value: '150822'
          },
          {
            name: '乌拉特前旗',
            value: '150823'
          },
          {
            name: '乌拉特中旗',
            value: '150824'
          },
          {
            name: '乌拉特后旗',
            value: '150825'
          },
          {
            name: '杭锦后旗',
            value: '150826'
          }
        ]
      },
      {
        name: '乌兰察布市',
        value: '150900',
        subRegion: [
          {
            name: '市辖区',
            value: '150901'
          },
          {
            name: '集宁区',
            value: '150902'
          },
          {
            name: '卓资县',
            value: '150921'
          },
          {
            name: '化德县',
            value: '150922'
          },
          {
            name: '商都县',
            value: '150923'
          },
          {
            name: '兴和县',
            value: '150924'
          },
          {
            name: '凉城县',
            value: '150925'
          },
          {
            name: '察哈尔右翼前旗',
            value: '150926'
          },
          {
            name: '察哈尔右翼中旗',
            value: '150927'
          },
          {
            name: '察哈尔右翼后旗',
            value: '150928'
          },
          {
            name: '四子王旗',
            value: '150929'
          },
          {
            name: '丰镇市',
            value: '150981'
          }
        ]
      },
      {
        name: '兴安盟',
        value: '152200',
        subRegion: [
          {
            name: '乌兰浩特市',
            value: '152201'
          },
          {
            name: '阿尔山市',
            value: '152202'
          },
          {
            name: '科尔沁右翼前旗',
            value: '152221'
          },
          {
            name: '科尔沁右翼中旗',
            value: '152222'
          },
          {
            name: '扎赉特旗',
            value: '152223'
          },
          {
            name: '突泉县',
            value: '152224'
          }
        ]
      },
      {
        name: '锡林郭勒盟',
        value: '152500',
        subRegion: [
          {
            name: '二连浩特市',
            value: '152501'
          },
          {
            name: '锡林浩特市',
            value: '152502'
          },
          {
            name: '阿巴嘎旗',
            value: '152522'
          },
          {
            name: '苏尼特左旗',
            value: '152523'
          },
          {
            name: '苏尼特右旗',
            value: '152524'
          },
          {
            name: '东乌珠穆沁旗',
            value: '152525'
          },
          {
            name: '西乌珠穆沁旗',
            value: '152526'
          },
          {
            name: '太仆寺旗',
            value: '152527'
          },
          {
            name: '镶黄旗',
            value: '152528'
          },
          {
            name: '正镶白旗',
            value: '152529'
          },
          {
            name: '正蓝旗',
            value: '152530'
          },
          {
            name: '多伦县',
            value: '152531'
          }
        ]
      },
      {
        name: '阿拉善盟',
        value: '152900',
        subRegion: [
          {
            name: '阿拉善左旗',
            value: '152921'
          },
          {
            name: '阿拉善右旗',
            value: '152922'
          },
          {
            name: '额济纳旗',
            value: '152923'
          }
        ]
      }
    ]
  },
  {
    name: '辽宁省',
    value: '210000',
    subRegion: [
      {
        name: '沈阳市',
        value: '210100',
        subRegion: [
          {
            name: '市辖区',
            value: '210101'
          },
          {
            name: '和平区',
            value: '210102'
          },
          {
            name: '沈河区',
            value: '210103'
          },
          {
            name: '大东区',
            value: '210104'
          },
          {
            name: '皇姑区',
            value: '210105'
          },
          {
            name: '铁西区',
            value: '210106'
          },
          {
            name: '苏家屯区',
            value: '210111'
          },
          {
            name: '浑南区',
            value: '210112'
          },
          {
            name: '沈北新区',
            value: '210113'
          },
          {
            name: '于洪区',
            value: '210114'
          },
          {
            name: '辽中县',
            value: '210122'
          },
          {
            name: '康平县',
            value: '210123'
          },
          {
            name: '法库县',
            value: '210124'
          },
          {
            name: '新民市',
            value: '210181'
          }
        ]
      },
      {
        name: '大连市',
        value: '210200',
        subRegion: [
          {
            name: '市辖区',
            value: '210201'
          },
          {
            name: '中山区',
            value: '210202'
          },
          {
            name: '西岗区',
            value: '210203'
          },
          {
            name: '沙河口区',
            value: '210204'
          },
          {
            name: '甘井子区',
            value: '210211'
          },
          {
            name: '旅顺口区',
            value: '210212'
          },
          {
            name: '金州区',
            value: '210213'
          },
          {
            name: '长海县',
            value: '210224'
          },
          {
            name: '瓦房店市',
            value: '210281'
          },
          {
            name: '普兰店市',
            value: '210282'
          },
          {
            name: '庄河市',
            value: '210283'
          }
        ]
      },
      {
        name: '鞍山市',
        value: '210300',
        subRegion: [
          {
            name: '市辖区',
            value: '210301'
          },
          {
            name: '铁东区',
            value: '210302'
          },
          {
            name: '铁西区',
            value: '210303'
          },
          {
            name: '立山区',
            value: '210304'
          },
          {
            name: '千山区',
            value: '210311'
          },
          {
            name: '台安县',
            value: '210321'
          },
          {
            name: '岫岩满族自治县',
            value: '210323'
          },
          {
            name: '海城市',
            value: '210381'
          }
        ]
      },
      {
        name: '抚顺市',
        value: '210400',
        subRegion: [
          {
            name: '市辖区',
            value: '210401'
          },
          {
            name: '新抚区',
            value: '210402'
          },
          {
            name: '东洲区',
            value: '210403'
          },
          {
            name: '望花区',
            value: '210404'
          },
          {
            name: '顺城区',
            value: '210411'
          },
          {
            name: '抚顺县',
            value: '210421'
          },
          {
            name: '新宾满族自治县',
            value: '210422'
          },
          {
            name: '清原满族自治县',
            value: '210423'
          }
        ]
      },
      {
        name: '本溪市',
        value: '210500',
        subRegion: [
          {
            name: '市辖区',
            value: '210501'
          },
          {
            name: '平山区',
            value: '210502'
          },
          {
            name: '溪湖区',
            value: '210503'
          },
          {
            name: '明山区',
            value: '210504'
          },
          {
            name: '南芬区',
            value: '210505'
          },
          {
            name: '本溪满族自治县',
            value: '210521'
          },
          {
            name: '桓仁满族自治县',
            value: '210522'
          }
        ]
      },
      {
        name: '丹东市',
        value: '210600',
        subRegion: [
          {
            name: '市辖区',
            value: '210601'
          },
          {
            name: '元宝区',
            value: '210602'
          },
          {
            name: '振兴区',
            value: '210603'
          },
          {
            name: '振安区',
            value: '210604'
          },
          {
            name: '宽甸满族自治县',
            value: '210624'
          },
          {
            name: '东港市',
            value: '210681'
          },
          {
            name: '凤城市',
            value: '210682'
          }
        ]
      },
      {
        name: '锦州市',
        value: '210700',
        subRegion: [
          {
            name: '市辖区',
            value: '210701'
          },
          {
            name: '古塔区',
            value: '210702'
          },
          {
            name: '凌河区',
            value: '210703'
          },
          {
            name: '太和区',
            value: '210711'
          },
          {
            name: '黑山县',
            value: '210726'
          },
          {
            name: '义县',
            value: '210727'
          },
          {
            name: '凌海市',
            value: '210781'
          },
          {
            name: '北镇市',
            value: '210782'
          }
        ]
      },
      {
        name: '营口市',
        value: '210800',
        subRegion: [
          {
            name: '市辖区',
            value: '210801'
          },
          {
            name: '站前区',
            value: '210802'
          },
          {
            name: '西市区',
            value: '210803'
          },
          {
            name: '鲅鱼圈区',
            value: '210804'
          },
          {
            name: '老边区',
            value: '210811'
          },
          {
            name: '盖州市',
            value: '210881'
          },
          {
            name: '大石桥市',
            value: '210882'
          }
        ]
      },
      {
        name: '阜新市',
        value: '210900',
        subRegion: [
          {
            name: '市辖区',
            value: '210901'
          },
          {
            name: '海州区',
            value: '210902'
          },
          {
            name: '新邱区',
            value: '210903'
          },
          {
            name: '太平区',
            value: '210904'
          },
          {
            name: '清河门区',
            value: '210905'
          },
          {
            name: '细河区',
            value: '210911'
          },
          {
            name: '阜新蒙古族自治县',
            value: '210921'
          },
          {
            name: '彰武县',
            value: '210922'
          }
        ]
      },
      {
        name: '辽阳市',
        value: '211000',
        subRegion: [
          {
            name: '市辖区',
            value: '211001'
          },
          {
            name: '白塔区',
            value: '211002'
          },
          {
            name: '文圣区',
            value: '211003'
          },
          {
            name: '宏伟区',
            value: '211004'
          },
          {
            name: '弓长岭区',
            value: '211005'
          },
          {
            name: '太子河区',
            value: '211011'
          },
          {
            name: '辽阳县',
            value: '211021'
          },
          {
            name: '灯塔市',
            value: '211081'
          }
        ]
      },
      {
        name: '盘锦市',
        value: '211100',
        subRegion: [
          {
            name: '市辖区',
            value: '211101'
          },
          {
            name: '双台子区',
            value: '211102'
          },
          {
            name: '兴隆台区',
            value: '211103'
          },
          {
            name: '大洼县',
            value: '211121'
          },
          {
            name: '盘山县',
            value: '211122'
          }
        ]
      },
      {
        name: '铁岭市',
        value: '211200',
        subRegion: [
          {
            name: '市辖区',
            value: '211201'
          },
          {
            name: '银州区',
            value: '211202'
          },
          {
            name: '清河区',
            value: '211204'
          },
          {
            name: '铁岭县',
            value: '211221'
          },
          {
            name: '西丰县',
            value: '211223'
          },
          {
            name: '昌图县',
            value: '211224'
          },
          {
            name: '调兵山市',
            value: '211281'
          },
          {
            name: '开原市',
            value: '211282'
          }
        ]
      },
      {
        name: '朝阳市',
        value: '211300',
        subRegion: [
          {
            name: '市辖区',
            value: '211301'
          },
          {
            name: '双塔区',
            value: '211302'
          },
          {
            name: '龙城区',
            value: '211303'
          },
          {
            name: '朝阳县',
            value: '211321'
          },
          {
            name: '建平县',
            value: '211322'
          },
          {
            name: '喀喇沁左翼蒙古族自治县',
            value: '211324'
          },
          {
            name: '北票市',
            value: '211381'
          },
          {
            name: '凌源市',
            value: '211382'
          }
        ]
      },
      {
        name: '葫芦岛市',
        value: '211400',
        subRegion: [
          {
            name: '市辖区',
            value: '211401'
          },
          {
            name: '连山区',
            value: '211402'
          },
          {
            name: '龙港区',
            value: '211403'
          },
          {
            name: '南票区',
            value: '211404'
          },
          {
            name: '绥中县',
            value: '211421'
          },
          {
            name: '建昌县',
            value: '211422'
          },
          {
            name: '兴城市',
            value: '211481'
          }
        ]
      }
    ]
  },
  {
    name: '吉林省',
    value: '220000',
    subRegion: [
      {
        name: '长春市',
        value: '220100',
        subRegion: [
          {
            name: '市辖区',
            value: '220101'
          },
          {
            name: '南关区',
            value: '220102'
          },
          {
            name: '宽城区',
            value: '220103'
          },
          {
            name: '朝阳区',
            value: '220104'
          },
          {
            name: '二道区',
            value: '220105'
          },
          {
            name: '绿园区',
            value: '220106'
          },
          {
            name: '双阳区',
            value: '220112'
          },
          {
            name: '九台区',
            value: '220113'
          },
          {
            name: '农安县',
            value: '220122'
          },
          {
            name: '榆树市',
            value: '220182'
          },
          {
            name: '德惠市',
            value: '220183'
          }
        ]
      },
      {
        name: '吉林市',
        value: '220200',
        subRegion: [
          {
            name: '市辖区',
            value: '220201'
          },
          {
            name: '昌邑区',
            value: '220202'
          },
          {
            name: '龙潭区',
            value: '220203'
          },
          {
            name: '船营区',
            value: '220204'
          },
          {
            name: '丰满区',
            value: '220211'
          },
          {
            name: '永吉县',
            value: '220221'
          },
          {
            name: '蛟河市',
            value: '220281'
          },
          {
            name: '桦甸市',
            value: '220282'
          },
          {
            name: '舒兰市',
            value: '220283'
          },
          {
            name: '磐石市',
            value: '220284'
          }
        ]
      },
      {
        name: '四平市',
        value: '220300',
        subRegion: [
          {
            name: '市辖区',
            value: '220301'
          },
          {
            name: '铁西区',
            value: '220302'
          },
          {
            name: '铁东区',
            value: '220303'
          },
          {
            name: '梨树县',
            value: '220322'
          },
          {
            name: '伊通满族自治县',
            value: '220323'
          },
          {
            name: '公主岭市',
            value: '220381'
          },
          {
            name: '双辽市',
            value: '220382'
          }
        ]
      },
      {
        name: '辽源市',
        value: '220400',
        subRegion: [
          {
            name: '市辖区',
            value: '220401'
          },
          {
            name: '龙山区',
            value: '220402'
          },
          {
            name: '西安区',
            value: '220403'
          },
          {
            name: '东丰县',
            value: '220421'
          },
          {
            name: '东辽县',
            value: '220422'
          }
        ]
      },
      {
        name: '通化市',
        value: '220500',
        subRegion: [
          {
            name: '市辖区',
            value: '220501'
          },
          {
            name: '东昌区',
            value: '220502'
          },
          {
            name: '二道江区',
            value: '220503'
          },
          {
            name: '通化县',
            value: '220521'
          },
          {
            name: '辉南县',
            value: '220523'
          },
          {
            name: '柳河县',
            value: '220524'
          },
          {
            name: '梅河口市',
            value: '220581'
          },
          {
            name: '集安市',
            value: '220582'
          }
        ]
      },
      {
        name: '白山市',
        value: '220600',
        subRegion: [
          {
            name: '市辖区',
            value: '220601'
          },
          {
            name: '浑江区',
            value: '220602'
          },
          {
            name: '江源区',
            value: '220605'
          },
          {
            name: '抚松县',
            value: '220621'
          },
          {
            name: '靖宇县',
            value: '220622'
          },
          {
            name: '长白朝鲜族自治县',
            value: '220623'
          },
          {
            name: '临江市',
            value: '220681'
          }
        ]
      },
      {
        name: '松原市',
        value: '220700',
        subRegion: [
          {
            name: '市辖区',
            value: '220701'
          },
          {
            name: '宁江区',
            value: '220702'
          },
          {
            name: '前郭尔罗斯蒙古族自治县',
            value: '220721'
          },
          {
            name: '长岭县',
            value: '220722'
          },
          {
            name: '乾安县',
            value: '220723'
          },
          {
            name: '扶余市',
            value: '220781'
          }
        ]
      },
      {
        name: '白城市',
        value: '220800',
        subRegion: [
          {
            name: '市辖区',
            value: '220801'
          },
          {
            name: '洮北区',
            value: '220802'
          },
          {
            name: '镇赉县',
            value: '220821'
          },
          {
            name: '通榆县',
            value: '220822'
          },
          {
            name: '洮南市',
            value: '220881'
          },
          {
            name: '大安市',
            value: '220882'
          }
        ]
      },
      {
        name: '延边朝鲜族自治州',
        value: '222400',
        subRegion: [
          {
            name: '延吉市',
            value: '222401'
          },
          {
            name: '图们市',
            value: '222402'
          },
          {
            name: '敦化市',
            value: '222403'
          },
          {
            name: '珲春市',
            value: '222404'
          },
          {
            name: '龙井市',
            value: '222405'
          },
          {
            name: '和龙市',
            value: '222406'
          },
          {
            name: '汪清县',
            value: '222424'
          },
          {
            name: '安图县',
            value: '222426'
          }
        ]
      }
    ]
  },
  {
    name: '黑龙江省',
    value: '230000',
    subRegion: [
      {
        name: '哈尔滨市',
        value: '230100',
        subRegion: [
          {
            name: '市辖区',
            value: '230101'
          },
          {
            name: '道里区',
            value: '230102'
          },
          {
            name: '南岗区',
            value: '230103'
          },
          {
            name: '道外区',
            value: '230104'
          },
          {
            name: '平房区',
            value: '230108'
          },
          {
            name: '松北区',
            value: '230109'
          },
          {
            name: '香坊区',
            value: '230110'
          },
          {
            name: '呼兰区',
            value: '230111'
          },
          {
            name: '阿城区',
            value: '230112'
          },
          {
            name: '双城区',
            value: '230113'
          },
          {
            name: '依兰县',
            value: '230123'
          },
          {
            name: '方正县',
            value: '230124'
          },
          {
            name: '宾县',
            value: '230125'
          },
          {
            name: '巴彦县',
            value: '230126'
          },
          {
            name: '木兰县',
            value: '230127'
          },
          {
            name: '通河县',
            value: '230128'
          },
          {
            name: '延寿县',
            value: '230129'
          },
          {
            name: '尚志市',
            value: '230183'
          },
          {
            name: '五常市',
            value: '230184'
          }
        ]
      },
      {
        name: '齐齐哈尔市',
        value: '230200',
        subRegion: [
          {
            name: '市辖区',
            value: '230201'
          },
          {
            name: '龙沙区',
            value: '230202'
          },
          {
            name: '建华区',
            value: '230203'
          },
          {
            name: '铁锋区',
            value: '230204'
          },
          {
            name: '昂昂溪区',
            value: '230205'
          },
          {
            name: '富拉尔基区',
            value: '230206'
          },
          {
            name: '碾子山区',
            value: '230207'
          },
          {
            name: '梅里斯达斡尔族区',
            value: '230208'
          },
          {
            name: '龙江县',
            value: '230221'
          },
          {
            name: '依安县',
            value: '230223'
          },
          {
            name: '泰来县',
            value: '230224'
          },
          {
            name: '甘南县',
            value: '230225'
          },
          {
            name: '富裕县',
            value: '230227'
          },
          {
            name: '克山县',
            value: '230229'
          },
          {
            name: '克东县',
            value: '230230'
          },
          {
            name: '拜泉县',
            value: '230231'
          },
          {
            name: '讷河市',
            value: '230281'
          }
        ]
      },
      {
        name: '鸡西市',
        value: '230300',
        subRegion: [
          {
            name: '市辖区',
            value: '230301'
          },
          {
            name: '鸡冠区',
            value: '230302'
          },
          {
            name: '恒山区',
            value: '230303'
          },
          {
            name: '滴道区',
            value: '230304'
          },
          {
            name: '梨树区',
            value: '230305'
          },
          {
            name: '城子河区',
            value: '230306'
          },
          {
            name: '麻山区',
            value: '230307'
          },
          {
            name: '鸡东县',
            value: '230321'
          },
          {
            name: '虎林市',
            value: '230381'
          },
          {
            name: '密山市',
            value: '230382'
          }
        ]
      },
      {
        name: '鹤岗市',
        value: '230400',
        subRegion: [
          {
            name: '市辖区',
            value: '230401'
          },
          {
            name: '向阳区',
            value: '230402'
          },
          {
            name: '工农区',
            value: '230403'
          },
          {
            name: '南山区',
            value: '230404'
          },
          {
            name: '兴安区',
            value: '230405'
          },
          {
            name: '东山区',
            value: '230406'
          },
          {
            name: '兴山区',
            value: '230407'
          },
          {
            name: '萝北县',
            value: '230421'
          },
          {
            name: '绥滨县',
            value: '230422'
          }
        ]
      },
      {
        name: '双鸭山市',
        value: '230500',
        subRegion: [
          {
            name: '市辖区',
            value: '230501'
          },
          {
            name: '尖山区',
            value: '230502'
          },
          {
            name: '岭东区',
            value: '230503'
          },
          {
            name: '四方台区',
            value: '230505'
          },
          {
            name: '宝山区',
            value: '230506'
          },
          {
            name: '集贤县',
            value: '230521'
          },
          {
            name: '友谊县',
            value: '230522'
          },
          {
            name: '宝清县',
            value: '230523'
          },
          {
            name: '饶河县',
            value: '230524'
          }
        ]
      },
      {
        name: '大庆市',
        value: '230600',
        subRegion: [
          {
            name: '市辖区',
            value: '230601'
          },
          {
            name: '萨尔图区',
            value: '230602'
          },
          {
            name: '龙凤区',
            value: '230603'
          },
          {
            name: '让胡路区',
            value: '230604'
          },
          {
            name: '红岗区',
            value: '230605'
          },
          {
            name: '大同区',
            value: '230606'
          },
          {
            name: '肇州县',
            value: '230621'
          },
          {
            name: '肇源县',
            value: '230622'
          },
          {
            name: '林甸县',
            value: '230623'
          },
          {
            name: '杜尔伯特蒙古族自治县',
            value: '230624'
          }
        ]
      },
      {
        name: '伊春市',
        value: '230700',
        subRegion: [
          {
            name: '市辖区',
            value: '230701'
          },
          {
            name: '伊春区',
            value: '230702'
          },
          {
            name: '南岔区',
            value: '230703'
          },
          {
            name: '友好区',
            value: '230704'
          },
          {
            name: '西林区',
            value: '230705'
          },
          {
            name: '翠峦区',
            value: '230706'
          },
          {
            name: '新青区',
            value: '230707'
          },
          {
            name: '美溪区',
            value: '230708'
          },
          {
            name: '金山屯区',
            value: '230709'
          },
          {
            name: '五营区',
            value: '230710'
          },
          {
            name: '乌马河区',
            value: '230711'
          },
          {
            name: '汤旺河区',
            value: '230712'
          },
          {
            name: '带岭区',
            value: '230713'
          },
          {
            name: '乌伊岭区',
            value: '230714'
          },
          {
            name: '红星区',
            value: '230715'
          },
          {
            name: '上甘岭区',
            value: '230716'
          },
          {
            name: '嘉荫县',
            value: '230722'
          },
          {
            name: '铁力市',
            value: '230781'
          }
        ]
      },
      {
        name: '佳木斯市',
        value: '230800',
        subRegion: [
          {
            name: '市辖区',
            value: '230801'
          },
          {
            name: '向阳区',
            value: '230803'
          },
          {
            name: '前进区',
            value: '230804'
          },
          {
            name: '东风区',
            value: '230805'
          },
          {
            name: '郊区',
            value: '230811'
          },
          {
            name: '桦南县',
            value: '230822'
          },
          {
            name: '桦川县',
            value: '230826'
          },
          {
            name: '汤原县',
            value: '230828'
          },
          {
            name: '抚远县',
            value: '230833'
          },
          {
            name: '同江市',
            value: '230881'
          },
          {
            name: '富锦市',
            value: '230882'
          }
        ]
      },
      {
        name: '七台河市',
        value: '230900',
        subRegion: [
          {
            name: '市辖区',
            value: '230901'
          },
          {
            name: '新兴区',
            value: '230902'
          },
          {
            name: '桃山区',
            value: '230903'
          },
          {
            name: '茄子河区',
            value: '230904'
          },
          {
            name: '勃利县',
            value: '230921'
          }
        ]
      },
      {
        name: '牡丹江市',
        value: '231000',
        subRegion: [
          {
            name: '市辖区',
            value: '231001'
          },
          {
            name: '东安区',
            value: '231002'
          },
          {
            name: '阳明区',
            value: '231003'
          },
          {
            name: '爱民区',
            value: '231004'
          },
          {
            name: '西安区',
            value: '231005'
          },
          {
            name: '东宁县',
            value: '231024'
          },
          {
            name: '林口县',
            value: '231025'
          },
          {
            name: '绥芬河市',
            value: '231081'
          },
          {
            name: '海林市',
            value: '231083'
          },
          {
            name: '宁安市',
            value: '231084'
          },
          {
            name: '穆棱市',
            value: '231085'
          }
        ]
      },
      {
        name: '黑河市',
        value: '231100',
        subRegion: [
          {
            name: '市辖区',
            value: '231101'
          },
          {
            name: '爱辉区',
            value: '231102'
          },
          {
            name: '嫩江县',
            value: '231121'
          },
          {
            name: '逊克县',
            value: '231123'
          },
          {
            name: '孙吴县',
            value: '231124'
          },
          {
            name: '北安市',
            value: '231181'
          },
          {
            name: '五大连池市',
            value: '231182'
          }
        ]
      },
      {
        name: '绥化市',
        value: '231200',
        subRegion: [
          {
            name: '市辖区',
            value: '231201'
          },
          {
            name: '北林区',
            value: '231202'
          },
          {
            name: '望奎县',
            value: '231221'
          },
          {
            name: '兰西县',
            value: '231222'
          },
          {
            name: '青冈县',
            value: '231223'
          },
          {
            name: '庆安县',
            value: '231224'
          },
          {
            name: '明水县',
            value: '231225'
          },
          {
            name: '绥棱县',
            value: '231226'
          },
          {
            name: '安达市',
            value: '231281'
          },
          {
            name: '肇东市',
            value: '231282'
          },
          {
            name: '海伦市',
            value: '231283'
          }
        ]
      },
      {
        name: '大兴安岭地区',
        value: '232700',
        subRegion: [
          {
            name: '呼玛县',
            value: '232721'
          },
          {
            name: '塔河县',
            value: '232722'
          },
          {
            name: '漠河县',
            value: '232723'
          }
        ]
      }
    ]
  },
  {
    name: '上海',
    value: '310000',
    subRegion: [
      {
        name: '上海市',
        value: '310000',
        subRegion: [
          {
            name: '黄浦区',
            value: '310101'
          },
          {
            name: '徐汇区',
            value: '310104'
          },
          {
            name: '长宁区',
            value: '310105',
            disabled: true
          },
          {
            name: '静安区',
            value: '310106'
          },
          {
            name: '普陀区',
            value: '310107'
          },
          {
            name: '闸北区',
            value: '310108'
          },
          {
            name: '虹口区',
            value: '310109'
          },
          {
            name: '杨浦区',
            value: '310110'
          },
          {
            name: '闵行区',
            value: '310112'
          },
          {
            name: '宝山区',
            value: '310113'
          },
          {
            name: '嘉定区',
            value: '310114'
          },
          {
            name: '浦东新区',
            value: '310115'
          },
          {
            name: '金山区',
            value: '310116'
          },
          {
            name: '松江区',
            value: '310117'
          },
          {
            name: '青浦区',
            value: '310118',
            disabled: true
          },
          {
            name: '奉贤区',
            value: '310120'
          },
          {
            name: '崇明县',
            value: '310230'
          }
        ]
      }
    ]
  },
  {
    name: '江苏省',
    value: '320000',
    subRegion: [
      {
        name: '南京市',
        value: '320100',
        subRegion: [
          {
            name: '市辖区',
            value: '320101'
          },
          {
            name: '玄武区',
            value: '320102'
          },
          {
            name: '秦淮区',
            value: '320104'
          },
          {
            name: '建邺区',
            value: '320105'
          },
          {
            name: '鼓楼区',
            value: '320106'
          },
          {
            name: '浦口区',
            value: '320111'
          },
          {
            name: '栖霞区',
            value: '320113'
          },
          {
            name: '雨花台区',
            value: '320114'
          },
          {
            name: '江宁区',
            value: '320115'
          },
          {
            name: '六合区',
            value: '320116'
          },
          {
            name: '溧水区',
            value: '320117'
          },
          {
            name: '高淳区',
            value: '320118'
          }
        ]
      },
      {
        name: '无锡市',
        value: '320200',
        subRegion: [
          {
            name: '市辖区',
            value: '320201'
          },
          {
            name: '崇安区',
            value: '320202'
          },
          {
            name: '南长区',
            value: '320203'
          },
          {
            name: '北塘区',
            value: '320204'
          },
          {
            name: '锡山区',
            value: '320205'
          },
          {
            name: '惠山区',
            value: '320206'
          },
          {
            name: '滨湖区',
            value: '320211'
          },
          {
            name: '江阴市',
            value: '320281'
          },
          {
            name: '宜兴市',
            value: '320282'
          }
        ]
      },
      {
        name: '徐州市',
        value: '320300',
        subRegion: [
          {
            name: '市辖区',
            value: '320301'
          },
          {
            name: '鼓楼区',
            value: '320302'
          },
          {
            name: '云龙区',
            value: '320303'
          },
          {
            name: '贾汪区',
            value: '320305'
          },
          {
            name: '泉山区',
            value: '320311'
          },
          {
            name: '铜山区',
            value: '320312'
          },
          {
            name: '丰县',
            value: '320321'
          },
          {
            name: '沛县',
            value: '320322'
          },
          {
            name: '睢宁县',
            value: '320324'
          },
          {
            name: '新沂市',
            value: '320381'
          },
          {
            name: '邳州市',
            value: '320382'
          }
        ]
      },
      {
        name: '常州市',
        value: '320400',
        subRegion: [
          {
            name: '市辖区',
            value: '320401'
          },
          {
            name: '天宁区',
            value: '320402'
          },
          {
            name: '钟楼区',
            value: '320404'
          },
          {
            name: '戚墅堰区',
            value: '320405'
          },
          {
            name: '新北区',
            value: '320411'
          },
          {
            name: '武进区',
            value: '320412'
          },
          {
            name: '溧阳市',
            value: '320481'
          },
          {
            name: '金坛市',
            value: '320482'
          }
        ]
      },
      {
        name: '苏州市',
        value: '320500',
        disabled: true,
        subRegion: [
          {
            name: '市辖区',
            value: '320501'
          },
          {
            name: '虎丘区',
            value: '320505'
          },
          {
            name: '吴中区',
            value: '320506'
          },
          {
            name: '相城区',
            value: '320507'
          },
          {
            name: '姑苏区',
            value: '320508'
          },
          {
            name: '吴江区',
            value: '320509'
          },
          {
            name: '常熟市',
            value: '320581'
          },
          {
            name: '张家港市',
            value: '320582'
          },
          {
            name: '昆山市',
            value: '320583'
          },
          {
            name: '太仓市',
            value: '320585'
          }
        ]
      },
      {
        name: '南通市',
        value: '320600',
        subRegion: [
          {
            name: '市辖区',
            value: '320601'
          },
          {
            name: '崇川区',
            value: '320602',
            disabled: true
          },
          {
            name: '港闸区',
            value: '320611'
          },
          {
            name: '通州区',
            value: '320612'
          },
          {
            name: '海安县',
            value: '320621'
          },
          {
            name: '如东县',
            value: '320623'
          },
          {
            name: '启东市',
            value: '320681'
          },
          {
            name: '如皋市',
            value: '320682'
          },
          {
            name: '海门市',
            value: '320684'
          }
        ]
      },
      {
        name: '连云港市',
        value: '320700',
        subRegion: [
          {
            name: '市辖区',
            value: '320701'
          },
          {
            name: '连云区',
            value: '320703'
          },
          {
            name: '海州区',
            value: '320706'
          },
          {
            name: '赣榆区',
            value: '320707'
          },
          {
            name: '东海县',
            value: '320722'
          },
          {
            name: '灌云县',
            value: '320723'
          },
          {
            name: '灌南县',
            value: '320724'
          }
        ]
      },
      {
        name: '淮安市',
        value: '320800',
        subRegion: [
          {
            name: '市辖区',
            value: '320801'
          },
          {
            name: '清河区',
            value: '320802'
          },
          {
            name: '淮安区',
            value: '320803'
          },
          {
            name: '淮阴区',
            value: '320804'
          },
          {
            name: '清浦区',
            value: '320811'
          },
          {
            name: '涟水县',
            value: '320826'
          },
          {
            name: '洪泽县',
            value: '320829'
          },
          {
            name: '盱眙县',
            value: '320830'
          },
          {
            name: '金湖县',
            value: '320831'
          }
        ]
      },
      {
        name: '盐城市',
        value: '320900',
        subRegion: [
          {
            name: '市辖区',
            value: '320901'
          },
          {
            name: '亭湖区',
            value: '320902'
          },
          {
            name: '盐都区',
            value: '320903'
          },
          {
            name: '响水县',
            value: '320921'
          },
          {
            name: '滨海县',
            value: '320922'
          },
          {
            name: '阜宁县',
            value: '320923'
          },
          {
            name: '射阳县',
            value: '320924'
          },
          {
            name: '建湖县',
            value: '320925'
          },
          {
            name: '东台市',
            value: '320981'
          },
          {
            name: '大丰市',
            value: '320982'
          }
        ]
      },
      {
        name: '扬州市',
        value: '321000',
        subRegion: [
          {
            name: '市辖区',
            value: '321001'
          },
          {
            name: '广陵区',
            value: '321002'
          },
          {
            name: '邗江区',
            value: '321003'
          },
          {
            name: '江都区',
            value: '321012'
          },
          {
            name: '宝应县',
            value: '321023'
          },
          {
            name: '仪征市',
            value: '321081'
          },
          {
            name: '高邮市',
            value: '321084'
          }
        ]
      },
      {
        name: '镇江市',
        value: '321100',
        subRegion: [
          {
            name: '市辖区',
            value: '321101'
          },
          {
            name: '京口区',
            value: '321102'
          },
          {
            name: '润州区',
            value: '321111'
          },
          {
            name: '丹徒区',
            value: '321112'
          },
          {
            name: '丹阳市',
            value: '321181'
          },
          {
            name: '扬中市',
            value: '321182'
          },
          {
            name: '句容市',
            value: '321183'
          }
        ]
      },
      {
        name: '泰州市',
        value: '321200',
        subRegion: [
          {
            name: '市辖区',
            value: '321201'
          },
          {
            name: '海陵区',
            value: '321202'
          },
          {
            name: '高港区',
            value: '321203'
          },
          {
            name: '姜堰区',
            value: '321204'
          },
          {
            name: '兴化市',
            value: '321281'
          },
          {
            name: '靖江市',
            value: '321282'
          },
          {
            name: '泰兴市',
            value: '321283'
          }
        ]
      },
      {
        name: '宿迁市',
        value: '321300',
        subRegion: [
          {
            name: '市辖区',
            value: '321301'
          },
          {
            name: '宿城区',
            value: '321302'
          },
          {
            name: '宿豫区',
            value: '321311'
          },
          {
            name: '沭阳县',
            value: '321322'
          },
          {
            name: '泗阳县',
            value: '321323'
          },
          {
            name: '泗洪县',
            value: '321324'
          }
        ]
      }
    ]
  },
  {
    name: '浙江省',
    value: '330000',
    subRegion: [
      {
        name: '杭州市',
        value: '330100',
        subRegion: [
          {
            name: '市辖区',
            value: '330101'
          },
          {
            name: '上城区',
            value: '330102'
          },
          {
            name: '下城区',
            value: '330103'
          },
          {
            name: '江干区',
            value: '330104'
          },
          {
            name: '拱墅区',
            value: '330105'
          },
          {
            name: '西湖区',
            value: '330106'
          },
          {
            name: '滨江区',
            value: '330108'
          },
          {
            name: '萧山区',
            value: '330109'
          },
          {
            name: '余杭区',
            value: '330110'
          },
          {
            name: '富阳区',
            value: '330111'
          },
          {
            name: '桐庐县',
            value: '330122'
          },
          {
            name: '淳安县',
            value: '330127'
          },
          {
            name: '建德市',
            value: '330182'
          },
          {
            name: '临安市',
            value: '330185'
          }
        ]
      },
      {
        name: '宁波市',
        value: '330200',
        subRegion: [
          {
            name: '市辖区',
            value: '330201'
          },
          {
            name: '海曙区',
            value: '330203'
          },
          {
            name: '江东区',
            value: '330204'
          },
          {
            name: '江北区',
            value: '330205'
          },
          {
            name: '北仑区',
            value: '330206'
          },
          {
            name: '镇海区',
            value: '330211'
          },
          {
            name: '鄞州区',
            value: '330212'
          },
          {
            name: '象山县',
            value: '330225'
          },
          {
            name: '宁海县',
            value: '330226'
          },
          {
            name: '余姚市',
            value: '330281'
          },
          {
            name: '慈溪市',
            value: '330282'
          },
          {
            name: '奉化市',
            value: '330283'
          }
        ]
      },
      {
        name: '温州市',
        value: '330300',
        subRegion: [
          {
            name: '市辖区',
            value: '330301'
          },
          {
            name: '鹿城区',
            value: '330302'
          },
          {
            name: '龙湾区',
            value: '330303'
          },
          {
            name: '瓯海区',
            value: '330304'
          },
          {
            name: '洞头县',
            value: '330322'
          },
          {
            name: '永嘉县',
            value: '330324'
          },
          {
            name: '平阳县',
            value: '330326'
          },
          {
            name: '苍南县',
            value: '330327'
          },
          {
            name: '文成县',
            value: '330328'
          },
          {
            name: '泰顺县',
            value: '330329'
          },
          {
            name: '瑞安市',
            value: '330381'
          },
          {
            name: '乐清市',
            value: '330382'
          }
        ]
      },
      {
        name: '嘉兴市',
        value: '330400',
        subRegion: [
          {
            name: '市辖区',
            value: '330401'
          },
          {
            name: '南湖区',
            value: '330402'
          },
          {
            name: '秀洲区',
            value: '330411'
          },
          {
            name: '嘉善县',
            value: '330421'
          },
          {
            name: '海盐县',
            value: '330424'
          },
          {
            name: '海宁市',
            value: '330481'
          },
          {
            name: '平湖市',
            value: '330482'
          },
          {
            name: '桐乡市',
            value: '330483'
          }
        ]
      },
      {
        name: '湖州市',
        value: '330500',
        subRegion: [
          {
            name: '市辖区',
            value: '330501'
          },
          {
            name: '吴兴区',
            value: '330502'
          },
          {
            name: '南浔区',
            value: '330503'
          },
          {
            name: '德清县',
            value: '330521'
          },
          {
            name: '长兴县',
            value: '330522'
          },
          {
            name: '安吉县',
            value: '330523'
          }
        ]
      },
      {
        name: '绍兴市',
        value: '330600',
        subRegion: [
          {
            name: '市辖区',
            value: '330601'
          },
          {
            name: '越城区',
            value: '330602'
          },
          {
            name: '柯桥区',
            value: '330603'
          },
          {
            name: '上虞区',
            value: '330604'
          },
          {
            name: '新昌县',
            value: '330624'
          },
          {
            name: '诸暨市',
            value: '330681'
          },
          {
            name: '嵊州市',
            value: '330683'
          }
        ]
      },
      {
        name: '金华市',
        value: '330700',
        subRegion: [
          {
            name: '市辖区',
            value: '330701'
          },
          {
            name: '婺城区',
            value: '330702'
          },
          {
            name: '金东区',
            value: '330703'
          },
          {
            name: '武义县',
            value: '330723'
          },
          {
            name: '浦江县',
            value: '330726'
          },
          {
            name: '磐安县',
            value: '330727'
          },
          {
            name: '兰溪市',
            value: '330781'
          },
          {
            name: '义乌市',
            value: '330782'
          },
          {
            name: '东阳市',
            value: '330783'
          },
          {
            name: '永康市',
            value: '330784'
          }
        ]
      },
      {
        name: '衢州市',
        value: '330800',
        subRegion: [
          {
            name: '市辖区',
            value: '330801'
          },
          {
            name: '柯城区',
            value: '330802'
          },
          {
            name: '衢江区',
            value: '330803'
          },
          {
            name: '常山县',
            value: '330822'
          },
          {
            name: '开化县',
            value: '330824'
          },
          {
            name: '龙游县',
            value: '330825'
          },
          {
            name: '江山市',
            value: '330881'
          }
        ]
      },
      {
        name: '舟山市',
        value: '330900',
        subRegion: [
          {
            name: '市辖区',
            value: '330901'
          },
          {
            name: '定海区',
            value: '330902'
          },
          {
            name: '普陀区',
            value: '330903'
          },
          {
            name: '岱山县',
            value: '330921'
          },
          {
            name: '嵊泗县',
            value: '330922'
          }
        ]
      },
      {
        name: '台州市',
        value: '331000',
        subRegion: [
          {
            name: '市辖区',
            value: '331001'
          },
          {
            name: '椒江区',
            value: '331002'
          },
          {
            name: '黄岩区',
            value: '331003'
          },
          {
            name: '路桥区',
            value: '331004'
          },
          {
            name: '玉环县',
            value: '331021'
          },
          {
            name: '三门县',
            value: '331022'
          },
          {
            name: '天台县',
            value: '331023'
          },
          {
            name: '仙居县',
            value: '331024'
          },
          {
            name: '温岭市',
            value: '331081'
          },
          {
            name: '临海市',
            value: '331082'
          }
        ]
      },
      {
        name: '丽水市',
        value: '331100',
        subRegion: [
          {
            name: '市辖区',
            value: '331101'
          },
          {
            name: '莲都区',
            value: '331102'
          },
          {
            name: '青田县',
            value: '331121'
          },
          {
            name: '缙云县',
            value: '331122'
          },
          {
            name: '遂昌县',
            value: '331123'
          },
          {
            name: '松阳县',
            value: '331124'
          },
          {
            name: '云和县',
            value: '331125'
          },
          {
            name: '庆元县',
            value: '331126'
          },
          {
            name: '景宁畲族自治县',
            value: '331127'
          },
          {
            name: '龙泉市',
            value: '331181'
          }
        ]
      }
    ]
  },
  {
    name: '安徽省',
    value: '340000',
    subRegion: [
      {
        name: '合肥市',
        value: '340100',
        subRegion: [
          {
            name: '市辖区',
            value: '340101'
          },
          {
            name: '瑶海区',
            value: '340102'
          },
          {
            name: '庐阳区',
            value: '340103'
          },
          {
            name: '蜀山区',
            value: '340104'
          },
          {
            name: '包河区',
            value: '340111'
          },
          {
            name: '长丰县',
            value: '340121'
          },
          {
            name: '肥东县',
            value: '340122'
          },
          {
            name: '肥西县',
            value: '340123'
          },
          {
            name: '庐江县',
            value: '340124'
          },
          {
            name: '巢湖市',
            value: '340181'
          }
        ]
      },
      {
        name: '芜湖市',
        value: '340200',
        subRegion: [
          {
            name: '市辖区',
            value: '340201'
          },
          {
            name: '镜湖区',
            value: '340202'
          },
          {
            name: '弋江区',
            value: '340203'
          },
          {
            name: '鸠江区',
            value: '340207'
          },
          {
            name: '三山区',
            value: '340208'
          },
          {
            name: '芜湖县',
            value: '340221'
          },
          {
            name: '繁昌县',
            value: '340222'
          },
          {
            name: '南陵县',
            value: '340223'
          },
          {
            name: '无为县',
            value: '340225'
          }
        ]
      },
      {
        name: '蚌埠市',
        value: '340300',
        subRegion: [
          {
            name: '市辖区',
            value: '340301'
          },
          {
            name: '龙子湖区',
            value: '340302'
          },
          {
            name: '蚌山区',
            value: '340303'
          },
          {
            name: '禹会区',
            value: '340304'
          },
          {
            name: '淮上区',
            value: '340311'
          },
          {
            name: '怀远县',
            value: '340321'
          },
          {
            name: '五河县',
            value: '340322'
          },
          {
            name: '固镇县',
            value: '340323'
          }
        ]
      },
      {
        name: '淮南市',
        value: '340400',
        subRegion: [
          {
            name: '市辖区',
            value: '340401'
          },
          {
            name: '大通区',
            value: '340402'
          },
          {
            name: '田家庵区',
            value: '340403'
          },
          {
            name: '谢家集区',
            value: '340404'
          },
          {
            name: '八公山区',
            value: '340405'
          },
          {
            name: '潘集区',
            value: '340406'
          },
          {
            name: '凤台县',
            value: '340421'
          }
        ]
      },
      {
        name: '马鞍山市',
        value: '340500',
        subRegion: [
          {
            name: '市辖区',
            value: '340501'
          },
          {
            name: '花山区',
            value: '340503'
          },
          {
            name: '雨山区',
            value: '340504'
          },
          {
            name: '博望区',
            value: '340506'
          },
          {
            name: '当涂县',
            value: '340521'
          },
          {
            name: '含山县',
            value: '340522'
          },
          {
            name: '和县',
            value: '340523'
          }
        ]
      },
      {
        name: '淮北市',
        value: '340600',
        subRegion: [
          {
            name: '市辖区',
            value: '340601'
          },
          {
            name: '杜集区',
            value: '340602'
          },
          {
            name: '相山区',
            value: '340603'
          },
          {
            name: '烈山区',
            value: '340604'
          },
          {
            name: '濉溪县',
            value: '340621'
          }
        ]
      },
      {
        name: '铜陵市',
        value: '340700',
        subRegion: [
          {
            name: '市辖区',
            value: '340701'
          },
          {
            name: '铜官山区',
            value: '340702'
          },
          {
            name: '狮子山区',
            value: '340703'
          },
          {
            name: '郊区',
            value: '340711'
          },
          {
            name: '铜陵县',
            value: '340721'
          }
        ]
      },
      {
        name: '安庆市',
        value: '340800',
        subRegion: [
          {
            name: '市辖区',
            value: '340801'
          },
          {
            name: '迎江区',
            value: '340802'
          },
          {
            name: '大观区',
            value: '340803'
          },
          {
            name: '宜秀区',
            value: '340811'
          },
          {
            name: '怀宁县',
            value: '340822'
          },
          {
            name: '枞阳县',
            value: '340823'
          },
          {
            name: '潜山县',
            value: '340824'
          },
          {
            name: '太湖县',
            value: '340825'
          },
          {
            name: '宿松县',
            value: '340826'
          },
          {
            name: '望江县',
            value: '340827'
          },
          {
            name: '岳西县',
            value: '340828'
          },
          {
            name: '桐城市',
            value: '340881'
          }
        ]
      },
      {
        name: '黄山市',
        value: '341000',
        subRegion: [
          {
            name: '市辖区',
            value: '341001'
          },
          {
            name: '屯溪区',
            value: '341002'
          },
          {
            name: '黄山区',
            value: '341003'
          },
          {
            name: '徽州区',
            value: '341004'
          },
          {
            name: '歙县',
            value: '341021'
          },
          {
            name: '休宁县',
            value: '341022'
          },
          {
            name: '黟县',
            value: '341023'
          },
          {
            name: '祁门县',
            value: '341024'
          }
        ]
      },
      {
        name: '滁州市',
        value: '341100',
        subRegion: [
          {
            name: '市辖区',
            value: '341101'
          },
          {
            name: '琅琊区',
            value: '341102'
          },
          {
            name: '南谯区',
            value: '341103'
          },
          {
            name: '来安县',
            value: '341122'
          },
          {
            name: '全椒县',
            value: '341124'
          },
          {
            name: '定远县',
            value: '341125'
          },
          {
            name: '凤阳县',
            value: '341126'
          },
          {
            name: '天长市',
            value: '341181'
          },
          {
            name: '明光市',
            value: '341182'
          }
        ]
      },
      {
        name: '阜阳市',
        value: '341200',
        subRegion: [
          {
            name: '市辖区',
            value: '341201'
          },
          {
            name: '颍州区',
            value: '341202'
          },
          {
            name: '颍东区',
            value: '341203'
          },
          {
            name: '颍泉区',
            value: '341204'
          },
          {
            name: '临泉县',
            value: '341221'
          },
          {
            name: '太和县',
            value: '341222'
          },
          {
            name: '阜南县',
            value: '341225'
          },
          {
            name: '颍上县',
            value: '341226'
          },
          {
            name: '界首市',
            value: '341282'
          }
        ]
      },
      {
        name: '宿州市',
        value: '341300',
        subRegion: [
          {
            name: '市辖区',
            value: '341301'
          },
          {
            name: '埇桥区',
            value: '341302'
          },
          {
            name: '砀山县',
            value: '341321'
          },
          {
            name: '萧县',
            value: '341322'
          },
          {
            name: '灵璧县',
            value: '341323'
          },
          {
            name: '泗县',
            value: '341324'
          }
        ]
      },
      {
        name: '六安市',
        value: '341500',
        subRegion: [
          {
            name: '市辖区',
            value: '341501'
          },
          {
            name: '金安区',
            value: '341502'
          },
          {
            name: '裕安区',
            value: '341503'
          },
          {
            name: '寿县',
            value: '341521'
          },
          {
            name: '霍邱县',
            value: '341522'
          },
          {
            name: '舒城县',
            value: '341523'
          },
          {
            name: '金寨县',
            value: '341524'
          },
          {
            name: '霍山县',
            value: '341525'
          }
        ]
      },
      {
        name: '亳州市',
        value: '341600',
        subRegion: [
          {
            name: '市辖区',
            value: '341601'
          },
          {
            name: '谯城区',
            value: '341602'
          },
          {
            name: '涡阳县',
            value: '341621'
          },
          {
            name: '蒙城县',
            value: '341622'
          },
          {
            name: '利辛县',
            value: '341623'
          }
        ]
      },
      {
        name: '池州市',
        value: '341700',
        subRegion: [
          {
            name: '市辖区',
            value: '341701'
          },
          {
            name: '贵池区',
            value: '341702'
          },
          {
            name: '东至县',
            value: '341721'
          },
          {
            name: '石台县',
            value: '341722'
          },
          {
            name: '青阳县',
            value: '341723'
          }
        ]
      },
      {
        name: '宣城市',
        value: '341800',
        subRegion: [
          {
            name: '市辖区',
            value: '341801'
          },
          {
            name: '宣州区',
            value: '341802'
          },
          {
            name: '郎溪县',
            value: '341821'
          },
          {
            name: '广德县',
            value: '341822'
          },
          {
            name: '泾县',
            value: '341823'
          },
          {
            name: '绩溪县',
            value: '341824'
          },
          {
            name: '旌德县',
            value: '341825'
          },
          {
            name: '宁国市',
            value: '341881'
          }
        ]
      }
    ]
  },
  {
    name: '福建省',
    value: '350000',
    subRegion: [
      {
        name: '福州市',
        value: '350100',
        subRegion: [
          {
            name: '市辖区',
            value: '350101'
          },
          {
            name: '鼓楼区',
            value: '350102'
          },
          {
            name: '台江区',
            value: '350103'
          },
          {
            name: '仓山区',
            value: '350104'
          },
          {
            name: '马尾区',
            value: '350105'
          },
          {
            name: '晋安区',
            value: '350111'
          },
          {
            name: '闽侯县',
            value: '350121'
          },
          {
            name: '连江县',
            value: '350122'
          },
          {
            name: '罗源县',
            value: '350123'
          },
          {
            name: '闽清县',
            value: '350124'
          },
          {
            name: '永泰县',
            value: '350125'
          },
          {
            name: '平潭县',
            value: '350128'
          },
          {
            name: '福清市',
            value: '350181'
          },
          {
            name: '长乐市',
            value: '350182'
          }
        ]
      },
      {
        name: '厦门市',
        value: '350200',
        subRegion: [
          {
            name: '市辖区',
            value: '350201'
          },
          {
            name: '思明区',
            value: '350203'
          },
          {
            name: '海沧区',
            value: '350205'
          },
          {
            name: '湖里区',
            value: '350206'
          },
          {
            name: '集美区',
            value: '350211'
          },
          {
            name: '同安区',
            value: '350212'
          },
          {
            name: '翔安区',
            value: '350213'
          }
        ]
      },
      {
        name: '莆田市',
        value: '350300',
        subRegion: [
          {
            name: '市辖区',
            value: '350301'
          },
          {
            name: '城厢区',
            value: '350302'
          },
          {
            name: '涵江区',
            value: '350303'
          },
          {
            name: '荔城区',
            value: '350304'
          },
          {
            name: '秀屿区',
            value: '350305'
          },
          {
            name: '仙游县',
            value: '350322'
          }
        ]
      },
      {
        name: '三明市',
        value: '350400',
        subRegion: [
          {
            name: '市辖区',
            value: '350401'
          },
          {
            name: '梅列区',
            value: '350402'
          },
          {
            name: '三元区',
            value: '350403'
          },
          {
            name: '明溪县',
            value: '350421'
          },
          {
            name: '清流县',
            value: '350423'
          },
          {
            name: '宁化县',
            value: '350424'
          },
          {
            name: '大田县',
            value: '350425'
          },
          {
            name: '尤溪县',
            value: '350426'
          },
          {
            name: '沙县',
            value: '350427'
          },
          {
            name: '将乐县',
            value: '350428'
          },
          {
            name: '泰宁县',
            value: '350429'
          },
          {
            name: '建宁县',
            value: '350430'
          },
          {
            name: '永安市',
            value: '350481'
          }
        ]
      },
      {
        name: '泉州市',
        value: '350500',
        subRegion: [
          {
            name: '市辖区',
            value: '350501'
          },
          {
            name: '鲤城区',
            value: '350502'
          },
          {
            name: '丰泽区',
            value: '350503'
          },
          {
            name: '洛江区',
            value: '350504'
          },
          {
            name: '泉港区',
            value: '350505'
          },
          {
            name: '惠安县',
            value: '350521'
          },
          {
            name: '安溪县',
            value: '350524'
          },
          {
            name: '永春县',
            value: '350525'
          },
          {
            name: '德化县',
            value: '350526'
          },
          {
            name: '金门县',
            value: '350527'
          },
          {
            name: '石狮市',
            value: '350581'
          },
          {
            name: '晋江市',
            value: '350582'
          },
          {
            name: '南安市',
            value: '350583'
          }
        ]
      },
      {
        name: '漳州市',
        value: '350600',
        subRegion: [
          {
            name: '市辖区',
            value: '350601'
          },
          {
            name: '芗城区',
            value: '350602'
          },
          {
            name: '龙文区',
            value: '350603'
          },
          {
            name: '云霄县',
            value: '350622'
          },
          {
            name: '漳浦县',
            value: '350623'
          },
          {
            name: '诏安县',
            value: '350624'
          },
          {
            name: '长泰县',
            value: '350625'
          },
          {
            name: '东山县',
            value: '350626'
          },
          {
            name: '南靖县',
            value: '350627'
          },
          {
            name: '平和县',
            value: '350628'
          },
          {
            name: '华安县',
            value: '350629'
          },
          {
            name: '龙海市',
            value: '350681'
          }
        ]
      },
      {
        name: '南平市',
        value: '350700',
        subRegion: [
          {
            name: '市辖区',
            value: '350701'
          },
          {
            name: '延平区',
            value: '350702'
          },
          {
            name: '建阳区',
            value: '350703'
          },
          {
            name: '顺昌县',
            value: '350721'
          },
          {
            name: '浦城县',
            value: '350722'
          },
          {
            name: '光泽县',
            value: '350723'
          },
          {
            name: '松溪县',
            value: '350724'
          },
          {
            name: '政和县',
            value: '350725'
          },
          {
            name: '邵武市',
            value: '350781'
          },
          {
            name: '武夷山市',
            value: '350782'
          },
          {
            name: '建瓯市',
            value: '350783'
          }
        ]
      },
      {
        name: '龙岩市',
        value: '350800',
        subRegion: [
          {
            name: '市辖区',
            value: '350801'
          },
          {
            name: '新罗区',
            value: '350802'
          },
          {
            name: '永定区',
            value: '350803'
          },
          {
            name: '长汀县',
            value: '350821'
          },
          {
            name: '上杭县',
            value: '350823'
          },
          {
            name: '武平县',
            value: '350824'
          },
          {
            name: '连城县',
            value: '350825'
          },
          {
            name: '漳平市',
            value: '350881'
          }
        ]
      },
      {
        name: '宁德市',
        value: '350900',
        subRegion: [
          {
            name: '市辖区',
            value: '350901'
          },
          {
            name: '蕉城区',
            value: '350902'
          },
          {
            name: '霞浦县',
            value: '350921'
          },
          {
            name: '古田县',
            value: '350922'
          },
          {
            name: '屏南县',
            value: '350923'
          },
          {
            name: '寿宁县',
            value: '350924'
          },
          {
            name: '周宁县',
            value: '350925'
          },
          {
            name: '柘荣县',
            value: '350926'
          },
          {
            name: '福安市',
            value: '350981'
          },
          {
            name: '福鼎市',
            value: '350982'
          }
        ]
      }
    ]
  },
  {
    name: '江西省',
    value: '360000',
    subRegion: [
      {
        name: '南昌市',
        value: '360100',
        subRegion: [
          {
            name: '市辖区',
            value: '360101'
          },
          {
            name: '东湖区',
            value: '360102'
          },
          {
            name: '西湖区',
            value: '360103'
          },
          {
            name: '青云谱区',
            value: '360104'
          },
          {
            name: '湾里区',
            value: '360105'
          },
          {
            name: '青山湖区',
            value: '360111'
          },
          {
            name: '南昌县',
            value: '360121'
          },
          {
            name: '新建县',
            value: '360122'
          },
          {
            name: '安义县',
            value: '360123'
          },
          {
            name: '进贤县',
            value: '360124'
          }
        ]
      },
      {
        name: '景德镇市',
        value: '360200',
        subRegion: [
          {
            name: '市辖区',
            value: '360201'
          },
          {
            name: '昌江区',
            value: '360202'
          },
          {
            name: '珠山区',
            value: '360203'
          },
          {
            name: '浮梁县',
            value: '360222'
          },
          {
            name: '乐平市',
            value: '360281'
          }
        ]
      },
      {
        name: '萍乡市',
        value: '360300',
        subRegion: [
          {
            name: '市辖区',
            value: '360301'
          },
          {
            name: '安源区',
            value: '360302'
          },
          {
            name: '湘东区',
            value: '360313'
          },
          {
            name: '莲花县',
            value: '360321'
          },
          {
            name: '上栗县',
            value: '360322'
          },
          {
            name: '芦溪县',
            value: '360323'
          }
        ]
      },
      {
        name: '九江市',
        value: '360400',
        subRegion: [
          {
            name: '市辖区',
            value: '360401'
          },
          {
            name: '庐山区',
            value: '360402'
          },
          {
            name: '浔阳区',
            value: '360403'
          },
          {
            name: '九江县',
            value: '360421'
          },
          {
            name: '武宁县',
            value: '360423'
          },
          {
            name: '修水县',
            value: '360424'
          },
          {
            name: '永修县',
            value: '360425'
          },
          {
            name: '德安县',
            value: '360426'
          },
          {
            name: '星子县',
            value: '360427'
          },
          {
            name: '都昌县',
            value: '360428'
          },
          {
            name: '湖口县',
            value: '360429'
          },
          {
            name: '彭泽县',
            value: '360430'
          },
          {
            name: '瑞昌市',
            value: '360481'
          },
          {
            name: '共青城市',
            value: '360482'
          }
        ]
      },
      {
        name: '新余市',
        value: '360500',
        subRegion: [
          {
            name: '市辖区',
            value: '360501'
          },
          {
            name: '渝水区',
            value: '360502'
          },
          {
            name: '分宜县',
            value: '360521'
          }
        ]
      },
      {
        name: '鹰潭市',
        value: '360600',
        subRegion: [
          {
            name: '市辖区',
            value: '360601'
          },
          {
            name: '月湖区',
            value: '360602'
          },
          {
            name: '余江县',
            value: '360622'
          },
          {
            name: '贵溪市',
            value: '360681'
          }
        ]
      },
      {
        name: '赣州市',
        value: '360700',
        subRegion: [
          {
            name: '市辖区',
            value: '360701'
          },
          {
            name: '章贡区',
            value: '360702'
          },
          {
            name: '南康区',
            value: '360703'
          },
          {
            name: '赣县',
            value: '360721'
          },
          {
            name: '信丰县',
            value: '360722'
          },
          {
            name: '大余县',
            value: '360723'
          },
          {
            name: '上犹县',
            value: '360724'
          },
          {
            name: '崇义县',
            value: '360725'
          },
          {
            name: '安远县',
            value: '360726'
          },
          {
            name: '龙南县',
            value: '360727'
          },
          {
            name: '定南县',
            value: '360728'
          },
          {
            name: '全南县',
            value: '360729'
          },
          {
            name: '宁都县',
            value: '360730'
          },
          {
            name: '于都县',
            value: '360731'
          },
          {
            name: '兴国县',
            value: '360732'
          },
          {
            name: '会昌县',
            value: '360733'
          },
          {
            name: '寻乌县',
            value: '360734'
          },
          {
            name: '石城县',
            value: '360735'
          },
          {
            name: '瑞金市',
            value: '360781'
          }
        ]
      },
      {
        name: '吉安市',
        value: '360800',
        subRegion: [
          {
            name: '市辖区',
            value: '360801'
          },
          {
            name: '吉州区',
            value: '360802'
          },
          {
            name: '青原区',
            value: '360803'
          },
          {
            name: '吉安县',
            value: '360821'
          },
          {
            name: '吉水县',
            value: '360822'
          },
          {
            name: '峡江县',
            value: '360823'
          },
          {
            name: '新干县',
            value: '360824'
          },
          {
            name: '永丰县',
            value: '360825'
          },
          {
            name: '泰和县',
            value: '360826'
          },
          {
            name: '遂川县',
            value: '360827'
          },
          {
            name: '万安县',
            value: '360828'
          },
          {
            name: '安福县',
            value: '360829'
          },
          {
            name: '永新县',
            value: '360830'
          },
          {
            name: '井冈山市',
            value: '360881'
          }
        ]
      },
      {
        name: '宜春市',
        value: '360900',
        subRegion: [
          {
            name: '市辖区',
            value: '360901'
          },
          {
            name: '袁州区',
            value: '360902'
          },
          {
            name: '奉新县',
            value: '360921'
          },
          {
            name: '万载县',
            value: '360922'
          },
          {
            name: '上高县',
            value: '360923'
          },
          {
            name: '宜丰县',
            value: '360924'
          },
          {
            name: '靖安县',
            value: '360925'
          },
          {
            name: '铜鼓县',
            value: '360926'
          },
          {
            name: '丰城市',
            value: '360981'
          },
          {
            name: '樟树市',
            value: '360982'
          },
          {
            name: '高安市',
            value: '360983'
          }
        ]
      },
      {
        name: '抚州市',
        value: '361000',
        subRegion: [
          {
            name: '市辖区',
            value: '361001'
          },
          {
            name: '临川区',
            value: '361002'
          },
          {
            name: '南城县',
            value: '361021'
          },
          {
            name: '黎川县',
            value: '361022'
          },
          {
            name: '南丰县',
            value: '361023'
          },
          {
            name: '崇仁县',
            value: '361024'
          },
          {
            name: '乐安县',
            value: '361025'
          },
          {
            name: '宜黄县',
            value: '361026'
          },
          {
            name: '金溪县',
            value: '361027'
          },
          {
            name: '资溪县',
            value: '361028'
          },
          {
            name: '东乡县',
            value: '361029'
          },
          {
            name: '广昌县',
            value: '361030'
          }
        ]
      },
      {
        name: '上饶市',
        value: '361100',
        subRegion: [
          {
            name: '市辖区',
            value: '361101'
          },
          {
            name: '信州区',
            value: '361102'
          },
          {
            name: '上饶县',
            value: '361121'
          },
          {
            name: '广丰县',
            value: '361122'
          },
          {
            name: '玉山县',
            value: '361123'
          },
          {
            name: '铅山县',
            value: '361124'
          },
          {
            name: '横峰县',
            value: '361125'
          },
          {
            name: '弋阳县',
            value: '361126'
          },
          {
            name: '余干县',
            value: '361127'
          },
          {
            name: '鄱阳县',
            value: '361128'
          },
          {
            name: '万年县',
            value: '361129'
          },
          {
            name: '婺源县',
            value: '361130'
          },
          {
            name: '德兴市',
            value: '361181'
          }
        ]
      }
    ]
  },
  {
    name: '山东省',
    value: '370000',
    subRegion: [
      {
        name: '济南市',
        value: '370100',
        subRegion: [
          {
            name: '市辖区',
            value: '370101'
          },
          {
            name: '历下区',
            value: '370102'
          },
          {
            name: '市中区',
            value: '370103'
          },
          {
            name: '槐荫区',
            value: '370104'
          },
          {
            name: '天桥区',
            value: '370105'
          },
          {
            name: '历城区',
            value: '370112'
          },
          {
            name: '长清区',
            value: '370113'
          },
          {
            name: '平阴县',
            value: '370124'
          },
          {
            name: '济阳县',
            value: '370125'
          },
          {
            name: '商河县',
            value: '370126'
          },
          {
            name: '章丘市',
            value: '370181'
          }
        ]
      },
      {
        name: '青岛市',
        value: '370200',
        subRegion: [
          {
            name: '市辖区',
            value: '370201'
          },
          {
            name: '市南区',
            value: '370202'
          },
          {
            name: '市北区',
            value: '370203'
          },
          {
            name: '黄岛区',
            value: '370211'
          },
          {
            name: '崂山区',
            value: '370212'
          },
          {
            name: '李沧区',
            value: '370213'
          },
          {
            name: '城阳区',
            value: '370214'
          },
          {
            name: '胶州市',
            value: '370281'
          },
          {
            name: '即墨市',
            value: '370282'
          },
          {
            name: '平度市',
            value: '370283'
          },
          {
            name: '莱西市',
            value: '370285'
          }
        ]
      },
      {
        name: '淄博市',
        value: '370300',
        subRegion: [
          {
            name: '市辖区',
            value: '370301'
          },
          {
            name: '淄川区',
            value: '370302'
          },
          {
            name: '张店区',
            value: '370303'
          },
          {
            name: '博山区',
            value: '370304'
          },
          {
            name: '临淄区',
            value: '370305'
          },
          {
            name: '周村区',
            value: '370306'
          },
          {
            name: '桓台县',
            value: '370321'
          },
          {
            name: '高青县',
            value: '370322'
          },
          {
            name: '沂源县',
            value: '370323'
          }
        ]
      },
      {
        name: '枣庄市',
        value: '370400',
        subRegion: [
          {
            name: '市辖区',
            value: '370401'
          },
          {
            name: '市中区',
            value: '370402'
          },
          {
            name: '薛城区',
            value: '370403'
          },
          {
            name: '峄城区',
            value: '370404'
          },
          {
            name: '台儿庄区',
            value: '370405'
          },
          {
            name: '山亭区',
            value: '370406'
          },
          {
            name: '滕州市',
            value: '370481'
          }
        ]
      },
      {
        name: '东营市',
        value: '370500',
        subRegion: [
          {
            name: '市辖区',
            value: '370501'
          },
          {
            name: '东营区',
            value: '370502'
          },
          {
            name: '河口区',
            value: '370503'
          },
          {
            name: '垦利县',
            value: '370521'
          },
          {
            name: '利津县',
            value: '370522'
          },
          {
            name: '广饶县',
            value: '370523'
          }
        ]
      },
      {
        name: '烟台市',
        value: '370600',
        subRegion: [
          {
            name: '市辖区',
            value: '370601'
          },
          {
            name: '芝罘区',
            value: '370602'
          },
          {
            name: '福山区',
            value: '370611'
          },
          {
            name: '牟平区',
            value: '370612'
          },
          {
            name: '莱山区',
            value: '370613'
          },
          {
            name: '长岛县',
            value: '370634'
          },
          {
            name: '龙口市',
            value: '370681'
          },
          {
            name: '莱阳市',
            value: '370682'
          },
          {
            name: '莱州市',
            value: '370683'
          },
          {
            name: '蓬莱市',
            value: '370684'
          },
          {
            name: '招远市',
            value: '370685'
          },
          {
            name: '栖霞市',
            value: '370686'
          },
          {
            name: '海阳市',
            value: '370687'
          }
        ]
      },
      {
        name: '潍坊市',
        value: '370700',
        subRegion: [
          {
            name: '市辖区',
            value: '370701'
          },
          {
            name: '潍城区',
            value: '370702'
          },
          {
            name: '寒亭区',
            value: '370703'
          },
          {
            name: '坊子区',
            value: '370704'
          },
          {
            name: '奎文区',
            value: '370705'
          },
          {
            name: '临朐县',
            value: '370724'
          },
          {
            name: '昌乐县',
            value: '370725'
          },
          {
            name: '青州市',
            value: '370781'
          },
          {
            name: '诸城市',
            value: '370782'
          },
          {
            name: '寿光市',
            value: '370783'
          },
          {
            name: '安丘市',
            value: '370784'
          },
          {
            name: '高密市',
            value: '370785'
          },
          {
            name: '昌邑市',
            value: '370786'
          }
        ]
      },
      {
        name: '济宁市',
        value: '370800',
        subRegion: [
          {
            name: '市辖区',
            value: '370801'
          },
          {
            name: '任城区',
            value: '370811'
          },
          {
            name: '兖州区',
            value: '370812'
          },
          {
            name: '微山县',
            value: '370826'
          },
          {
            name: '鱼台县',
            value: '370827'
          },
          {
            name: '金乡县',
            value: '370828'
          },
          {
            name: '嘉祥县',
            value: '370829'
          },
          {
            name: '汶上县',
            value: '370830'
          },
          {
            name: '泗水县',
            value: '370831'
          },
          {
            name: '梁山县',
            value: '370832'
          },
          {
            name: '曲阜市',
            value: '370881'
          },
          {
            name: '邹城市',
            value: '370883'
          }
        ]
      },
      {
        name: '泰安市',
        value: '370900',
        subRegion: [
          {
            name: '市辖区',
            value: '370901'
          },
          {
            name: '泰山区',
            value: '370902'
          },
          {
            name: '岱岳区',
            value: '370911'
          },
          {
            name: '宁阳县',
            value: '370921'
          },
          {
            name: '东平县',
            value: '370923'
          },
          {
            name: '新泰市',
            value: '370982'
          },
          {
            name: '肥城市',
            value: '370983'
          }
        ]
      },
      {
        name: '威海市',
        value: '371000',
        subRegion: [
          {
            name: '市辖区',
            value: '371001'
          },
          {
            name: '环翠区',
            value: '371002'
          },
          {
            name: '文登市',
            value: '371081'
          },
          {
            name: '荣成市',
            value: '371082'
          },
          {
            name: '乳山市',
            value: '371083'
          }
        ]
      },
      {
        name: '日照市',
        value: '371100',
        subRegion: [
          {
            name: '市辖区',
            value: '371101'
          },
          {
            name: '东港区',
            value: '371102'
          },
          {
            name: '岚山区',
            value: '371103'
          },
          {
            name: '五莲县',
            value: '371121'
          },
          {
            name: '莒县',
            value: '371122'
          }
        ]
      },
      {
        name: '莱芜市',
        value: '371200',
        subRegion: [
          {
            name: '市辖区',
            value: '371201'
          },
          {
            name: '莱城区',
            value: '371202'
          },
          {
            name: '钢城区',
            value: '371203'
          }
        ]
      },
      {
        name: '临沂市',
        value: '371300',
        subRegion: [
          {
            name: '市辖区',
            value: '371301'
          },
          {
            name: '兰山区',
            value: '371302'
          },
          {
            name: '罗庄区',
            value: '371311'
          },
          {
            name: '河东区',
            value: '371312'
          },
          {
            name: '沂南县',
            value: '371321'
          },
          {
            name: '郯城县',
            value: '371322'
          },
          {
            name: '沂水县',
            value: '371323'
          },
          {
            name: '兰陵县',
            value: '371324'
          },
          {
            name: '费县',
            value: '371325'
          },
          {
            name: '平邑县',
            value: '371326'
          },
          {
            name: '莒南县',
            value: '371327'
          },
          {
            name: '蒙阴县',
            value: '371328'
          },
          {
            name: '临沭县',
            value: '371329'
          }
        ]
      },
      {
        name: '德州市',
        value: '371400',
        subRegion: [
          {
            name: '市辖区',
            value: '371401'
          },
          {
            name: '德城区',
            value: '371402'
          },
          {
            name: '陵城区',
            value: '371403'
          },
          {
            name: '宁津县',
            value: '371422'
          },
          {
            name: '庆云县',
            value: '371423'
          },
          {
            name: '临邑县',
            value: '371424'
          },
          {
            name: '齐河县',
            value: '371425'
          },
          {
            name: '平原县',
            value: '371426'
          },
          {
            name: '夏津县',
            value: '371427'
          },
          {
            name: '武城县',
            value: '371428'
          },
          {
            name: '乐陵市',
            value: '371481'
          },
          {
            name: '禹城市',
            value: '371482'
          }
        ]
      },
      {
        name: '聊城市',
        value: '371500',
        subRegion: [
          {
            name: '市辖区',
            value: '371501'
          },
          {
            name: '东昌府区',
            value: '371502'
          },
          {
            name: '阳谷县',
            value: '371521'
          },
          {
            name: '莘县',
            value: '371522'
          },
          {
            name: '茌平县',
            value: '371523'
          },
          {
            name: '东阿县',
            value: '371524'
          },
          {
            name: '冠县',
            value: '371525'
          },
          {
            name: '高唐县',
            value: '371526'
          },
          {
            name: '临清市',
            value: '371581'
          }
        ]
      },
      {
        name: '滨州市',
        value: '371600',
        subRegion: [
          {
            name: '市辖区',
            value: '371601'
          },
          {
            name: '滨城区',
            value: '371602'
          },
          {
            name: '沾化区',
            value: '371603'
          },
          {
            name: '惠民县',
            value: '371621'
          },
          {
            name: '阳信县',
            value: '371622'
          },
          {
            name: '无棣县',
            value: '371623'
          },
          {
            name: '博兴县',
            value: '371625'
          },
          {
            name: '邹平县',
            value: '371626'
          }
        ]
      },
      {
        name: '菏泽市',
        value: '371700',
        subRegion: [
          {
            name: '市辖区',
            value: '371701'
          },
          {
            name: '牡丹区',
            value: '371702'
          },
          {
            name: '曹县',
            value: '371721'
          },
          {
            name: '单县',
            value: '371722'
          },
          {
            name: '成武县',
            value: '371723'
          },
          {
            name: '巨野县',
            value: '371724'
          },
          {
            name: '郓城县',
            value: '371725'
          },
          {
            name: '鄄城县',
            value: '371726'
          },
          {
            name: '定陶县',
            value: '371727'
          },
          {
            name: '东明县',
            value: '371728'
          }
        ]
      }
    ]
  },
  {
    name: '河南省',
    value: '410000',
    subRegion: [
      {
        name: '郑州市',
        value: '410100',
        subRegion: [
          {
            name: '市辖区',
            value: '410101'
          },
          {
            name: '中原区',
            value: '410102'
          },
          {
            name: '二七区',
            value: '410103'
          },
          {
            name: '管城回族区',
            value: '410104'
          },
          {
            name: '金水区',
            value: '410105'
          },
          {
            name: '上街区',
            value: '410106'
          },
          {
            name: '惠济区',
            value: '410108'
          },
          {
            name: '中牟县',
            value: '410122'
          },
          {
            name: '巩义市',
            value: '410181'
          },
          {
            name: '荥阳市',
            value: '410182'
          },
          {
            name: '新密市',
            value: '410183'
          },
          {
            name: '新郑市',
            value: '410184'
          },
          {
            name: '登封市',
            value: '410185'
          }
        ]
      },
      {
        name: '开封市',
        value: '410200',
        subRegion: [
          {
            name: '市辖区',
            value: '410201'
          },
          {
            name: '龙亭区',
            value: '410202'
          },
          {
            name: '顺河回族区',
            value: '410203'
          },
          {
            name: '鼓楼区',
            value: '410204'
          },
          {
            name: '禹王台区',
            value: '410205'
          },
          {
            name: '祥符区',
            value: '410212'
          },
          {
            name: '杞县',
            value: '410221'
          },
          {
            name: '通许县',
            value: '410222'
          },
          {
            name: '尉氏县',
            value: '410223'
          },
          {
            name: '兰考县',
            value: '410225'
          }
        ]
      },
      {
        name: '洛阳市',
        value: '410300',
        subRegion: [
          {
            name: '市辖区',
            value: '410301'
          },
          {
            name: '老城区',
            value: '410302'
          },
          {
            name: '西工区',
            value: '410303'
          },
          {
            name: '瀍河回族区',
            value: '410304'
          },
          {
            name: '涧西区',
            value: '410305'
          },
          {
            name: '吉利区',
            value: '410306'
          },
          {
            name: '洛龙区',
            value: '410311'
          },
          {
            name: '孟津县',
            value: '410322'
          },
          {
            name: '新安县',
            value: '410323'
          },
          {
            name: '栾川县',
            value: '410324'
          },
          {
            name: '嵩县',
            value: '410325'
          },
          {
            name: '汝阳县',
            value: '410326'
          },
          {
            name: '宜阳县',
            value: '410327'
          },
          {
            name: '洛宁县',
            value: '410328'
          },
          {
            name: '伊川县',
            value: '410329'
          },
          {
            name: '偃师市',
            value: '410381'
          }
        ]
      },
      {
        name: '平顶山市',
        value: '410400',
        subRegion: [
          {
            name: '市辖区',
            value: '410401'
          },
          {
            name: '新华区',
            value: '410402'
          },
          {
            name: '卫东区',
            value: '410403'
          },
          {
            name: '石龙区',
            value: '410404'
          },
          {
            name: '湛河区',
            value: '410411'
          },
          {
            name: '宝丰县',
            value: '410421'
          },
          {
            name: '叶县',
            value: '410422'
          },
          {
            name: '鲁山县',
            value: '410423'
          },
          {
            name: '郏县',
            value: '410425'
          },
          {
            name: '舞钢市',
            value: '410481'
          },
          {
            name: '汝州市',
            value: '410482'
          }
        ]
      },
      {
        name: '安阳市',
        value: '410500',
        subRegion: [
          {
            name: '市辖区',
            value: '410501'
          },
          {
            name: '文峰区',
            value: '410502'
          },
          {
            name: '北关区',
            value: '410503'
          },
          {
            name: '殷都区',
            value: '410505'
          },
          {
            name: '龙安区',
            value: '410506'
          },
          {
            name: '安阳县',
            value: '410522'
          },
          {
            name: '汤阴县',
            value: '410523'
          },
          {
            name: '滑县',
            value: '410526'
          },
          {
            name: '内黄县',
            value: '410527'
          },
          {
            name: '林州市',
            value: '410581'
          }
        ]
      },
      {
        name: '鹤壁市',
        value: '410600',
        subRegion: [
          {
            name: '市辖区',
            value: '410601'
          },
          {
            name: '鹤山区',
            value: '410602'
          },
          {
            name: '山城区',
            value: '410603'
          },
          {
            name: '淇滨区',
            value: '410611'
          },
          {
            name: '浚县',
            value: '410621'
          },
          {
            name: '淇县',
            value: '410622'
          }
        ]
      },
      {
        name: '新乡市',
        value: '410700',
        subRegion: [
          {
            name: '市辖区',
            value: '410701'
          },
          {
            name: '红旗区',
            value: '410702'
          },
          {
            name: '卫滨区',
            value: '410703'
          },
          {
            name: '凤泉区',
            value: '410704'
          },
          {
            name: '牧野区',
            value: '410711'
          },
          {
            name: '新乡县',
            value: '410721'
          },
          {
            name: '获嘉县',
            value: '410724'
          },
          {
            name: '原阳县',
            value: '410725'
          },
          {
            name: '延津县',
            value: '410726'
          },
          {
            name: '封丘县',
            value: '410727'
          },
          {
            name: '长垣县',
            value: '410728'
          },
          {
            name: '卫辉市',
            value: '410781'
          },
          {
            name: '辉县市',
            value: '410782'
          }
        ]
      },
      {
        name: '焦作市',
        value: '410800',
        subRegion: [
          {
            name: '市辖区',
            value: '410801'
          },
          {
            name: '解放区',
            value: '410802'
          },
          {
            name: '中站区',
            value: '410803'
          },
          {
            name: '马村区',
            value: '410804'
          },
          {
            name: '山阳区',
            value: '410811'
          },
          {
            name: '修武县',
            value: '410821'
          },
          {
            name: '博爱县',
            value: '410822'
          },
          {
            name: '武陟县',
            value: '410823'
          },
          {
            name: '温县',
            value: '410825'
          },
          {
            name: '沁阳市',
            value: '410882'
          },
          {
            name: '孟州市',
            value: '410883'
          }
        ]
      },
      {
        name: '濮阳市',
        value: '410900',
        subRegion: [
          {
            name: '市辖区',
            value: '410901'
          },
          {
            name: '华龙区',
            value: '410902'
          },
          {
            name: '清丰县',
            value: '410922'
          },
          {
            name: '南乐县',
            value: '410923'
          },
          {
            name: '范县',
            value: '410926'
          },
          {
            name: '台前县',
            value: '410927'
          },
          {
            name: '濮阳县',
            value: '410928'
          }
        ]
      },
      {
        name: '许昌市',
        value: '411000',
        subRegion: [
          {
            name: '市辖区',
            value: '411001'
          },
          {
            name: '魏都区',
            value: '411002'
          },
          {
            name: '许昌县',
            value: '411023'
          },
          {
            name: '鄢陵县',
            value: '411024'
          },
          {
            name: '襄城县',
            value: '411025'
          },
          {
            name: '禹州市',
            value: '411081'
          },
          {
            name: '长葛市',
            value: '411082'
          }
        ]
      },
      {
        name: '漯河市',
        value: '411100',
        subRegion: [
          {
            name: '市辖区',
            value: '411101'
          },
          {
            name: '源汇区',
            value: '411102'
          },
          {
            name: '郾城区',
            value: '411103'
          },
          {
            name: '召陵区',
            value: '411104'
          },
          {
            name: '舞阳县',
            value: '411121'
          },
          {
            name: '临颍县',
            value: '411122'
          }
        ]
      },
      {
        name: '三门峡市',
        value: '411200',
        subRegion: [
          {
            name: '市辖区',
            value: '411201'
          },
          {
            name: '湖滨区',
            value: '411202'
          },
          {
            name: '渑池县',
            value: '411221'
          },
          {
            name: '陕县',
            value: '411222'
          },
          {
            name: '卢氏县',
            value: '411224'
          },
          {
            name: '义马市',
            value: '411281'
          },
          {
            name: '灵宝市',
            value: '411282'
          }
        ]
      },
      {
        name: '南阳市',
        value: '411300',
        subRegion: [
          {
            name: '市辖区',
            value: '411301'
          },
          {
            name: '宛城区',
            value: '411302'
          },
          {
            name: '卧龙区',
            value: '411303'
          },
          {
            name: '南召县',
            value: '411321'
          },
          {
            name: '方城县',
            value: '411322'
          },
          {
            name: '西峡县',
            value: '411323'
          },
          {
            name: '镇平县',
            value: '411324'
          },
          {
            name: '内乡县',
            value: '411325'
          },
          {
            name: '淅川县',
            value: '411326'
          },
          {
            name: '社旗县',
            value: '411327'
          },
          {
            name: '唐河县',
            value: '411328'
          },
          {
            name: '新野县',
            value: '411329'
          },
          {
            name: '桐柏县',
            value: '411330'
          },
          {
            name: '邓州市',
            value: '411381'
          }
        ]
      },
      {
        name: '商丘市',
        value: '411400',
        subRegion: [
          {
            name: '市辖区',
            value: '411401'
          },
          {
            name: '梁园区',
            value: '411402'
          },
          {
            name: '睢阳区',
            value: '411403'
          },
          {
            name: '民权县',
            value: '411421'
          },
          {
            name: '睢县',
            value: '411422'
          },
          {
            name: '宁陵县',
            value: '411423'
          },
          {
            name: '柘城县',
            value: '411424'
          },
          {
            name: '虞城县',
            value: '411425'
          },
          {
            name: '夏邑县',
            value: '411426'
          },
          {
            name: '永城市',
            value: '411481'
          }
        ]
      },
      {
        name: '信阳市',
        value: '411500',
        subRegion: [
          {
            name: '市辖区',
            value: '411501'
          },
          {
            name: '浉河区',
            value: '411502'
          },
          {
            name: '平桥区',
            value: '411503'
          },
          {
            name: '罗山县',
            value: '411521'
          },
          {
            name: '光山县',
            value: '411522'
          },
          {
            name: '新县',
            value: '411523'
          },
          {
            name: '商城县',
            value: '411524'
          },
          {
            name: '固始县',
            value: '411525'
          },
          {
            name: '潢川县',
            value: '411526'
          },
          {
            name: '淮滨县',
            value: '411527'
          },
          {
            name: '息县',
            value: '411528'
          }
        ]
      },
      {
        name: '周口市',
        value: '411600',
        subRegion: [
          {
            name: '市辖区',
            value: '411601'
          },
          {
            name: '川汇区',
            value: '411602'
          },
          {
            name: '扶沟县',
            value: '411621'
          },
          {
            name: '西华县',
            value: '411622'
          },
          {
            name: '商水县',
            value: '411623'
          },
          {
            name: '沈丘县',
            value: '411624'
          },
          {
            name: '郸城县',
            value: '411625'
          },
          {
            name: '淮阳县',
            value: '411626'
          },
          {
            name: '太康县',
            value: '411627'
          },
          {
            name: '鹿邑县',
            value: '411628'
          },
          {
            name: '项城市',
            value: '411681'
          }
        ]
      },
      {
        name: '驻马店市',
        value: '411700',
        subRegion: [
          {
            name: '市辖区',
            value: '411701'
          },
          {
            name: '驿城区',
            value: '411702'
          },
          {
            name: '西平县',
            value: '411721'
          },
          {
            name: '上蔡县',
            value: '411722'
          },
          {
            name: '平舆县',
            value: '411723'
          },
          {
            name: '正阳县',
            value: '411724'
          },
          {
            name: '确山县',
            value: '411725'
          },
          {
            name: '泌阳县',
            value: '411726'
          },
          {
            name: '汝南县',
            value: '411727'
          },
          {
            name: '遂平县',
            value: '411728'
          },
          {
            name: '新蔡县',
            value: '411729'
          }
        ]
      },
      {
        name: '济源市',
        value: '419001'
      }
    ]
  },
  {
    name: '湖北省',
    value: '420000',
    subRegion: [
      {
        name: '武汉市',
        value: '420100',
        subRegion: [
          {
            name: '市辖区',
            value: '420101'
          },
          {
            name: '江岸区',
            value: '420102'
          },
          {
            name: '江汉区',
            value: '420103'
          },
          {
            name: '硚口区',
            value: '420104'
          },
          {
            name: '汉阳区',
            value: '420105'
          },
          {
            name: '武昌区',
            value: '420106'
          },
          {
            name: '青山区',
            value: '420107'
          },
          {
            name: '洪山区',
            value: '420111'
          },
          {
            name: '东西湖区',
            value: '420112'
          },
          {
            name: '汉南区',
            value: '420113'
          },
          {
            name: '蔡甸区',
            value: '420114'
          },
          {
            name: '江夏区',
            value: '420115'
          },
          {
            name: '黄陂区',
            value: '420116'
          },
          {
            name: '新洲区',
            value: '420117'
          }
        ]
      },
      {
        name: '黄石市',
        value: '420200',
        subRegion: [
          {
            name: '市辖区',
            value: '420201'
          },
          {
            name: '黄石港区',
            value: '420202'
          },
          {
            name: '西塞山区',
            value: '420203'
          },
          {
            name: '下陆区',
            value: '420204'
          },
          {
            name: '铁山区',
            value: '420205'
          },
          {
            name: '阳新县',
            value: '420222'
          },
          {
            name: '大冶市',
            value: '420281'
          }
        ]
      },
      {
        name: '十堰市',
        value: '420300',
        subRegion: [
          {
            name: '市辖区',
            value: '420301'
          },
          {
            name: '茅箭区',
            value: '420302'
          },
          {
            name: '张湾区',
            value: '420303'
          },
          {
            name: '郧阳区',
            value: '420304'
          },
          {
            name: '郧西县',
            value: '420322'
          },
          {
            name: '竹山县',
            value: '420323'
          },
          {
            name: '竹溪县',
            value: '420324'
          },
          {
            name: '房县',
            value: '420325'
          },
          {
            name: '丹江口市',
            value: '420381'
          }
        ]
      },
      {
        name: '宜昌市',
        value: '420500',
        subRegion: [
          {
            name: '市辖区',
            value: '420501'
          },
          {
            name: '西陵区',
            value: '420502'
          },
          {
            name: '伍家岗区',
            value: '420503'
          },
          {
            name: '点军区',
            value: '420504'
          },
          {
            name: '猇亭区',
            value: '420505'
          },
          {
            name: '夷陵区',
            value: '420506'
          },
          {
            name: '远安县',
            value: '420525'
          },
          {
            name: '兴山县',
            value: '420526'
          },
          {
            name: '秭归县',
            value: '420527'
          },
          {
            name: '长阳土家族自治县',
            value: '420528'
          },
          {
            name: '五峰土家族自治县',
            value: '420529'
          },
          {
            name: '宜都市',
            value: '420581'
          },
          {
            name: '当阳市',
            value: '420582'
          },
          {
            name: '枝江市',
            value: '420583'
          }
        ]
      },
      {
        name: '襄阳市',
        value: '420600',
        subRegion: [
          {
            name: '市辖区',
            value: '420601'
          },
          {
            name: '襄城区',
            value: '420602'
          },
          {
            name: '樊城区',
            value: '420606'
          },
          {
            name: '襄州区',
            value: '420607'
          },
          {
            name: '南漳县',
            value: '420624'
          },
          {
            name: '谷城县',
            value: '420625'
          },
          {
            name: '保康县',
            value: '420626'
          },
          {
            name: '老河口市',
            value: '420682'
          },
          {
            name: '枣阳市',
            value: '420683'
          },
          {
            name: '宜城市',
            value: '420684'
          }
        ]
      },
      {
        name: '鄂州市',
        value: '420700',
        subRegion: [
          {
            name: '市辖区',
            value: '420701'
          },
          {
            name: '梁子湖区',
            value: '420702'
          },
          {
            name: '华容区',
            value: '420703'
          },
          {
            name: '鄂城区',
            value: '420704'
          }
        ]
      },
      {
        name: '荆门市',
        value: '420800',
        subRegion: [
          {
            name: '市辖区',
            value: '420801'
          },
          {
            name: '东宝区',
            value: '420802'
          },
          {
            name: '掇刀区',
            value: '420804'
          },
          {
            name: '京山县',
            value: '420821'
          },
          {
            name: '沙洋县',
            value: '420822'
          },
          {
            name: '钟祥市',
            value: '420881'
          }
        ]
      },
      {
        name: '孝感市',
        value: '420900',
        subRegion: [
          {
            name: '市辖区',
            value: '420901'
          },
          {
            name: '孝南区',
            value: '420902'
          },
          {
            name: '孝昌县',
            value: '420921'
          },
          {
            name: '大悟县',
            value: '420922'
          },
          {
            name: '云梦县',
            value: '420923'
          },
          {
            name: '应城市',
            value: '420981'
          },
          {
            name: '安陆市',
            value: '420982'
          },
          {
            name: '汉川市',
            value: '420984'
          }
        ]
      },
      {
        name: '荆州市',
        value: '421000',
        subRegion: [
          {
            name: '市辖区',
            value: '421001'
          },
          {
            name: '沙市区',
            value: '421002'
          },
          {
            name: '荆州区',
            value: '421003'
          },
          {
            name: '公安县',
            value: '421022'
          },
          {
            name: '监利县',
            value: '421023'
          },
          {
            name: '江陵县',
            value: '421024'
          },
          {
            name: '石首市',
            value: '421081'
          },
          {
            name: '洪湖市',
            value: '421083'
          },
          {
            name: '松滋市',
            value: '421087'
          }
        ]
      },
      {
        name: '黄冈市',
        value: '421100',
        subRegion: [
          {
            name: '市辖区',
            value: '421101'
          },
          {
            name: '黄州区',
            value: '421102'
          },
          {
            name: '团风县',
            value: '421121'
          },
          {
            name: '红安县',
            value: '421122'
          },
          {
            name: '罗田县',
            value: '421123'
          },
          {
            name: '英山县',
            value: '421124'
          },
          {
            name: '浠水县',
            value: '421125'
          },
          {
            name: '蕲春县',
            value: '421126'
          },
          {
            name: '黄梅县',
            value: '421127'
          },
          {
            name: '麻城市',
            value: '421181'
          },
          {
            name: '武穴市',
            value: '421182'
          }
        ]
      },
      {
        name: '咸宁市',
        value: '421200',
        subRegion: [
          {
            name: '市辖区',
            value: '421201'
          },
          {
            name: '咸安区',
            value: '421202'
          },
          {
            name: '嘉鱼县',
            value: '421221'
          },
          {
            name: '通城县',
            value: '421222'
          },
          {
            name: '崇阳县',
            value: '421223'
          },
          {
            name: '通山县',
            value: '421224'
          },
          {
            name: '赤壁市',
            value: '421281'
          }
        ]
      },
      {
        name: '随州市',
        value: '421300',
        subRegion: [
          {
            name: '市辖区',
            value: '421301'
          },
          {
            name: '曾都区',
            value: '421303'
          },
          {
            name: '随县',
            value: '421321'
          },
          {
            name: '广水市',
            value: '421381'
          }
        ]
      },
      {
        name: '恩施土家族苗族自治州',
        value: '422800',
        subRegion: [
          {
            name: '恩施市',
            value: '422801'
          },
          {
            name: '利川市',
            value: '422802'
          },
          {
            name: '建始县',
            value: '422822'
          },
          {
            name: '巴东县',
            value: '422823'
          },
          {
            name: '宣恩县',
            value: '422825'
          },
          {
            name: '咸丰县',
            value: '422826'
          },
          {
            name: '来凤县',
            value: '422827'
          },
          {
            name: '鹤峰县',
            value: '422828'
          }
        ]
      },
      {
        name: '仙桃市',
        value: '429004'
      },
      {
        name: '潜江市',
        value: '429005'
      },
      {
        name: '天门市',
        value: '429006'
      },
      {
        name: '神农架林区',
        value: '429021'
      }
    ]
  },
  {
    name: '湖南省',
    value: '430000',
    subRegion: [
      {
        name: '长沙市',
        value: '430100',
        subRegion: [
          {
            name: '市辖区',
            value: '430101'
          },
          {
            name: '芙蓉区',
            value: '430102'
          },
          {
            name: '天心区',
            value: '430103'
          },
          {
            name: '岳麓区',
            value: '430104'
          },
          {
            name: '开福区',
            value: '430105'
          },
          {
            name: '雨花区',
            value: '430111'
          },
          {
            name: '望城区',
            value: '430112'
          },
          {
            name: '长沙县',
            value: '430121'
          },
          {
            name: '宁乡县',
            value: '430124'
          },
          {
            name: '浏阳市',
            value: '430181'
          }
        ]
      },
      {
        name: '株洲市',
        value: '430200',
        subRegion: [
          {
            name: '市辖区',
            value: '430201'
          },
          {
            name: '荷塘区',
            value: '430202'
          },
          {
            name: '芦淞区',
            value: '430203'
          },
          {
            name: '石峰区',
            value: '430204'
          },
          {
            name: '天元区',
            value: '430211'
          },
          {
            name: '株洲县',
            value: '430221'
          },
          {
            name: '攸县',
            value: '430223'
          },
          {
            name: '茶陵县',
            value: '430224'
          },
          {
            name: '炎陵县',
            value: '430225'
          },
          {
            name: '醴陵市',
            value: '430281'
          }
        ]
      },
      {
        name: '湘潭市',
        value: '430300',
        subRegion: [
          {
            name: '市辖区',
            value: '430301'
          },
          {
            name: '雨湖区',
            value: '430302'
          },
          {
            name: '岳塘区',
            value: '430304'
          },
          {
            name: '湘潭县',
            value: '430321'
          },
          {
            name: '湘乡市',
            value: '430381'
          },
          {
            name: '韶山市',
            value: '430382'
          }
        ]
      },
      {
        name: '衡阳市',
        value: '430400',
        subRegion: [
          {
            name: '市辖区',
            value: '430401'
          },
          {
            name: '珠晖区',
            value: '430405'
          },
          {
            name: '雁峰区',
            value: '430406'
          },
          {
            name: '石鼓区',
            value: '430407'
          },
          {
            name: '蒸湘区',
            value: '430408'
          },
          {
            name: '南岳区',
            value: '430412'
          },
          {
            name: '衡阳县',
            value: '430421'
          },
          {
            name: '衡南县',
            value: '430422'
          },
          {
            name: '衡山县',
            value: '430423'
          },
          {
            name: '衡东县',
            value: '430424'
          },
          {
            name: '祁东县',
            value: '430426'
          },
          {
            name: '耒阳市',
            value: '430481'
          },
          {
            name: '常宁市',
            value: '430482'
          }
        ]
      },
      {
        name: '邵阳市',
        value: '430500',
        subRegion: [
          {
            name: '市辖区',
            value: '430501'
          },
          {
            name: '双清区',
            value: '430502'
          },
          {
            name: '大祥区',
            value: '430503'
          },
          {
            name: '北塔区',
            value: '430511'
          },
          {
            name: '邵东县',
            value: '430521'
          },
          {
            name: '新邵县',
            value: '430522'
          },
          {
            name: '邵阳县',
            value: '430523'
          },
          {
            name: '隆回县',
            value: '430524'
          },
          {
            name: '洞口县',
            value: '430525'
          },
          {
            name: '绥宁县',
            value: '430527'
          },
          {
            name: '新宁县',
            value: '430528'
          },
          {
            name: '城步苗族自治县',
            value: '430529'
          },
          {
            name: '武冈市',
            value: '430581'
          }
        ]
      },
      {
        name: '岳阳市',
        value: '430600',
        subRegion: [
          {
            name: '市辖区',
            value: '430601'
          },
          {
            name: '岳阳楼区',
            value: '430602'
          },
          {
            name: '云溪区',
            value: '430603'
          },
          {
            name: '君山区',
            value: '430611'
          },
          {
            name: '岳阳县',
            value: '430621'
          },
          {
            name: '华容县',
            value: '430623'
          },
          {
            name: '湘阴县',
            value: '430624'
          },
          {
            name: '平江县',
            value: '430626'
          },
          {
            name: '汨罗市',
            value: '430681'
          },
          {
            name: '临湘市',
            value: '430682'
          }
        ]
      },
      {
        name: '常德市',
        value: '430700',
        subRegion: [
          {
            name: '市辖区',
            value: '430701'
          },
          {
            name: '武陵区',
            value: '430702'
          },
          {
            name: '鼎城区',
            value: '430703'
          },
          {
            name: '安乡县',
            value: '430721'
          },
          {
            name: '汉寿县',
            value: '430722'
          },
          {
            name: '澧县',
            value: '430723'
          },
          {
            name: '临澧县',
            value: '430724'
          },
          {
            name: '桃源县',
            value: '430725'
          },
          {
            name: '石门县',
            value: '430726'
          },
          {
            name: '津市市',
            value: '430781'
          }
        ]
      },
      {
        name: '张家界市',
        value: '430800',
        subRegion: [
          {
            name: '市辖区',
            value: '430801'
          },
          {
            name: '永定区',
            value: '430802'
          },
          {
            name: '武陵源区',
            value: '430811'
          },
          {
            name: '慈利县',
            value: '430821'
          },
          {
            name: '桑植县',
            value: '430822'
          }
        ]
      },
      {
        name: '益阳市',
        value: '430900',
        subRegion: [
          {
            name: '市辖区',
            value: '430901'
          },
          {
            name: '资阳区',
            value: '430902'
          },
          {
            name: '赫山区',
            value: '430903'
          },
          {
            name: '南县',
            value: '430921'
          },
          {
            name: '桃江县',
            value: '430922'
          },
          {
            name: '安化县',
            value: '430923'
          },
          {
            name: '沅江市',
            value: '430981'
          }
        ]
      },
      {
        name: '郴州市',
        value: '431000',
        subRegion: [
          {
            name: '市辖区',
            value: '431001'
          },
          {
            name: '北湖区',
            value: '431002'
          },
          {
            name: '苏仙区',
            value: '431003'
          },
          {
            name: '桂阳县',
            value: '431021'
          },
          {
            name: '宜章县',
            value: '431022'
          },
          {
            name: '永兴县',
            value: '431023'
          },
          {
            name: '嘉禾县',
            value: '431024'
          },
          {
            name: '临武县',
            value: '431025'
          },
          {
            name: '汝城县',
            value: '431026'
          },
          {
            name: '桂东县',
            value: '431027'
          },
          {
            name: '安仁县',
            value: '431028'
          },
          {
            name: '资兴市',
            value: '431081'
          }
        ]
      },
      {
        name: '永州市',
        value: '431100',
        subRegion: [
          {
            name: '市辖区',
            value: '431101'
          },
          {
            name: '零陵区',
            value: '431102'
          },
          {
            name: '冷水滩区',
            value: '431103'
          },
          {
            name: '祁阳县',
            value: '431121'
          },
          {
            name: '东安县',
            value: '431122'
          },
          {
            name: '双牌县',
            value: '431123'
          },
          {
            name: '道县',
            value: '431124'
          },
          {
            name: '江永县',
            value: '431125'
          },
          {
            name: '宁远县',
            value: '431126'
          },
          {
            name: '蓝山县',
            value: '431127'
          },
          {
            name: '新田县',
            value: '431128'
          },
          {
            name: '江华瑶族自治县',
            value: '431129'
          }
        ]
      },
      {
        name: '怀化市',
        value: '431200',
        subRegion: [
          {
            name: '市辖区',
            value: '431201'
          },
          {
            name: '鹤城区',
            value: '431202'
          },
          {
            name: '中方县',
            value: '431221'
          },
          {
            name: '沅陵县',
            value: '431222'
          },
          {
            name: '辰溪县',
            value: '431223'
          },
          {
            name: '溆浦县',
            value: '431224'
          },
          {
            name: '会同县',
            value: '431225'
          },
          {
            name: '麻阳苗族自治县',
            value: '431226'
          },
          {
            name: '新晃侗族自治县',
            value: '431227'
          },
          {
            name: '芷江侗族自治县',
            value: '431228'
          },
          {
            name: '靖州苗族侗族自治县',
            value: '431229'
          },
          {
            name: '通道侗族自治县',
            value: '431230'
          },
          {
            name: '洪江市',
            value: '431281'
          }
        ]
      },
      {
        name: '娄底市',
        value: '431300',
        subRegion: [
          {
            name: '市辖区',
            value: '431301'
          },
          {
            name: '娄星区',
            value: '431302'
          },
          {
            name: '双峰县',
            value: '431321'
          },
          {
            name: '新化县',
            value: '431322'
          },
          {
            name: '冷水江市',
            value: '431381'
          },
          {
            name: '涟源市',
            value: '431382'
          }
        ]
      },
      {
        name: '湘西土家族苗族自治州',
        value: '433100',
        subRegion: [
          {
            name: '吉首市',
            value: '433101'
          },
          {
            name: '泸溪县',
            value: '433122'
          },
          {
            name: '凤凰县',
            value: '433123'
          },
          {
            name: '花垣县',
            value: '433124'
          },
          {
            name: '保靖县',
            value: '433125'
          },
          {
            name: '古丈县',
            value: '433126'
          },
          {
            name: '永顺县',
            value: '433127'
          },
          {
            name: '龙山县',
            value: '433130'
          }
        ]
      }
    ]
  },
  {
    name: '广东省',
    value: '440000',
    disabled: true,
    subRegion: [
      {
        name: '广州市',
        value: '440100',
        subRegion: [
          {
            name: '市辖区',
            value: '440101'
          },
          {
            name: '荔湾区',
            value: '440103'
          },
          {
            name: '越秀区',
            value: '440104'
          },
          {
            name: '海珠区',
            value: '440105'
          },
          {
            name: '天河区',
            value: '440106'
          },
          {
            name: '白云区',
            value: '440111'
          },
          {
            name: '黄埔区',
            value: '440112'
          },
          {
            name: '番禺区',
            value: '440113'
          },
          {
            name: '花都区',
            value: '440114'
          },
          {
            name: '南沙区',
            value: '440115'
          },
          {
            name: '从化区',
            value: '440117'
          },
          {
            name: '增城区',
            value: '440118'
          }
        ]
      },
      {
        name: '韶关市',
        value: '440200',
        subRegion: [
          {
            name: '市辖区',
            value: '440201'
          },
          {
            name: '武江区',
            value: '440203'
          },
          {
            name: '浈江区',
            value: '440204'
          },
          {
            name: '曲江区',
            value: '440205'
          },
          {
            name: '始兴县',
            value: '440222'
          },
          {
            name: '仁化县',
            value: '440224'
          },
          {
            name: '翁源县',
            value: '440229'
          },
          {
            name: '乳源瑶族自治县',
            value: '440232'
          },
          {
            name: '新丰县',
            value: '440233'
          },
          {
            name: '乐昌市',
            value: '440281'
          },
          {
            name: '南雄市',
            value: '440282'
          }
        ]
      },
      {
        name: '深圳市',
        value: '440300',
        subRegion: [
          {
            name: '市辖区',
            value: '440301'
          },
          {
            name: '罗湖区',
            value: '440303'
          },
          {
            name: '福田区',
            value: '440304'
          },
          {
            name: '南山区',
            value: '440305'
          },
          {
            name: '宝安区',
            value: '440306'
          },
          {
            name: '龙岗区',
            value: '440307'
          },
          {
            name: '盐田区',
            value: '440308'
          }
        ]
      },
      {
        name: '珠海市',
        value: '440400',
        subRegion: [
          {
            name: '市辖区',
            value: '440401'
          },
          {
            name: '香洲区',
            value: '440402'
          },
          {
            name: '斗门区',
            value: '440403'
          },
          {
            name: '金湾区',
            value: '440404'
          }
        ]
      },
      {
        name: '汕头市',
        value: '440500',
        subRegion: [
          {
            name: '市辖区',
            value: '440501'
          },
          {
            name: '龙湖区',
            value: '440507'
          },
          {
            name: '金平区',
            value: '440511'
          },
          {
            name: '濠江区',
            value: '440512'
          },
          {
            name: '潮阳区',
            value: '440513'
          },
          {
            name: '潮南区',
            value: '440514'
          },
          {
            name: '澄海区',
            value: '440515'
          },
          {
            name: '南澳县',
            value: '440523'
          }
        ]
      },
      {
        name: '佛山市',
        value: '440600',
        subRegion: [
          {
            name: '市辖区',
            value: '440601'
          },
          {
            name: '禅城区',
            value: '440604'
          },
          {
            name: '南海区',
            value: '440605'
          },
          {
            name: '顺德区',
            value: '440606'
          },
          {
            name: '三水区',
            value: '440607'
          },
          {
            name: '高明区',
            value: '440608'
          }
        ]
      },
      {
        name: '江门市',
        value: '440700',
        subRegion: [
          {
            name: '市辖区',
            value: '440701'
          },
          {
            name: '蓬江区',
            value: '440703'
          },
          {
            name: '江海区',
            value: '440704'
          },
          {
            name: '新会区',
            value: '440705'
          },
          {
            name: '台山市',
            value: '440781'
          },
          {
            name: '开平市',
            value: '440783'
          },
          {
            name: '鹤山市',
            value: '440784'
          },
          {
            name: '恩平市',
            value: '440785'
          }
        ]
      },
      {
        name: '湛江市',
        value: '440800',
        subRegion: [
          {
            name: '市辖区',
            value: '440801'
          },
          {
            name: '赤坎区',
            value: '440802'
          },
          {
            name: '霞山区',
            value: '440803'
          },
          {
            name: '坡头区',
            value: '440804'
          },
          {
            name: '麻章区',
            value: '440811'
          },
          {
            name: '遂溪县',
            value: '440823'
          },
          {
            name: '徐闻县',
            value: '440825'
          },
          {
            name: '廉江市',
            value: '440881'
          },
          {
            name: '雷州市',
            value: '440882'
          },
          {
            name: '吴川市',
            value: '440883'
          }
        ]
      },
      {
        name: '茂名市',
        value: '440900',
        subRegion: [
          {
            name: '市辖区',
            value: '440901'
          },
          {
            name: '茂南区',
            value: '440902'
          },
          {
            name: '电白区',
            value: '440904'
          },
          {
            name: '高州市',
            value: '440981'
          },
          {
            name: '化州市',
            value: '440982'
          },
          {
            name: '信宜市',
            value: '440983'
          }
        ]
      },
      {
        name: '肇庆市',
        value: '441200',
        subRegion: [
          {
            name: '市辖区',
            value: '441201'
          },
          {
            name: '端州区',
            value: '441202'
          },
          {
            name: '鼎湖区',
            value: '441203'
          },
          {
            name: '广宁县',
            value: '441223'
          },
          {
            name: '怀集县',
            value: '441224'
          },
          {
            name: '封开县',
            value: '441225'
          },
          {
            name: '德庆县',
            value: '441226'
          },
          {
            name: '高要市',
            value: '441283'
          },
          {
            name: '四会市',
            value: '441284'
          }
        ]
      },
      {
        name: '惠州市',
        value: '441300',
        subRegion: [
          {
            name: '市辖区',
            value: '441301'
          },
          {
            name: '惠城区',
            value: '441302'
          },
          {
            name: '惠阳区',
            value: '441303'
          },
          {
            name: '博罗县',
            value: '441322'
          },
          {
            name: '惠东县',
            value: '441323'
          },
          {
            name: '龙门县',
            value: '441324'
          }
        ]
      },
      {
        name: '梅州市',
        value: '441400',
        subRegion: [
          {
            name: '市辖区',
            value: '441401'
          },
          {
            name: '梅江区',
            value: '441402'
          },
          {
            name: '梅县区',
            value: '441403'
          },
          {
            name: '大埔县',
            value: '441422'
          },
          {
            name: '丰顺县',
            value: '441423'
          },
          {
            name: '五华县',
            value: '441424'
          },
          {
            name: '平远县',
            value: '441426'
          },
          {
            name: '蕉岭县',
            value: '441427'
          },
          {
            name: '兴宁市',
            value: '441481'
          }
        ]
      },
      {
        name: '汕尾市',
        value: '441500',
        subRegion: [
          {
            name: '市辖区',
            value: '441501'
          },
          {
            name: '城区',
            value: '441502'
          },
          {
            name: '海丰县',
            value: '441521'
          },
          {
            name: '陆河县',
            value: '441523'
          },
          {
            name: '陆丰市',
            value: '441581'
          }
        ]
      },
      {
        name: '河源市',
        value: '441600',
        subRegion: [
          {
            name: '市辖区',
            value: '441601'
          },
          {
            name: '源城区',
            value: '441602'
          },
          {
            name: '紫金县',
            value: '441621'
          },
          {
            name: '龙川县',
            value: '441622'
          },
          {
            name: '连平县',
            value: '441623'
          },
          {
            name: '和平县',
            value: '441624'
          },
          {
            name: '东源县',
            value: '441625'
          }
        ]
      },
      {
        name: '阳江市',
        value: '441700',
        subRegion: [
          {
            name: '市辖区',
            value: '441701'
          },
          {
            name: '江城区',
            value: '441702'
          },
          {
            name: '阳东区',
            value: '441704'
          },
          {
            name: '阳西县',
            value: '441721'
          },
          {
            name: '阳春市',
            value: '441781'
          }
        ]
      },
      {
        name: '清远市',
        value: '441800',
        subRegion: [
          {
            name: '市辖区',
            value: '441801'
          },
          {
            name: '清城区',
            value: '441802'
          },
          {
            name: '清新区',
            value: '441803'
          },
          {
            name: '佛冈县',
            value: '441821'
          },
          {
            name: '阳山县',
            value: '441823'
          },
          {
            name: '连山壮族瑶族自治县',
            value: '441825'
          },
          {
            name: '连南瑶族自治县',
            value: '441826'
          },
          {
            name: '英德市',
            value: '441881'
          },
          {
            name: '连州市',
            value: '441882'
          }
        ]
      },
      {
        name: '东莞市',
        value: '441900',
        subRegion: []
      },
      {
        name: '中山市',
        value: '442000',
        subRegion: []
      },
      {
        name: '潮州市',
        value: '445100',
        subRegion: [
          {
            name: '市辖区',
            value: '445101'
          },
          {
            name: '湘桥区',
            value: '445102'
          },
          {
            name: '潮安区',
            value: '445103'
          },
          {
            name: '饶平县',
            value: '445122'
          }
        ]
      },
      {
        name: '揭阳市',
        value: '445200',
        subRegion: [
          {
            name: '市辖区',
            value: '445201'
          },
          {
            name: '榕城区',
            value: '445202'
          },
          {
            name: '揭东区',
            value: '445203'
          },
          {
            name: '揭西县',
            value: '445222'
          },
          {
            name: '惠来县',
            value: '445224'
          },
          {
            name: '普宁市',
            value: '445281'
          }
        ]
      },
      {
        name: '云浮市',
        value: '445300',
        subRegion: [
          {
            name: '市辖区',
            value: '445301'
          },
          {
            name: '云城区',
            value: '445302'
          },
          {
            name: '云安区',
            value: '445303'
          },
          {
            name: '新兴县',
            value: '445321'
          },
          {
            name: '郁南县',
            value: '445322'
          },
          {
            name: '罗定市',
            value: '445381'
          }
        ]
      }
    ]
  },
  {
    name: '广西壮族自治区',
    value: '450000',
    subRegion: [
      {
        name: '南宁市',
        value: '450100',
        subRegion: [
          {
            name: '市辖区',
            value: '450101'
          },
          {
            name: '兴宁区',
            value: '450102'
          },
          {
            name: '青秀区',
            value: '450103'
          },
          {
            name: '江南区',
            value: '450105'
          },
          {
            name: '西乡塘区',
            value: '450107'
          },
          {
            name: '良庆区',
            value: '450108'
          },
          {
            name: '邕宁区',
            value: '450109'
          },
          {
            name: '武鸣县',
            value: '450122'
          },
          {
            name: '隆安县',
            value: '450123'
          },
          {
            name: '马山县',
            value: '450124'
          },
          {
            name: '上林县',
            value: '450125'
          },
          {
            name: '宾阳县',
            value: '450126'
          },
          {
            name: '横县',
            value: '450127'
          }
        ]
      },
      {
        name: '柳州市',
        value: '450200',
        subRegion: [
          {
            name: '市辖区',
            value: '450201'
          },
          {
            name: '城中区',
            value: '450202'
          },
          {
            name: '鱼峰区',
            value: '450203'
          },
          {
            name: '柳南区',
            value: '450204'
          },
          {
            name: '柳北区',
            value: '450205'
          },
          {
            name: '柳江县',
            value: '450221'
          },
          {
            name: '柳城县',
            value: '450222'
          },
          {
            name: '鹿寨县',
            value: '450223'
          },
          {
            name: '融安县',
            value: '450224'
          },
          {
            name: '融水苗族自治县',
            value: '450225'
          },
          {
            name: '三江侗族自治县',
            value: '450226'
          }
        ]
      },
      {
        name: '桂林市',
        value: '450300',
        subRegion: [
          {
            name: '市辖区',
            value: '450301'
          },
          {
            name: '秀峰区',
            value: '450302'
          },
          {
            name: '叠彩区',
            value: '450303'
          },
          {
            name: '象山区',
            value: '450304'
          },
          {
            name: '七星区',
            value: '450305'
          },
          {
            name: '雁山区',
            value: '450311'
          },
          {
            name: '临桂区',
            value: '450312'
          },
          {
            name: '阳朔县',
            value: '450321'
          },
          {
            name: '灵川县',
            value: '450323'
          },
          {
            name: '全州县',
            value: '450324'
          },
          {
            name: '兴安县',
            value: '450325'
          },
          {
            name: '永福县',
            value: '450326'
          },
          {
            name: '灌阳县',
            value: '450327'
          },
          {
            name: '龙胜各族自治县',
            value: '450328'
          },
          {
            name: '资源县',
            value: '450329'
          },
          {
            name: '平乐县',
            value: '450330'
          },
          {
            name: '荔浦县',
            value: '450331'
          },
          {
            name: '恭城瑶族自治县',
            value: '450332'
          }
        ]
      },
      {
        name: '梧州市',
        value: '450400',
        subRegion: [
          {
            name: '市辖区',
            value: '450401'
          },
          {
            name: '万秀区',
            value: '450403'
          },
          {
            name: '长洲区',
            value: '450405'
          },
          {
            name: '龙圩区',
            value: '450406'
          },
          {
            name: '苍梧县',
            value: '450421'
          },
          {
            name: '藤县',
            value: '450422'
          },
          {
            name: '蒙山县',
            value: '450423'
          },
          {
            name: '岑溪市',
            value: '450481'
          }
        ]
      },
      {
        name: '北海市',
        value: '450500',
        subRegion: [
          {
            name: '市辖区',
            value: '450501'
          },
          {
            name: '海城区',
            value: '450502'
          },
          {
            name: '银海区',
            value: '450503'
          },
          {
            name: '铁山港区',
            value: '450512'
          },
          {
            name: '合浦县',
            value: '450521'
          }
        ]
      },
      {
        name: '防城港市',
        value: '450600',
        subRegion: [
          {
            name: '市辖区',
            value: '450601'
          },
          {
            name: '港口区',
            value: '450602'
          },
          {
            name: '防城区',
            value: '450603'
          },
          {
            name: '上思县',
            value: '450621'
          },
          {
            name: '东兴市',
            value: '450681'
          }
        ]
      },
      {
        name: '钦州市',
        value: '450700',
        subRegion: [
          {
            name: '市辖区',
            value: '450701'
          },
          {
            name: '钦南区',
            value: '450702'
          },
          {
            name: '钦北区',
            value: '450703'
          },
          {
            name: '灵山县',
            value: '450721'
          },
          {
            name: '浦北县',
            value: '450722'
          }
        ]
      },
      {
        name: '贵港市',
        value: '450800',
        subRegion: [
          {
            name: '市辖区',
            value: '450801'
          },
          {
            name: '港北区',
            value: '450802'
          },
          {
            name: '港南区',
            value: '450803'
          },
          {
            name: '覃塘区',
            value: '450804'
          },
          {
            name: '平南县',
            value: '450821'
          },
          {
            name: '桂平市',
            value: '450881'
          }
        ]
      },
      {
        name: '玉林市',
        value: '450900',
        subRegion: [
          {
            name: '市辖区',
            value: '450901'
          },
          {
            name: '玉州区',
            value: '450902'
          },
          {
            name: '福绵区',
            value: '450903'
          },
          {
            name: '容县',
            value: '450921'
          },
          {
            name: '陆川县',
            value: '450922'
          },
          {
            name: '博白县',
            value: '450923'
          },
          {
            name: '兴业县',
            value: '450924'
          },
          {
            name: '北流市',
            value: '450981'
          }
        ]
      },
      {
        name: '百色市',
        value: '451000',
        subRegion: [
          {
            name: '市辖区',
            value: '451001'
          },
          {
            name: '右江区',
            value: '451002'
          },
          {
            name: '田阳县',
            value: '451021'
          },
          {
            name: '田东县',
            value: '451022'
          },
          {
            name: '平果县',
            value: '451023'
          },
          {
            name: '德保县',
            value: '451024'
          },
          {
            name: '靖西县',
            value: '451025'
          },
          {
            name: '那坡县',
            value: '451026'
          },
          {
            name: '凌云县',
            value: '451027'
          },
          {
            name: '乐业县',
            value: '451028'
          },
          {
            name: '田林县',
            value: '451029'
          },
          {
            name: '西林县',
            value: '451030'
          },
          {
            name: '隆林各族自治县',
            value: '451031'
          }
        ]
      },
      {
        name: '贺州市',
        value: '451100',
        subRegion: [
          {
            name: '市辖区',
            value: '451101'
          },
          {
            name: '八步区',
            value: '451102'
          },
          {
            name: '平桂管理区',
            value: '451119'
          },
          {
            name: '昭平县',
            value: '451121'
          },
          {
            name: '钟山县',
            value: '451122'
          },
          {
            name: '富川瑶族自治县',
            value: '451123'
          }
        ]
      },
      {
        name: '河池市',
        value: '451200',
        subRegion: [
          {
            name: '市辖区',
            value: '451201'
          },
          {
            name: '金城江区',
            value: '451202'
          },
          {
            name: '南丹县',
            value: '451221'
          },
          {
            name: '天峨县',
            value: '451222'
          },
          {
            name: '凤山县',
            value: '451223'
          },
          {
            name: '东兰县',
            value: '451224'
          },
          {
            name: '罗城仫佬族自治县',
            value: '451225'
          },
          {
            name: '环江毛南族自治县',
            value: '451226'
          },
          {
            name: '巴马瑶族自治县',
            value: '451227'
          },
          {
            name: '都安瑶族自治县',
            value: '451228'
          },
          {
            name: '大化瑶族自治县',
            value: '451229'
          },
          {
            name: '宜州市',
            value: '451281'
          }
        ]
      },
      {
        name: '来宾市',
        value: '451300',
        subRegion: [
          {
            name: '市辖区',
            value: '451301'
          },
          {
            name: '兴宾区',
            value: '451302'
          },
          {
            name: '忻城县',
            value: '451321'
          },
          {
            name: '象州县',
            value: '451322'
          },
          {
            name: '武宣县',
            value: '451323'
          },
          {
            name: '金秀瑶族自治县',
            value: '451324'
          },
          {
            name: '合山市',
            value: '451381'
          }
        ]
      },
      {
        name: '崇左市',
        value: '451400',
        subRegion: [
          {
            name: '市辖区',
            value: '451401'
          },
          {
            name: '江州区',
            value: '451402'
          },
          {
            name: '扶绥县',
            value: '451421'
          },
          {
            name: '宁明县',
            value: '451422'
          },
          {
            name: '龙州县',
            value: '451423'
          },
          {
            name: '大新县',
            value: '451424'
          },
          {
            name: '天等县',
            value: '451425'
          },
          {
            name: '凭祥市',
            value: '451481'
          }
        ]
      }
    ]
  },
  {
    name: '海南省',
    value: '460000',
    subRegion: [
      {
        name: '海口市',
        value: '460100',
        subRegion: [
          {
            name: '市辖区',
            value: '460101'
          },
          {
            name: '秀英区',
            value: '460105'
          },
          {
            name: '龙华区',
            value: '460106'
          },
          {
            name: '琼山区',
            value: '460107'
          },
          {
            name: '美兰区',
            value: '460108'
          }
        ]
      },
      {
        name: '三亚市',
        value: '460200',
        subRegion: [
          {
            name: '市辖区',
            value: '460201'
          },
          {
            name: '海棠区',
            value: '460202'
          },
          {
            name: '吉阳区',
            value: '460203'
          },
          {
            name: '天涯区',
            value: '460204'
          },
          {
            name: '崖州区',
            value: '460205'
          }
        ]
      },
      {
        name: '三沙市',
        value: '460300',
        subRegion: [
          {
            name: '西沙群岛',
            value: '460321'
          },
          {
            name: '南沙群岛',
            value: '460322'
          },
          {
            name: '中沙群岛的岛礁及其海域',
            value: '460323'
          }
        ]
      },
      {
        name: '五指山市',
        value: '469001'
      },
      {
        name: '琼海市',
        value: '469002'
      },
      {
        name: '儋州市',
        value: '469003'
      },
      {
        name: '文昌市',
        value: '469005'
      },
      {
        name: '万宁市',
        value: '469006'
      },
      {
        name: '东方市',
        value: '469007'
      },
      {
        name: '定安县',
        value: '469021'
      },
      {
        name: '屯昌县',
        value: '469022'
      },
      {
        name: '澄迈县',
        value: '469023'
      },
      {
        name: '临高县',
        value: '469024'
      },
      {
        name: '白沙黎族自治县',
        value: '469025'
      },
      {
        name: '昌江黎族自治县',
        value: '469026'
      },
      {
        name: '乐东黎族自治县',
        value: '469027'
      },
      {
        name: '陵水黎族自治县',
        value: '469028'
      },
      {
        name: '保亭黎族苗族自治县',
        value: '469029'
      },
      {
        name: '琼中黎族苗族自治县',
        value: '469030'
      }
    ]
  },
  {
    name: '重庆',
    value: '500000',
    subRegion: [
      {
        name: '重庆市',
        value: '500000',
        subRegion: [
          {
            name: '万州区',
            value: '500101'
          },
          {
            name: '涪陵区',
            value: '500102'
          },
          {
            name: '渝中区',
            value: '500103'
          },
          {
            name: '大渡口区',
            value: '500104'
          },
          {
            name: '江北区',
            value: '500105'
          },
          {
            name: '沙坪坝区',
            value: '500106'
          },
          {
            name: '九龙坡区',
            value: '500107'
          },
          {
            name: '南岸区',
            value: '500108'
          },
          {
            name: '北碚区',
            value: '500109'
          },
          {
            name: '綦江区',
            value: '500110'
          },
          {
            name: '大足区',
            value: '500111'
          },
          {
            name: '渝北区',
            value: '500112'
          },
          {
            name: '巴南区',
            value: '500113'
          },
          {
            name: '黔江区',
            value: '500114'
          },
          {
            name: '长寿区',
            value: '500115'
          },
          {
            name: '江津区',
            value: '500116'
          },
          {
            name: '合川区',
            value: '500117'
          },
          {
            name: '永川区',
            value: '500118'
          },
          {
            name: '南川区',
            value: '500119'
          },
          {
            name: '璧山区',
            value: '500120'
          },
          {
            name: '铜梁区',
            value: '500151'
          },
          {
            name: '潼南县',
            value: '500223'
          },
          {
            name: '荣昌县',
            value: '500226'
          },
          {
            name: '梁平县',
            value: '500228'
          },
          {
            name: '城口县',
            value: '500229'
          },
          {
            name: '丰都县',
            value: '500230'
          },
          {
            name: '垫江县',
            value: '500231'
          },
          {
            name: '武隆县',
            value: '500232'
          },
          {
            name: '忠县',
            value: '500233'
          },
          {
            name: '开县',
            value: '500234'
          },
          {
            name: '云阳县',
            value: '500235'
          },
          {
            name: '奉节县',
            value: '500236'
          },
          {
            name: '巫山县',
            value: '500237'
          },
          {
            name: '巫溪县',
            value: '500238'
          },
          {
            name: '石柱土家族自治县',
            value: '500240'
          },
          {
            name: '秀山土家族苗族自治县',
            value: '500241'
          },
          {
            name: '酉阳土家族苗族自治县',
            value: '500242'
          },
          {
            name: '彭水苗族土家族自治县',
            value: '500243'
          }
        ]
      }
    ]
  },
  {
    name: '四川省',
    value: '510000',
    subRegion: [
      {
        name: '成都市',
        value: '510100',
        disabled: true,
        subRegion: [
          {
            name: '市辖区',
            value: '510101'
          },
          {
            name: '锦江区',
            value: '510104'
          },
          {
            name: '青羊区',
            value: '510105'
          },
          {
            name: '金牛区',
            value: '510106'
          },
          {
            name: '武侯区',
            value: '510107'
          },
          {
            name: '成华区',
            value: '510108'
          },
          {
            name: '龙泉驿区',
            value: '510112'
          },
          {
            name: '青白江区',
            value: '510113'
          },
          {
            name: '新都区',
            value: '510114'
          },
          {
            name: '温江区',
            value: '510115'
          },
          {
            name: '金堂县',
            value: '510121'
          },
          {
            name: '双流县',
            value: '510122'
          },
          {
            name: '郫县',
            value: '510124'
          },
          {
            name: '大邑县',
            value: '510129'
          },
          {
            name: '蒲江县',
            value: '510131'
          },
          {
            name: '新津县',
            value: '510132'
          },
          {
            name: '都江堰市',
            value: '510181'
          },
          {
            name: '彭州市',
            value: '510182'
          },
          {
            name: '邛崃市',
            value: '510183'
          },
          {
            name: '崇州市',
            value: '510184'
          }
        ]
      },
      {
        name: '自贡市',
        value: '510300',
        subRegion: [
          {
            name: '市辖区',
            value: '510301'
          },
          {
            name: '自流井区',
            value: '510302'
          },
          {
            name: '贡井区',
            value: '510303'
          },
          {
            name: '大安区',
            value: '510304'
          },
          {
            name: '沿滩区',
            value: '510311'
          },
          {
            name: '荣县',
            value: '510321'
          },
          {
            name: '富顺县',
            value: '510322'
          }
        ]
      },
      {
        name: '攀枝花市',
        value: '510400',
        subRegion: [
          {
            name: '市辖区',
            value: '510401'
          },
          {
            name: '东区',
            value: '510402'
          },
          {
            name: '西区',
            value: '510403'
          },
          {
            name: '仁和区',
            value: '510411'
          },
          {
            name: '米易县',
            value: '510421'
          },
          {
            name: '盐边县',
            value: '510422'
          }
        ]
      },
      {
        name: '泸州市',
        value: '510500',
        subRegion: [
          {
            name: '市辖区',
            value: '510501'
          },
          {
            name: '江阳区',
            value: '510502'
          },
          {
            name: '纳溪区',
            value: '510503'
          },
          {
            name: '龙马潭区',
            value: '510504'
          },
          {
            name: '泸县',
            value: '510521'
          },
          {
            name: '合江县',
            value: '510522'
          },
          {
            name: '叙永县',
            value: '510524'
          },
          {
            name: '古蔺县',
            value: '510525'
          }
        ]
      },
      {
        name: '德阳市',
        value: '510600',
        subRegion: [
          {
            name: '市辖区',
            value: '510601'
          },
          {
            name: '旌阳区',
            value: '510603'
          },
          {
            name: '中江县',
            value: '510623'
          },
          {
            name: '罗江县',
            value: '510626'
          },
          {
            name: '广汉市',
            value: '510681'
          },
          {
            name: '什邡市',
            value: '510682'
          },
          {
            name: '绵竹市',
            value: '510683'
          }
        ]
      },
      {
        name: '绵阳市',
        value: '510700',
        subRegion: [
          {
            name: '市辖区',
            value: '510701'
          },
          {
            name: '涪城区',
            value: '510703'
          },
          {
            name: '游仙区',
            value: '510704'
          },
          {
            name: '三台县',
            value: '510722'
          },
          {
            name: '盐亭县',
            value: '510723'
          },
          {
            name: '安县',
            value: '510724'
          },
          {
            name: '梓潼县',
            value: '510725'
          },
          {
            name: '北川羌族自治县',
            value: '510726'
          },
          {
            name: '平武县',
            value: '510727'
          },
          {
            name: '江油市',
            value: '510781'
          }
        ]
      },
      {
        name: '广元市',
        value: '510800',
        subRegion: [
          {
            name: '市辖区',
            value: '510801'
          },
          {
            name: '利州区',
            value: '510802'
          },
          {
            name: '昭化区',
            value: '510811'
          },
          {
            name: '朝天区',
            value: '510812'
          },
          {
            name: '旺苍县',
            value: '510821'
          },
          {
            name: '青川县',
            value: '510822'
          },
          {
            name: '剑阁县',
            value: '510823'
          },
          {
            name: '苍溪县',
            value: '510824'
          }
        ]
      },
      {
        name: '遂宁市',
        value: '510900',
        subRegion: [
          {
            name: '市辖区',
            value: '510901'
          },
          {
            name: '船山区',
            value: '510903'
          },
          {
            name: '安居区',
            value: '510904'
          },
          {
            name: '蓬溪县',
            value: '510921'
          },
          {
            name: '射洪县',
            value: '510922'
          },
          {
            name: '大英县',
            value: '510923'
          }
        ]
      },
      {
        name: '内江市',
        value: '511000',
        subRegion: [
          {
            name: '市辖区',
            value: '511001'
          },
          {
            name: '市中区',
            value: '511002'
          },
          {
            name: '东兴区',
            value: '511011'
          },
          {
            name: '威远县',
            value: '511024'
          },
          {
            name: '资中县',
            value: '511025'
          },
          {
            name: '隆昌县',
            value: '511028'
          }
        ]
      },
      {
        name: '乐山市',
        value: '511100',
        subRegion: [
          {
            name: '市辖区',
            value: '511101'
          },
          {
            name: '市中区',
            value: '511102'
          },
          {
            name: '沙湾区',
            value: '511111'
          },
          {
            name: '五通桥区',
            value: '511112'
          },
          {
            name: '金口河区',
            value: '511113'
          },
          {
            name: '犍为县',
            value: '511123'
          },
          {
            name: '井研县',
            value: '511124'
          },
          {
            name: '夹江县',
            value: '511126'
          },
          {
            name: '沐川县',
            value: '511129'
          },
          {
            name: '峨边彝族自治县',
            value: '511132'
          },
          {
            name: '马边彝族自治县',
            value: '511133'
          },
          {
            name: '峨眉山市',
            value: '511181'
          }
        ]
      },
      {
        name: '南充市',
        value: '511300',
        subRegion: [
          {
            name: '市辖区',
            value: '511301'
          },
          {
            name: '顺庆区',
            value: '511302'
          },
          {
            name: '高坪区',
            value: '511303'
          },
          {
            name: '嘉陵区',
            value: '511304'
          },
          {
            name: '南部县',
            value: '511321'
          },
          {
            name: '营山县',
            value: '511322'
          },
          {
            name: '蓬安县',
            value: '511323'
          },
          {
            name: '仪陇县',
            value: '511324'
          },
          {
            name: '西充县',
            value: '511325'
          },
          {
            name: '阆中市',
            value: '511381'
          }
        ]
      },
      {
        name: '眉山市',
        value: '511400',
        subRegion: [
          {
            name: '市辖区',
            value: '511401'
          },
          {
            name: '东坡区',
            value: '511402'
          },
          {
            name: '彭山区',
            value: '511403'
          },
          {
            name: '仁寿县',
            value: '511421'
          },
          {
            name: '洪雅县',
            value: '511423'
          },
          {
            name: '丹棱县',
            value: '511424'
          },
          {
            name: '青神县',
            value: '511425'
          }
        ]
      },
      {
        name: '宜宾市',
        value: '511500',
        subRegion: [
          {
            name: '市辖区',
            value: '511501'
          },
          {
            name: '翠屏区',
            value: '511502'
          },
          {
            name: '南溪区',
            value: '511503'
          },
          {
            name: '宜宾县',
            value: '511521'
          },
          {
            name: '江安县',
            value: '511523'
          },
          {
            name: '长宁县',
            value: '511524'
          },
          {
            name: '高县',
            value: '511525'
          },
          {
            name: '珙县',
            value: '511526'
          },
          {
            name: '筠连县',
            value: '511527'
          },
          {
            name: '兴文县',
            value: '511528'
          },
          {
            name: '屏山县',
            value: '511529'
          }
        ]
      },
      {
        name: '广安市',
        value: '511600',
        subRegion: [
          {
            name: '市辖区',
            value: '511601'
          },
          {
            name: '广安区',
            value: '511602'
          },
          {
            name: '前锋区',
            value: '511603'
          },
          {
            name: '岳池县',
            value: '511621'
          },
          {
            name: '武胜县',
            value: '511622'
          },
          {
            name: '邻水县',
            value: '511623'
          },
          {
            name: '华蓥市',
            value: '511681'
          }
        ]
      },
      {
        name: '达州市',
        value: '511700',
        subRegion: [
          {
            name: '市辖区',
            value: '511701'
          },
          {
            name: '通川区',
            value: '511702'
          },
          {
            name: '达川区',
            value: '511703'
          },
          {
            name: '宣汉县',
            value: '511722'
          },
          {
            name: '开江县',
            value: '511723'
          },
          {
            name: '大竹县',
            value: '511724'
          },
          {
            name: '渠县',
            value: '511725'
          },
          {
            name: '万源市',
            value: '511781'
          }
        ]
      },
      {
        name: '雅安市',
        value: '511800',
        subRegion: [
          {
            name: '市辖区',
            value: '511801'
          },
          {
            name: '雨城区',
            value: '511802'
          },
          {
            name: '名山区',
            value: '511803'
          },
          {
            name: '荥经县',
            value: '511822'
          },
          {
            name: '汉源县',
            value: '511823'
          },
          {
            name: '石棉县',
            value: '511824'
          },
          {
            name: '天全县',
            value: '511825'
          },
          {
            name: '芦山县',
            value: '511826'
          },
          {
            name: '宝兴县',
            value: '511827'
          }
        ]
      },
      {
        name: '巴中市',
        value: '511900',
        subRegion: [
          {
            name: '市辖区',
            value: '511901'
          },
          {
            name: '巴州区',
            value: '511902'
          },
          {
            name: '恩阳区',
            value: '511903'
          },
          {
            name: '通江县',
            value: '511921'
          },
          {
            name: '南江县',
            value: '511922'
          },
          {
            name: '平昌县',
            value: '511923'
          }
        ]
      },
      {
        name: '资阳市',
        value: '512000',
        subRegion: [
          {
            name: '市辖区',
            value: '512001'
          },
          {
            name: '雁江区',
            value: '512002'
          },
          {
            name: '安岳县',
            value: '512021'
          },
          {
            name: '乐至县',
            value: '512022'
          },
          {
            name: '简阳市',
            value: '512081'
          }
        ]
      },
      {
        name: '阿坝藏族羌族自治州',
        value: '513200',
        subRegion: [
          {
            name: '汶川县',
            value: '513221'
          },
          {
            name: '理县',
            value: '513222'
          },
          {
            name: '茂县',
            value: '513223'
          },
          {
            name: '松潘县',
            value: '513224'
          },
          {
            name: '九寨沟县',
            value: '513225'
          },
          {
            name: '金川县',
            value: '513226'
          },
          {
            name: '小金县',
            value: '513227'
          },
          {
            name: '黑水县',
            value: '513228'
          },
          {
            name: '马尔康县',
            value: '513229'
          },
          {
            name: '壤塘县',
            value: '513230'
          },
          {
            name: '阿坝县',
            value: '513231'
          },
          {
            name: '若尔盖县',
            value: '513232'
          },
          {
            name: '红原县',
            value: '513233'
          }
        ]
      },
      {
        name: '甘孜藏族自治州',
        value: '513300',
        subRegion: [
          {
            name: '康定县',
            value: '513321'
          },
          {
            name: '泸定县',
            value: '513322'
          },
          {
            name: '丹巴县',
            value: '513323'
          },
          {
            name: '九龙县',
            value: '513324'
          },
          {
            name: '雅江县',
            value: '513325'
          },
          {
            name: '道孚县',
            value: '513326'
          },
          {
            name: '炉霍县',
            value: '513327'
          },
          {
            name: '甘孜县',
            value: '513328'
          },
          {
            name: '新龙县',
            value: '513329'
          },
          {
            name: '德格县',
            value: '513330'
          },
          {
            name: '白玉县',
            value: '513331'
          },
          {
            name: '石渠县',
            value: '513332'
          },
          {
            name: '色达县',
            value: '513333'
          },
          {
            name: '理塘县',
            value: '513334'
          },
          {
            name: '巴塘县',
            value: '513335'
          },
          {
            name: '乡城县',
            value: '513336'
          },
          {
            name: '稻城县',
            value: '513337'
          },
          {
            name: '得荣县',
            value: '513338'
          }
        ]
      },
      {
        name: '凉山彝族自治州',
        value: '513400',
        subRegion: [
          {
            name: '西昌市',
            value: '513401'
          },
          {
            name: '木里藏族自治县',
            value: '513422'
          },
          {
            name: '盐源县',
            value: '513423'
          },
          {
            name: '德昌县',
            value: '513424'
          },
          {
            name: '会理县',
            value: '513425'
          },
          {
            name: '会东县',
            value: '513426'
          },
          {
            name: '宁南县',
            value: '513427'
          },
          {
            name: '普格县',
            value: '513428'
          },
          {
            name: '布拖县',
            value: '513429'
          },
          {
            name: '金阳县',
            value: '513430'
          },
          {
            name: '昭觉县',
            value: '513431'
          },
          {
            name: '喜德县',
            value: '513432'
          },
          {
            name: '冕宁县',
            value: '513433'
          },
          {
            name: '越西县',
            value: '513434'
          },
          {
            name: '甘洛县',
            value: '513435'
          },
          {
            name: '美姑县',
            value: '513436'
          },
          {
            name: '雷波县',
            value: '513437'
          }
        ]
      }
    ]
  },
  {
    name: '贵州省',
    value: '520000',
    subRegion: [
      {
        name: '贵阳市',
        value: '520100',
        subRegion: [
          {
            name: '市辖区',
            value: '520101'
          },
          {
            name: '南明区',
            value: '520102'
          },
          {
            name: '云岩区',
            value: '520103'
          },
          {
            name: '花溪区',
            value: '520111'
          },
          {
            name: '乌当区',
            value: '520112'
          },
          {
            name: '白云区',
            value: '520113'
          },
          {
            name: '观山湖区',
            value: '520115'
          },
          {
            name: '开阳县',
            value: '520121'
          },
          {
            name: '息烽县',
            value: '520122'
          },
          {
            name: '修文县',
            value: '520123'
          },
          {
            name: '清镇市',
            value: '520181'
          }
        ]
      },
      {
        name: '六盘水市',
        value: '520200',
        subRegion: [
          {
            name: '钟山区',
            value: '520201'
          },
          {
            name: '六枝特区',
            value: '520203'
          },
          {
            name: '水城县',
            value: '520221'
          },
          {
            name: '盘县',
            value: '520222'
          }
        ]
      },
      {
        name: '遵义市',
        value: '520300',
        subRegion: [
          {
            name: '市辖区',
            value: '520301'
          },
          {
            name: '红花岗区',
            value: '520302'
          },
          {
            name: '汇川区',
            value: '520303'
          },
          {
            name: '遵义县',
            value: '520321'
          },
          {
            name: '桐梓县',
            value: '520322'
          },
          {
            name: '绥阳县',
            value: '520323'
          },
          {
            name: '正安县',
            value: '520324'
          },
          {
            name: '道真仡佬族苗族自治县',
            value: '520325'
          },
          {
            name: '务川仡佬族苗族自治县',
            value: '520326'
          },
          {
            name: '凤冈县',
            value: '520327'
          },
          {
            name: '湄潭县',
            value: '520328'
          },
          {
            name: '余庆县',
            value: '520329'
          },
          {
            name: '习水县',
            value: '520330'
          },
          {
            name: '赤水市',
            value: '520381'
          },
          {
            name: '仁怀市',
            value: '520382'
          }
        ]
      },
      {
        name: '安顺市',
        value: '520400',
        subRegion: [
          {
            name: '市辖区',
            value: '520401'
          },
          {
            name: '西秀区',
            value: '520402'
          },
          {
            name: '平坝区',
            value: '520403'
          },
          {
            name: '普定县',
            value: '520422'
          },
          {
            name: '镇宁布依族苗族自治县',
            value: '520423'
          },
          {
            name: '关岭布依族苗族自治县',
            value: '520424'
          },
          {
            name: '紫云苗族布依族自治县',
            value: '520425'
          }
        ]
      },
      {
        name: '毕节市',
        value: '520500',
        subRegion: [
          {
            name: '市辖区',
            value: '520501'
          },
          {
            name: '七星关区',
            value: '520502'
          },
          {
            name: '大方县',
            value: '520521'
          },
          {
            name: '黔西县',
            value: '520522'
          },
          {
            name: '金沙县',
            value: '520523'
          },
          {
            name: '织金县',
            value: '520524'
          },
          {
            name: '纳雍县',
            value: '520525'
          },
          {
            name: '威宁彝族回族苗族自治县',
            value: '520526'
          },
          {
            name: '赫章县',
            value: '520527'
          }
        ]
      },
      {
        name: '铜仁市',
        value: '520600',
        subRegion: [
          {
            name: '市辖区',
            value: '520601'
          },
          {
            name: '碧江区',
            value: '520602'
          },
          {
            name: '万山区',
            value: '520603'
          },
          {
            name: '江口县',
            value: '520621'
          },
          {
            name: '玉屏侗族自治县',
            value: '520622'
          },
          {
            name: '石阡县',
            value: '520623'
          },
          {
            name: '思南县',
            value: '520624'
          },
          {
            name: '印江土家族苗族自治县',
            value: '520625'
          },
          {
            name: '德江县',
            value: '520626'
          },
          {
            name: '沿河土家族自治县',
            value: '520627'
          },
          {
            name: '松桃苗族自治县',
            value: '520628'
          }
        ]
      },
      {
        name: '黔西南布依族苗族自治州',
        value: '522300',
        subRegion: [
          {
            name: '兴义市',
            value: '522301'
          },
          {
            name: '兴仁县',
            value: '522322'
          },
          {
            name: '普安县',
            value: '522323'
          },
          {
            name: '晴隆县',
            value: '522324'
          },
          {
            name: '贞丰县',
            value: '522325'
          },
          {
            name: '望谟县',
            value: '522326'
          },
          {
            name: '册亨县',
            value: '522327'
          },
          {
            name: '安龙县',
            value: '522328'
          }
        ]
      },
      {
        name: '黔东南苗族侗族自治州',
        value: '522600',
        subRegion: [
          {
            name: '凯里市',
            value: '522601'
          },
          {
            name: '黄平县',
            value: '522622'
          },
          {
            name: '施秉县',
            value: '522623'
          },
          {
            name: '三穗县',
            value: '522624'
          },
          {
            name: '镇远县',
            value: '522625'
          },
          {
            name: '岑巩县',
            value: '522626'
          },
          {
            name: '天柱县',
            value: '522627'
          },
          {
            name: '锦屏县',
            value: '522628'
          },
          {
            name: '剑河县',
            value: '522629'
          },
          {
            name: '台江县',
            value: '522630'
          },
          {
            name: '黎平县',
            value: '522631'
          },
          {
            name: '榕江县',
            value: '522632'
          },
          {
            name: '从江县',
            value: '522633'
          },
          {
            name: '雷山县',
            value: '522634'
          },
          {
            name: '麻江县',
            value: '522635'
          },
          {
            name: '丹寨县',
            value: '522636'
          }
        ]
      },
      {
        name: '黔南布依族苗族自治州',
        value: '522700',
        subRegion: [
          {
            name: '都匀市',
            value: '522701'
          },
          {
            name: '福泉市',
            value: '522702'
          },
          {
            name: '荔波县',
            value: '522722'
          },
          {
            name: '贵定县',
            value: '522723'
          },
          {
            name: '瓮安县',
            value: '522725'
          },
          {
            name: '独山县',
            value: '522726'
          },
          {
            name: '平塘县',
            value: '522727'
          },
          {
            name: '罗甸县',
            value: '522728'
          },
          {
            name: '长顺县',
            value: '522729'
          },
          {
            name: '龙里县',
            value: '522730'
          },
          {
            name: '惠水县',
            value: '522731'
          },
          {
            name: '三都水族自治县',
            value: '522732'
          }
        ]
      }
    ]
  },
  {
    name: '云南省',
    value: '530000',
    subRegion: [
      {
        name: '昆明市',
        value: '530100',
        subRegion: [
          {
            name: '市辖区',
            value: '530101'
          },
          {
            name: '五华区',
            value: '530102'
          },
          {
            name: '盘龙区',
            value: '530103'
          },
          {
            name: '官渡区',
            value: '530111'
          },
          {
            name: '西山区',
            value: '530112'
          },
          {
            name: '东川区',
            value: '530113'
          },
          {
            name: '呈贡区',
            value: '530114'
          },
          {
            name: '晋宁县',
            value: '530122'
          },
          {
            name: '富民县',
            value: '530124'
          },
          {
            name: '宜良县',
            value: '530125'
          },
          {
            name: '石林彝族自治县',
            value: '530126'
          },
          {
            name: '嵩明县',
            value: '530127'
          },
          {
            name: '禄劝彝族苗族自治县',
            value: '530128'
          },
          {
            name: '寻甸回族彝族自治县',
            value: '530129'
          },
          {
            name: '安宁市',
            value: '530181'
          }
        ]
      },
      {
        name: '曲靖市',
        value: '530300',
        subRegion: [
          {
            name: '市辖区',
            value: '530301'
          },
          {
            name: '麒麟区',
            value: '530302'
          },
          {
            name: '马龙县',
            value: '530321'
          },
          {
            name: '陆良县',
            value: '530322'
          },
          {
            name: '师宗县',
            value: '530323'
          },
          {
            name: '罗平县',
            value: '530324'
          },
          {
            name: '富源县',
            value: '530325'
          },
          {
            name: '会泽县',
            value: '530326'
          },
          {
            name: '沾益县',
            value: '530328'
          },
          {
            name: '宣威市',
            value: '530381'
          }
        ]
      },
      {
        name: '玉溪市',
        value: '530400',
        subRegion: [
          {
            name: '市辖区',
            value: '530401'
          },
          {
            name: '红塔区',
            value: '530402'
          },
          {
            name: '江川县',
            value: '530421'
          },
          {
            name: '澄江县',
            value: '530422'
          },
          {
            name: '通海县',
            value: '530423'
          },
          {
            name: '华宁县',
            value: '530424'
          },
          {
            name: '易门县',
            value: '530425'
          },
          {
            name: '峨山彝族自治县',
            value: '530426'
          },
          {
            name: '新平彝族傣族自治县',
            value: '530427'
          },
          {
            name: '元江哈尼族彝族傣族自治县',
            value: '530428'
          }
        ]
      },
      {
        name: '保山市',
        value: '530500',
        subRegion: [
          {
            name: '市辖区',
            value: '530501'
          },
          {
            name: '隆阳区',
            value: '530502'
          },
          {
            name: '施甸县',
            value: '530521'
          },
          {
            name: '腾冲县',
            value: '530522'
          },
          {
            name: '龙陵县',
            value: '530523'
          },
          {
            name: '昌宁县',
            value: '530524'
          }
        ]
      },
      {
        name: '昭通市',
        value: '530600',
        subRegion: [
          {
            name: '市辖区',
            value: '530601'
          },
          {
            name: '昭阳区',
            value: '530602'
          },
          {
            name: '鲁甸县',
            value: '530621'
          },
          {
            name: '巧家县',
            value: '530622'
          },
          {
            name: '盐津县',
            value: '530623'
          },
          {
            name: '大关县',
            value: '530624'
          },
          {
            name: '永善县',
            value: '530625'
          },
          {
            name: '绥江县',
            value: '530626'
          },
          {
            name: '镇雄县',
            value: '530627'
          },
          {
            name: '彝良县',
            value: '530628'
          },
          {
            name: '威信县',
            value: '530629'
          },
          {
            name: '水富县',
            value: '530630'
          }
        ]
      },
      {
        name: '丽江市',
        value: '530700',
        subRegion: [
          {
            name: '市辖区',
            value: '530701'
          },
          {
            name: '古城区',
            value: '530702'
          },
          {
            name: '玉龙纳西族自治县',
            value: '530721'
          },
          {
            name: '永胜县',
            value: '530722'
          },
          {
            name: '华坪县',
            value: '530723'
          },
          {
            name: '宁蒗彝族自治县',
            value: '530724'
          }
        ]
      },
      {
        name: '普洱市',
        value: '530800',
        subRegion: [
          {
            name: '市辖区',
            value: '530801'
          },
          {
            name: '思茅区',
            value: '530802'
          },
          {
            name: '宁洱哈尼族彝族自治县',
            value: '530821'
          },
          {
            name: '墨江哈尼族自治县',
            value: '530822'
          },
          {
            name: '景东彝族自治县',
            value: '530823'
          },
          {
            name: '景谷傣族彝族自治县',
            value: '530824'
          },
          {
            name: '镇沅彝族哈尼族拉祜族自治县',
            value: '530825'
          },
          {
            name: '江城哈尼族彝族自治县',
            value: '530826'
          },
          {
            name: '孟连傣族拉祜族佤族自治县',
            value: '530827'
          },
          {
            name: '澜沧拉祜族自治县',
            value: '530828'
          },
          {
            name: '西盟佤族自治县',
            value: '530829'
          }
        ]
      },
      {
        name: '临沧市',
        value: '530900',
        subRegion: [
          {
            name: '市辖区',
            value: '530901'
          },
          {
            name: '临翔区',
            value: '530902'
          },
          {
            name: '凤庆县',
            value: '530921'
          },
          {
            name: '云县',
            value: '530922'
          },
          {
            name: '永德县',
            value: '530923'
          },
          {
            name: '镇康县',
            value: '530924'
          },
          {
            name: '双江拉祜族佤族布朗族傣族自治县',
            value: '530925'
          },
          {
            name: '耿马傣族佤族自治县',
            value: '530926'
          },
          {
            name: '沧源佤族自治县',
            value: '530927'
          }
        ]
      },
      {
        name: '楚雄彝族自治州',
        value: '532300',
        subRegion: [
          {
            name: '楚雄市',
            value: '532301'
          },
          {
            name: '双柏县',
            value: '532322'
          },
          {
            name: '牟定县',
            value: '532323'
          },
          {
            name: '南华县',
            value: '532324'
          },
          {
            name: '姚安县',
            value: '532325'
          },
          {
            name: '大姚县',
            value: '532326'
          },
          {
            name: '永仁县',
            value: '532327'
          },
          {
            name: '元谋县',
            value: '532328'
          },
          {
            name: '武定县',
            value: '532329'
          },
          {
            name: '禄丰县',
            value: '532331'
          }
        ]
      },
      {
        name: '红河哈尼族彝族自治州',
        value: '532500',
        subRegion: [
          {
            name: '个旧市',
            value: '532501'
          },
          {
            name: '开远市',
            value: '532502'
          },
          {
            name: '蒙自市',
            value: '532503'
          },
          {
            name: '弥勒市',
            value: '532504'
          },
          {
            name: '屏边苗族自治县',
            value: '532523'
          },
          {
            name: '建水县',
            value: '532524'
          },
          {
            name: '石屏县',
            value: '532525'
          },
          {
            name: '泸西县',
            value: '532527'
          },
          {
            name: '元阳县',
            value: '532528'
          },
          {
            name: '红河县',
            value: '532529'
          },
          {
            name: '金平苗族瑶族傣族自治县',
            value: '532530'
          },
          {
            name: '绿春县',
            value: '532531'
          },
          {
            name: '河口瑶族自治县',
            value: '532532'
          }
        ]
      },
      {
        name: '文山壮族苗族自治州',
        value: '532600',
        subRegion: [
          {
            name: '文山市',
            value: '532601'
          },
          {
            name: '砚山县',
            value: '532622'
          },
          {
            name: '西畴县',
            value: '532623'
          },
          {
            name: '麻栗坡县',
            value: '532624'
          },
          {
            name: '马关县',
            value: '532625'
          },
          {
            name: '丘北县',
            value: '532626'
          },
          {
            name: '广南县',
            value: '532627'
          },
          {
            name: '富宁县',
            value: '532628'
          }
        ]
      },
      {
        name: '西双版纳傣族自治州',
        value: '532800',
        subRegion: [
          {
            name: '景洪市',
            value: '532801'
          },
          {
            name: '勐海县',
            value: '532822'
          },
          {
            name: '勐腊县',
            value: '532823'
          }
        ]
      },
      {
        name: '大理白族自治州',
        value: '532900',
        subRegion: [
          {
            name: '大理市',
            value: '532901'
          },
          {
            name: '漾濞彝族自治县',
            value: '532922'
          },
          {
            name: '祥云县',
            value: '532923'
          },
          {
            name: '宾川县',
            value: '532924'
          },
          {
            name: '弥渡县',
            value: '532925'
          },
          {
            name: '南涧彝族自治县',
            value: '532926'
          },
          {
            name: '巍山彝族回族自治县',
            value: '532927'
          },
          {
            name: '永平县',
            value: '532928'
          },
          {
            name: '云龙县',
            value: '532929'
          },
          {
            name: '洱源县',
            value: '532930'
          },
          {
            name: '剑川县',
            value: '532931'
          },
          {
            name: '鹤庆县',
            value: '532932'
          }
        ]
      },
      {
        name: '德宏傣族景颇族自治州',
        value: '533100',
        subRegion: [
          {
            name: '瑞丽市',
            value: '533102'
          },
          {
            name: '芒市',
            value: '533103'
          },
          {
            name: '梁河县',
            value: '533122'
          },
          {
            name: '盈江县',
            value: '533123'
          },
          {
            name: '陇川县',
            value: '533124'
          }
        ]
      },
      {
        name: '怒江傈僳族自治州',
        value: '533300',
        subRegion: [
          {
            name: '泸水县',
            value: '533321'
          },
          {
            name: '福贡县',
            value: '533323'
          },
          {
            name: '贡山独龙族怒族自治县',
            value: '533324'
          },
          {
            name: '兰坪白族普米族自治县',
            value: '533325'
          }
        ]
      },
      {
        name: '迪庆藏族自治州',
        value: '533400',
        subRegion: [
          {
            name: '香格里拉市',
            value: '533401'
          },
          {
            name: '德钦县',
            value: '533422'
          },
          {
            name: '维西傈僳族自治县',
            value: '533423'
          }
        ]
      }
    ]
  },
  {
    name: '西藏自治区',
    value: '540000',
    subRegion: [
      {
        name: '拉萨市',
        value: '540100',
        subRegion: [
          {
            name: '市辖区',
            value: '540101'
          },
          {
            name: '城关区',
            value: '540102'
          },
          {
            name: '林周县',
            value: '540121'
          },
          {
            name: '当雄县',
            value: '540122'
          },
          {
            name: '尼木县',
            value: '540123'
          },
          {
            name: '曲水县',
            value: '540124'
          },
          {
            name: '堆龙德庆县',
            value: '540125'
          },
          {
            name: '达孜县',
            value: '540126'
          },
          {
            name: '墨竹工卡县',
            value: '540127'
          }
        ]
      },
      {
        name: '日喀则市',
        value: '540200',
        subRegion: [
          {
            name: '市辖区',
            value: '540201'
          },
          {
            name: '桑珠孜区',
            value: '540202'
          },
          {
            name: '南木林县',
            value: '540221'
          },
          {
            name: '江孜县',
            value: '540222'
          },
          {
            name: '定日县',
            value: '540223'
          },
          {
            name: '萨迦县',
            value: '540224'
          },
          {
            name: '拉孜县',
            value: '540225'
          },
          {
            name: '昂仁县',
            value: '540226'
          },
          {
            name: '谢通门县',
            value: '540227'
          },
          {
            name: '白朗县',
            value: '540228'
          },
          {
            name: '仁布县',
            value: '540229'
          },
          {
            name: '康马县',
            value: '540230'
          },
          {
            name: '定结县',
            value: '540231'
          },
          {
            name: '仲巴县',
            value: '540232'
          },
          {
            name: '亚东县',
            value: '540233'
          },
          {
            name: '吉隆县',
            value: '540234'
          },
          {
            name: '聂拉木县',
            value: '540235'
          },
          {
            name: '萨嘎县',
            value: '540236'
          },
          {
            name: '岗巴县',
            value: '540237'
          }
        ]
      },
      {
        name: '昌都市',
        value: '540300',
        subRegion: [
          {
            name: '市辖区',
            value: '540301'
          },
          {
            name: '卡若区',
            value: '540302'
          },
          {
            name: '江达县',
            value: '540321'
          },
          {
            name: '贡觉县',
            value: '540322'
          },
          {
            name: '类乌齐县',
            value: '540323'
          },
          {
            name: '丁青县',
            value: '540324'
          },
          {
            name: '察雅县',
            value: '540325'
          },
          {
            name: '八宿县',
            value: '540326'
          },
          {
            name: '左贡县',
            value: '540327'
          },
          {
            name: '芒康县',
            value: '540328'
          },
          {
            name: '洛隆县',
            value: '540329'
          },
          {
            name: '边坝县',
            value: '540330'
          }
        ]
      },
      {
        name: '山南地区',
        value: '542200',
        subRegion: [
          {
            name: '乃东县',
            value: '542221'
          },
          {
            name: '扎囊县',
            value: '542222'
          },
          {
            name: '贡嘎县',
            value: '542223'
          },
          {
            name: '桑日县',
            value: '542224'
          },
          {
            name: '琼结县',
            value: '542225'
          },
          {
            name: '曲松县',
            value: '542226'
          },
          {
            name: '措美县',
            value: '542227'
          },
          {
            name: '洛扎县',
            value: '542228'
          },
          {
            name: '加查县',
            value: '542229'
          },
          {
            name: '隆子县',
            value: '542231'
          },
          {
            name: '错那县',
            value: '542232'
          },
          {
            name: '浪卡子县',
            value: '542233'
          }
        ]
      },
      {
        name: '那曲地区',
        value: '542400',
        subRegion: [
          {
            name: '那曲县',
            value: '542421'
          },
          {
            name: '嘉黎县',
            value: '542422'
          },
          {
            name: '比如县',
            value: '542423'
          },
          {
            name: '聂荣县',
            value: '542424'
          },
          {
            name: '安多县',
            value: '542425'
          },
          {
            name: '申扎县',
            value: '542426'
          },
          {
            name: '索县',
            value: '542427'
          },
          {
            name: '班戈县',
            value: '542428'
          },
          {
            name: '巴青县',
            value: '542429'
          },
          {
            name: '尼玛县',
            value: '542430'
          },
          {
            name: '双湖县',
            value: '542431'
          }
        ]
      },
      {
        name: '阿里地区',
        value: '542500',
        subRegion: [
          {
            name: '普兰县',
            value: '542521'
          },
          {
            name: '札达县',
            value: '542522'
          },
          {
            name: '噶尔县',
            value: '542523'
          },
          {
            name: '日土县',
            value: '542524'
          },
          {
            name: '革吉县',
            value: '542525'
          },
          {
            name: '改则县',
            value: '542526'
          },
          {
            name: '措勤县',
            value: '542527'
          }
        ]
      },
      {
        name: '林芝地区',
        value: '542600',
        subRegion: [
          {
            name: '林芝县',
            value: '542621'
          },
          {
            name: '工布江达县',
            value: '542622'
          },
          {
            name: '米林县',
            value: '542623'
          },
          {
            name: '墨脱县',
            value: '542624'
          },
          {
            name: '波密县',
            value: '542625'
          },
          {
            name: '察隅县',
            value: '542626'
          },
          {
            name: '朗县',
            value: '542627'
          }
        ]
      }
    ]
  },
  {
    name: '陕西省',
    value: '610000',
    subRegion: [
      {
        name: '西安市',
        value: '610100',
        subRegion: [
          {
            name: '市辖区',
            value: '610101'
          },
          {
            name: '新城区',
            value: '610102'
          },
          {
            name: '碑林区',
            value: '610103'
          },
          {
            name: '莲湖区',
            value: '610104'
          },
          {
            name: '灞桥区',
            value: '610111'
          },
          {
            name: '未央区',
            value: '610112'
          },
          {
            name: '雁塔区',
            value: '610113'
          },
          {
            name: '阎良区',
            value: '610114'
          },
          {
            name: '临潼区',
            value: '610115'
          },
          {
            name: '长安区',
            value: '610116'
          },
          {
            name: '高陵区',
            value: '610117'
          },
          {
            name: '蓝田县',
            value: '610122'
          },
          {
            name: '周至县',
            value: '610124'
          },
          {
            name: '户县',
            value: '610125'
          }
        ]
      },
      {
        name: '铜川市',
        value: '610200',
        subRegion: [
          {
            name: '市辖区',
            value: '610201'
          },
          {
            name: '王益区',
            value: '610202'
          },
          {
            name: '印台区',
            value: '610203'
          },
          {
            name: '耀州区',
            value: '610204'
          },
          {
            name: '宜君县',
            value: '610222'
          }
        ]
      },
      {
        name: '宝鸡市',
        value: '610300',
        subRegion: [
          {
            name: '市辖区',
            value: '610301'
          },
          {
            name: '渭滨区',
            value: '610302'
          },
          {
            name: '金台区',
            value: '610303'
          },
          {
            name: '陈仓区',
            value: '610304'
          },
          {
            name: '凤翔县',
            value: '610322'
          },
          {
            name: '岐山县',
            value: '610323'
          },
          {
            name: '扶风县',
            value: '610324'
          },
          {
            name: '眉县',
            value: '610326'
          },
          {
            name: '陇县',
            value: '610327'
          },
          {
            name: '千阳县',
            value: '610328'
          },
          {
            name: '麟游县',
            value: '610329'
          },
          {
            name: '凤县',
            value: '610330'
          },
          {
            name: '太白县',
            value: '610331'
          }
        ]
      },
      {
        name: '咸阳市',
        value: '610400',
        subRegion: [
          {
            name: '市辖区',
            value: '610401'
          },
          {
            name: '秦都区',
            value: '610402'
          },
          {
            name: '杨陵区',
            value: '610403'
          },
          {
            name: '渭城区',
            value: '610404'
          },
          {
            name: '三原县',
            value: '610422'
          },
          {
            name: '泾阳县',
            value: '610423'
          },
          {
            name: '乾县',
            value: '610424'
          },
          {
            name: '礼泉县',
            value: '610425'
          },
          {
            name: '永寿县',
            value: '610426'
          },
          {
            name: '彬县',
            value: '610427'
          },
          {
            name: '长武县',
            value: '610428'
          },
          {
            name: '旬邑县',
            value: '610429'
          },
          {
            name: '淳化县',
            value: '610430'
          },
          {
            name: '武功县',
            value: '610431'
          },
          {
            name: '兴平市',
            value: '610481'
          }
        ]
      },
      {
        name: '渭南市',
        value: '610500',
        subRegion: [
          {
            name: '市辖区',
            value: '610501'
          },
          {
            name: '临渭区',
            value: '610502'
          },
          {
            name: '华县',
            value: '610521'
          },
          {
            name: '潼关县',
            value: '610522'
          },
          {
            name: '大荔县',
            value: '610523'
          },
          {
            name: '合阳县',
            value: '610524'
          },
          {
            name: '澄城县',
            value: '610525'
          },
          {
            name: '蒲城县',
            value: '610526'
          },
          {
            name: '白水县',
            value: '610527'
          },
          {
            name: '富平县',
            value: '610528'
          },
          {
            name: '韩城市',
            value: '610581'
          },
          {
            name: '华阴市',
            value: '610582'
          }
        ]
      },
      {
        name: '延安市',
        value: '610600',
        subRegion: [
          {
            name: '市辖区',
            value: '610601'
          },
          {
            name: '宝塔区',
            value: '610602'
          },
          {
            name: '延长县',
            value: '610621'
          },
          {
            name: '延川县',
            value: '610622'
          },
          {
            name: '子长县',
            value: '610623'
          },
          {
            name: '安塞县',
            value: '610624'
          },
          {
            name: '志丹县',
            value: '610625'
          },
          {
            name: '吴起县',
            value: '610626'
          },
          {
            name: '甘泉县',
            value: '610627'
          },
          {
            name: '富县',
            value: '610628'
          },
          {
            name: '洛川县',
            value: '610629'
          },
          {
            name: '宜川县',
            value: '610630'
          },
          {
            name: '黄龙县',
            value: '610631'
          },
          {
            name: '黄陵县',
            value: '610632'
          }
        ]
      },
      {
        name: '汉中市',
        value: '610700',
        subRegion: [
          {
            name: '市辖区',
            value: '610701'
          },
          {
            name: '汉台区',
            value: '610702'
          },
          {
            name: '南郑县',
            value: '610721'
          },
          {
            name: '城固县',
            value: '610722'
          },
          {
            name: '洋县',
            value: '610723'
          },
          {
            name: '西乡县',
            value: '610724'
          },
          {
            name: '勉县',
            value: '610725'
          },
          {
            name: '宁强县',
            value: '610726'
          },
          {
            name: '略阳县',
            value: '610727'
          },
          {
            name: '镇巴县',
            value: '610728'
          },
          {
            name: '留坝县',
            value: '610729'
          },
          {
            name: '佛坪县',
            value: '610730'
          }
        ]
      },
      {
        name: '榆林市',
        value: '610800',
        subRegion: [
          {
            name: '市辖区',
            value: '610801'
          },
          {
            name: '榆阳区',
            value: '610802'
          },
          {
            name: '神木县',
            value: '610821'
          },
          {
            name: '府谷县',
            value: '610822'
          },
          {
            name: '横山县',
            value: '610823'
          },
          {
            name: '靖边县',
            value: '610824'
          },
          {
            name: '定边县',
            value: '610825'
          },
          {
            name: '绥德县',
            value: '610826'
          },
          {
            name: '米脂县',
            value: '610827'
          },
          {
            name: '佳县',
            value: '610828'
          },
          {
            name: '吴堡县',
            value: '610829'
          },
          {
            name: '清涧县',
            value: '610830'
          },
          {
            name: '子洲县',
            value: '610831'
          }
        ]
      },
      {
        name: '安康市',
        value: '610900',
        subRegion: [
          {
            name: '市辖区',
            value: '610901'
          },
          {
            name: '汉阴县',
            value: '610921'
          },
          {
            name: '石泉县',
            value: '610922'
          },
          {
            name: '宁陕县',
            value: '610923'
          },
          {
            name: '紫阳县',
            value: '610924'
          },
          {
            name: '岚皋县',
            value: '610925'
          },
          {
            name: '平利县',
            value: '610926'
          },
          {
            name: '镇坪县',
            value: '610927'
          },
          {
            name: '旬阳县',
            value: '610928'
          },
          {
            name: '白河县',
            value: '610929'
          }
        ]
      },
      {
        name: '商洛市',
        value: '611000',
        subRegion: [
          {
            name: '市辖区',
            value: '611001'
          },
          {
            name: '商州区',
            value: '611002'
          },
          {
            name: '洛南县',
            value: '611021'
          },
          {
            name: '丹凤县',
            value: '611022'
          },
          {
            name: '商南县',
            value: '611023'
          },
          {
            name: '山阳县',
            value: '611024'
          },
          {
            name: '镇安县',
            value: '611025'
          },
          {
            name: '柞水县',
            value: '611026'
          }
        ]
      }
    ]
  },
  {
    name: '甘肃省',
    value: '620000',
    subRegion: [
      {
        name: '兰州市',
        value: '620100',
        subRegion: [
          {
            name: '市辖区',
            value: '620101'
          },
          {
            name: '城关区',
            value: '620102'
          },
          {
            name: '七里河区',
            value: '620103'
          },
          {
            name: '西固区',
            value: '620104'
          },
          {
            name: '安宁区',
            value: '620105'
          },
          {
            name: '红古区',
            value: '620111'
          },
          {
            name: '永登县',
            value: '620121'
          },
          {
            name: '皋兰县',
            value: '620122'
          },
          {
            name: '榆中县',
            value: '620123'
          }
        ]
      },
      {
        name: '嘉峪关市',
        value: '620200',
        subRegion: [
          {
            name: '市辖区',
            value: '620201'
          }
        ]
      },
      {
        name: '金昌市',
        value: '620300',
        subRegion: [
          {
            name: '市辖区',
            value: '620301'
          },
          {
            name: '金川区',
            value: '620302'
          },
          {
            name: '永昌县',
            value: '620321'
          }
        ]
      },
      {
        name: '白银市',
        value: '620400',
        subRegion: [
          {
            name: '市辖区',
            value: '620401'
          },
          {
            name: '白银区',
            value: '620402'
          },
          {
            name: '平川区',
            value: '620403'
          },
          {
            name: '靖远县',
            value: '620421'
          },
          {
            name: '会宁县',
            value: '620422'
          },
          {
            name: '景泰县',
            value: '620423'
          }
        ]
      },
      {
        name: '天水市',
        value: '620500',
        subRegion: [
          {
            name: '市辖区',
            value: '620501'
          },
          {
            name: '秦州区',
            value: '620502'
          },
          {
            name: '麦积区',
            value: '620503'
          },
          {
            name: '清水县',
            value: '620521'
          },
          {
            name: '秦安县',
            value: '620522'
          },
          {
            name: '甘谷县',
            value: '620523'
          },
          {
            name: '武山县',
            value: '620524'
          },
          {
            name: '张家川回族自治县',
            value: '620525'
          }
        ]
      },
      {
        name: '武威市',
        value: '620600',
        subRegion: [
          {
            name: '市辖区',
            value: '620601'
          },
          {
            name: '凉州区',
            value: '620602'
          },
          {
            name: '民勤县',
            value: '620621'
          },
          {
            name: '古浪县',
            value: '620622'
          },
          {
            name: '天祝藏族自治县',
            value: '620623'
          }
        ]
      },
      {
        name: '张掖市',
        value: '620700',
        subRegion: [
          {
            name: '市辖区',
            value: '620701'
          },
          {
            name: '甘州区',
            value: '620702'
          },
          {
            name: '肃南裕固族自治县',
            value: '620721'
          },
          {
            name: '民乐县',
            value: '620722'
          },
          {
            name: '临泽县',
            value: '620723'
          },
          {
            name: '高台县',
            value: '620724'
          },
          {
            name: '山丹县',
            value: '620725'
          }
        ]
      },
      {
        name: '平凉市',
        value: '620800',
        subRegion: [
          {
            name: '市辖区',
            value: '620801'
          },
          {
            name: '崆峒区',
            value: '620802'
          },
          {
            name: '泾川县',
            value: '620821'
          },
          {
            name: '灵台县',
            value: '620822'
          },
          {
            name: '崇信县',
            value: '620823'
          },
          {
            name: '华亭县',
            value: '620824'
          },
          {
            name: '庄浪县',
            value: '620825'
          },
          {
            name: '静宁县',
            value: '620826'
          }
        ]
      },
      {
        name: '酒泉市',
        value: '620900',
        subRegion: [
          {
            name: '市辖区',
            value: '620901'
          },
          {
            name: '肃州区',
            value: '620902'
          },
          {
            name: '金塔县',
            value: '620921'
          },
          {
            name: '瓜州县',
            value: '620922'
          },
          {
            name: '肃北蒙古族自治县',
            value: '620923'
          },
          {
            name: '阿克塞哈萨克族自治县',
            value: '620924'
          },
          {
            name: '玉门市',
            value: '620981'
          },
          {
            name: '敦煌市',
            value: '620982'
          }
        ]
      },
      {
        name: '庆阳市',
        value: '621000',
        subRegion: [
          {
            name: '市辖区',
            value: '621001'
          },
          {
            name: '西峰区',
            value: '621002'
          },
          {
            name: '庆城县',
            value: '621021'
          },
          {
            name: '环县',
            value: '621022'
          },
          {
            name: '华池县',
            value: '621023'
          },
          {
            name: '合水县',
            value: '621024'
          },
          {
            name: '正宁县',
            value: '621025'
          },
          {
            name: '宁县',
            value: '621026'
          },
          {
            name: '镇原县',
            value: '621027'
          }
        ]
      },
      {
        name: '定西市',
        value: '621100',
        subRegion: [
          {
            name: '市辖区',
            value: '621101'
          },
          {
            name: '安定区',
            value: '621102'
          },
          {
            name: '通渭县',
            value: '621121'
          },
          {
            name: '陇西县',
            value: '621122'
          },
          {
            name: '渭源县',
            value: '621123'
          },
          {
            name: '临洮县',
            value: '621124'
          },
          {
            name: '漳县',
            value: '621125'
          },
          {
            name: '岷县',
            value: '621126'
          }
        ]
      },
      {
        name: '陇南市',
        value: '621200',
        subRegion: [
          {
            name: '市辖区',
            value: '621201'
          },
          {
            name: '武都区',
            value: '621202'
          },
          {
            name: '成县',
            value: '621221'
          },
          {
            name: '文县',
            value: '621222'
          },
          {
            name: '宕昌县',
            value: '621223'
          },
          {
            name: '康县',
            value: '621224'
          },
          {
            name: '西和县',
            value: '621225'
          },
          {
            name: '礼县',
            value: '621226'
          },
          {
            name: '徽县',
            value: '621227'
          },
          {
            name: '两当县',
            value: '621228'
          }
        ]
      },
      {
        name: '临夏回族自治州',
        value: '622900',
        subRegion: [
          {
            name: '临夏市',
            value: '622901'
          },
          {
            name: '临夏县',
            value: '622921'
          },
          {
            name: '康乐县',
            value: '622922'
          },
          {
            name: '永靖县',
            value: '622923'
          },
          {
            name: '广河县',
            value: '622924'
          },
          {
            name: '和政县',
            value: '622925'
          },
          {
            name: '东乡族自治县',
            value: '622926'
          },
          {
            name: '积石山保安族东乡族撒拉族自治县',
            value: '622927'
          }
        ]
      },
      {
        name: '甘南藏族自治州',
        value: '623000',
        subRegion: [
          {
            name: '合作市',
            value: '623001'
          },
          {
            name: '临潭县',
            value: '623021'
          },
          {
            name: '卓尼县',
            value: '623022'
          },
          {
            name: '舟曲县',
            value: '623023'
          },
          {
            name: '迭部县',
            value: '623024'
          },
          {
            name: '玛曲县',
            value: '623025'
          },
          {
            name: '碌曲县',
            value: '623026'
          },
          {
            name: '夏河县',
            value: '623027'
          }
        ]
      }
    ]
  },
  {
    name: '青海省',
    value: '630000',
    subRegion: [
      {
        name: '西宁市',
        value: '630100',
        subRegion: [
          {
            name: '市辖区',
            value: '630101'
          },
          {
            name: '城东区',
            value: '630102'
          },
          {
            name: '城中区',
            value: '630103'
          },
          {
            name: '城西区',
            value: '630104'
          },
          {
            name: '城北区',
            value: '630105'
          },
          {
            name: '大通回族土族自治县',
            value: '630121'
          },
          {
            name: '湟中县',
            value: '630122'
          },
          {
            name: '湟源县',
            value: '630123'
          }
        ]
      },
      {
        name: '海东市',
        value: '630200',
        subRegion: [
          {
            name: '市辖区',
            value: '630201'
          },
          {
            name: '乐都区',
            value: '630202'
          },
          {
            name: '平安县',
            value: '630221'
          },
          {
            name: '民和回族土族自治县',
            value: '630222'
          },
          {
            name: '互助土族自治县',
            value: '630223'
          },
          {
            name: '化隆回族自治县',
            value: '630224'
          },
          {
            name: '循化撒拉族自治县',
            value: '630225'
          }
        ]
      },
      {
        name: '海北藏族自治州',
        value: '632200',
        subRegion: [
          {
            name: '门源回族自治县',
            value: '632221'
          },
          {
            name: '祁连县',
            value: '632222'
          },
          {
            name: '海晏县',
            value: '632223'
          },
          {
            name: '刚察县',
            value: '632224'
          }
        ]
      },
      {
        name: '黄南藏族自治州',
        value: '632300',
        subRegion: [
          {
            name: '同仁县',
            value: '632321'
          },
          {
            name: '尖扎县',
            value: '632322'
          },
          {
            name: '泽库县',
            value: '632323'
          },
          {
            name: '河南蒙古族自治县',
            value: '632324'
          }
        ]
      },
      {
        name: '海南藏族自治州',
        value: '632500',
        subRegion: [
          {
            name: '共和县',
            value: '632521'
          },
          {
            name: '同德县',
            value: '632522'
          },
          {
            name: '贵德县',
            value: '632523'
          },
          {
            name: '兴海县',
            value: '632524'
          },
          {
            name: '贵南县',
            value: '632525'
          }
        ]
      },
      {
        name: '果洛藏族自治州',
        value: '632600',
        subRegion: [
          {
            name: '玛沁县',
            value: '632621'
          },
          {
            name: '班玛县',
            value: '632622'
          },
          {
            name: '甘德县',
            value: '632623'
          },
          {
            name: '达日县',
            value: '632624'
          },
          {
            name: '久治县',
            value: '632625'
          },
          {
            name: '玛多县',
            value: '632626'
          }
        ]
      },
      {
        name: '玉树藏族自治州',
        value: '632700',
        subRegion: [
          {
            name: '玉树市',
            value: '632701'
          },
          {
            name: '杂多县',
            value: '632722'
          },
          {
            name: '称多县',
            value: '632723'
          },
          {
            name: '治多县',
            value: '632724'
          },
          {
            name: '囊谦县',
            value: '632725'
          },
          {
            name: '曲麻莱县',
            value: '632726'
          }
        ]
      },
      {
        name: '海西蒙古族藏族自治州',
        value: '632800',
        subRegion: [
          {
            name: '格尔木市',
            value: '632801'
          },
          {
            name: '德令哈市',
            value: '632802'
          },
          {
            name: '乌兰县',
            value: '632821'
          },
          {
            name: '都兰县',
            value: '632822'
          },
          {
            name: '天峻县',
            value: '632823'
          }
        ]
      }
    ]
  },
  {
    name: '宁夏回族自治区',
    value: '640000',
    subRegion: [
      {
        name: '银川市',
        value: '640100',
        subRegion: [
          {
            name: '市辖区',
            value: '640101'
          },
          {
            name: '兴庆区',
            value: '640104'
          },
          {
            name: '西夏区',
            value: '640105'
          },
          {
            name: '金凤区',
            value: '640106'
          },
          {
            name: '永宁县',
            value: '640121'
          },
          {
            name: '贺兰县',
            value: '640122'
          },
          {
            name: '灵武市',
            value: '640181'
          }
        ]
      },
      {
        name: '石嘴山市',
        value: '640200',
        subRegion: [
          {
            name: '市辖区',
            value: '640201'
          },
          {
            name: '大武口区',
            value: '640202'
          },
          {
            name: '惠农区',
            value: '640205'
          },
          {
            name: '平罗县',
            value: '640221'
          }
        ]
      },
      {
        name: '吴忠市',
        value: '640300',
        subRegion: [
          {
            name: '市辖区',
            value: '640301'
          },
          {
            name: '利通区',
            value: '640302'
          },
          {
            name: '红寺堡区',
            value: '640303'
          },
          {
            name: '盐池县',
            value: '640323'
          },
          {
            name: '同心县',
            value: '640324'
          },
          {
            name: '青铜峡市',
            value: '640381'
          }
        ]
      },
      {
        name: '固原市',
        value: '640400',
        subRegion: [
          {
            name: '市辖区',
            value: '640401'
          },
          {
            name: '原州区',
            value: '640402'
          },
          {
            name: '西吉县',
            value: '640422'
          },
          {
            name: '隆德县',
            value: '640423'
          },
          {
            name: '泾源县',
            value: '640424'
          },
          {
            name: '彭阳县',
            value: '640425'
          }
        ]
      },
      {
        name: '中卫市',
        value: '640500',
        subRegion: [
          {
            name: '市辖区',
            value: '640501'
          },
          {
            name: '沙坡头区',
            value: '640502'
          },
          {
            name: '中宁县',
            value: '640521'
          },
          {
            name: '海原县',
            value: '640522'
          }
        ]
      }
    ]
  },
  {
    name: '新疆维吾尔自治区',
    value: '650000',
    subRegion: [
      {
        name: '乌鲁木齐市',
        value: '650100',
        subRegion: [
          {
            name: '市辖区',
            value: '650101'
          },
          {
            name: '天山区',
            value: '650102'
          },
          {
            name: '沙依巴克区',
            value: '650103'
          },
          {
            name: '新市区',
            value: '650104'
          },
          {
            name: '水磨沟区',
            value: '650105'
          },
          {
            name: '头屯河区',
            value: '650106'
          },
          {
            name: '达坂城区',
            value: '650107'
          },
          {
            name: '米东区',
            value: '650109'
          },
          {
            name: '乌鲁木齐县',
            value: '650121'
          }
        ]
      },
      {
        name: '克拉玛依市',
        value: '650200',
        subRegion: [
          {
            name: '市辖区',
            value: '650201'
          },
          {
            name: '独山子区',
            value: '650202'
          },
          {
            name: '克拉玛依区',
            value: '650203'
          },
          {
            name: '白碱滩区',
            value: '650204'
          },
          {
            name: '乌尔禾区',
            value: '650205'
          }
        ]
      },
      {
        name: '吐鲁番地区',
        value: '652100',
        subRegion: [
          {
            name: '吐鲁番市',
            value: '652101'
          },
          {
            name: '鄯善县',
            value: '652122'
          },
          {
            name: '托克逊县',
            value: '652123'
          }
        ]
      },
      {
        name: '哈密地区',
        value: '652200',
        subRegion: [
          {
            name: '哈密市',
            value: '652201'
          },
          {
            name: '巴里坤哈萨克自治县',
            value: '652222'
          },
          {
            name: '伊吾县',
            value: '652223'
          }
        ]
      },
      {
        name: '昌吉回族自治州',
        value: '652300',
        subRegion: [
          {
            name: '昌吉市',
            value: '652301'
          },
          {
            name: '阜康市',
            value: '652302'
          },
          {
            name: '呼图壁县',
            value: '652323'
          },
          {
            name: '玛纳斯县',
            value: '652324'
          },
          {
            name: '奇台县',
            value: '652325'
          },
          {
            name: '吉木萨尔县',
            value: '652327'
          },
          {
            name: '木垒哈萨克自治县',
            value: '652328'
          }
        ]
      },
      {
        name: '博尔塔拉蒙古自治州',
        value: '652700',
        subRegion: [
          {
            name: '博乐市',
            value: '652701'
          },
          {
            name: '阿拉山口市',
            value: '652702'
          },
          {
            name: '精河县',
            value: '652722'
          },
          {
            name: '温泉县',
            value: '652723'
          }
        ]
      },
      {
        name: '巴音郭楞蒙古自治州',
        value: '652800',
        subRegion: [
          {
            name: '库尔勒市',
            value: '652801'
          },
          {
            name: '轮台县',
            value: '652822'
          },
          {
            name: '尉犁县',
            value: '652823'
          },
          {
            name: '若羌县',
            value: '652824'
          },
          {
            name: '且末县',
            value: '652825'
          },
          {
            name: '焉耆回族自治县',
            value: '652826'
          },
          {
            name: '和静县',
            value: '652827'
          },
          {
            name: '和硕县',
            value: '652828'
          },
          {
            name: '博湖县',
            value: '652829'
          }
        ]
      },
      {
        name: '阿克苏地区',
        value: '652900',
        subRegion: [
          {
            name: '阿克苏市',
            value: '652901'
          },
          {
            name: '温宿县',
            value: '652922'
          },
          {
            name: '库车县',
            value: '652923'
          },
          {
            name: '沙雅县',
            value: '652924'
          },
          {
            name: '新和县',
            value: '652925'
          },
          {
            name: '拜城县',
            value: '652926'
          },
          {
            name: '乌什县',
            value: '652927'
          },
          {
            name: '阿瓦提县',
            value: '652928'
          },
          {
            name: '柯坪县',
            value: '652929'
          }
        ]
      },
      {
        name: '克孜勒苏柯尔克孜自治州',
        value: '653000',
        subRegion: [
          {
            name: '阿图什市',
            value: '653001'
          },
          {
            name: '阿克陶县',
            value: '653022'
          },
          {
            name: '阿合奇县',
            value: '653023'
          },
          {
            name: '乌恰县',
            value: '653024'
          }
        ]
      },
      {
        name: '喀什地区',
        value: '653100',
        subRegion: [
          {
            name: '喀什市',
            value: '653101'
          },
          {
            name: '疏附县',
            value: '653121'
          },
          {
            name: '疏勒县',
            value: '653122'
          },
          {
            name: '英吉沙县',
            value: '653123'
          },
          {
            name: '泽普县',
            value: '653124'
          },
          {
            name: '莎车县',
            value: '653125'
          },
          {
            name: '叶城县',
            value: '653126'
          },
          {
            name: '麦盖提县',
            value: '653127'
          },
          {
            name: '岳普湖县',
            value: '653128'
          },
          {
            name: '伽师县',
            value: '653129'
          },
          {
            name: '巴楚县',
            value: '653130'
          },
          {
            name: '塔什库尔干塔吉克自治县',
            value: '653131'
          }
        ]
      },
      {
        name: '和田地区',
        value: '653200',
        subRegion: [
          {
            name: '和田市',
            value: '653201'
          },
          {
            name: '和田县',
            value: '653221'
          },
          {
            name: '墨玉县',
            value: '653222'
          },
          {
            name: '皮山县',
            value: '653223'
          },
          {
            name: '洛浦县',
            value: '653224'
          },
          {
            name: '策勒县',
            value: '653225'
          },
          {
            name: '于田县',
            value: '653226'
          },
          {
            name: '民丰县',
            value: '653227'
          }
        ]
      },
      {
        name: '伊犁哈萨克自治州',
        value: '654000',
        subRegion: [
          {
            name: '伊宁市',
            value: '654002'
          },
          {
            name: '奎屯市',
            value: '654003'
          },
          {
            name: '霍尔果斯市',
            value: '654004'
          },
          {
            name: '伊宁县',
            value: '654021'
          },
          {
            name: '察布查尔锡伯自治县',
            value: '654022'
          },
          {
            name: '霍城县',
            value: '654023'
          },
          {
            name: '巩留县',
            value: '654024'
          },
          {
            name: '新源县',
            value: '654025'
          },
          {
            name: '昭苏县',
            value: '654026'
          },
          {
            name: '特克斯县',
            value: '654027'
          },
          {
            name: '尼勒克县',
            value: '654028'
          },
          {
            name: '塔城地区',
            value: '654200'
          },
          {
            name: '塔城市',
            value: '654201'
          },
          {
            name: '乌苏市',
            value: '654202'
          },
          {
            name: '额敏县',
            value: '654221'
          },
          {
            name: '沙湾县',
            value: '654223'
          },
          {
            name: '托里县',
            value: '654224'
          },
          {
            name: '裕民县',
            value: '654225'
          },
          {
            name: '和布克赛尔蒙古自治县',
            value: '654226'
          },
          {
            name: '阿勒泰地区',
            value: '654300'
          },
          {
            name: '阿勒泰市',
            value: '654301'
          },
          {
            name: '布尔津县',
            value: '654321'
          },
          {
            name: '富蕴县',
            value: '654322'
          },
          {
            name: '福海县',
            value: '654323'
          },
          {
            name: '哈巴河县',
            value: '654324'
          },
          {
            name: '青河县',
            value: '654325'
          },
          {
            name: '吉木乃县',
            value: '654326'
          }
        ]
      },
      {
        name: '自治区直辖县级行政区划',
        value: '659000',
        subRegion: [
          {
            name: '石河子市',
            value: '659001'
          },
          {
            name: '阿拉尔市',
            value: '659002'
          },
          {
            name: '图木舒克市',
            value: '659003'
          },
          {
            name: '五家渠市',
            value: '659004'
          },
          {
            name: '北屯市',
            value: '659005'
          },
          {
            name: '铁门关市',
            value: '659006'
          },
          {
            name: '双河市',
            value: '659007'
          }
        ]
      }
    ]
  },
  {
    name: '台湾省',
    value: '710000',
    subRegion: [
      {
        name: '台北市',
        value: '710100',
        subRegion: [
          {
            name: '松山区',
            value: '710101'
          },
          {
            name: '信义区',
            value: '710102'
          },
          {
            name: '大安区',
            value: '710103'
          },
          {
            name: '中山区',
            value: '710104'
          },
          {
            name: '中正区',
            value: '710105'
          },
          {
            name: '大同区',
            value: '710106'
          },
          {
            name: '万华区',
            value: '710107'
          },
          {
            name: '文山区',
            value: '710108'
          },
          {
            name: '南港区',
            value: '710109'
          },
          {
            name: '内湖区',
            value: '710110'
          },
          {
            name: '士林区',
            value: '710111'
          },
          {
            name: '北投区',
            value: '710112'
          }
        ]
      },
      {
        name: '高雄市',
        value: '710200',
        subRegion: [
          {
            name: '盐埕区',
            value: '710201'
          },
          {
            name: '鼓山区',
            value: '710202'
          },
          {
            name: '左营区',
            value: '710203'
          },
          {
            name: '楠梓区',
            value: '710204'
          },
          {
            name: '三民区',
            value: '710205'
          },
          {
            name: '新兴区',
            value: '710206'
          },
          {
            name: '前金区',
            value: '710207'
          },
          {
            name: '苓雅区',
            value: '710208'
          },
          {
            name: '前镇区',
            value: '710209'
          },
          {
            name: '旗津区',
            value: '710210'
          },
          {
            name: '小港区',
            value: '710211'
          },
          {
            name: '凤山区',
            value: '710212'
          },
          {
            name: '林园区',
            value: '710213'
          },
          {
            name: '大寮区',
            value: '710214'
          },
          {
            name: '大树区',
            value: '710215'
          },
          {
            name: '大社区',
            value: '710216'
          },
          {
            name: '仁武区',
            value: '710217'
          },
          {
            name: '鸟松区',
            value: '710218'
          },
          {
            name: '冈山区',
            value: '710219'
          },
          {
            name: '桥头区',
            value: '710220'
          },
          {
            name: '燕巢区',
            value: '710221'
          },
          {
            name: '田寮区',
            value: '710222'
          },
          {
            name: '阿莲区',
            value: '710223'
          },
          {
            name: '路竹区',
            value: '710224'
          },
          {
            name: '湖内区',
            value: '710225'
          },
          {
            name: '茄萣区',
            value: '710226'
          },
          {
            name: '永安区',
            value: '710227'
          },
          {
            name: '弥陀区',
            value: '710228'
          },
          {
            name: '梓官区',
            value: '710229'
          },
          {
            name: '旗山区',
            value: '710230'
          },
          {
            name: '美浓区',
            value: '710231'
          },
          {
            name: '六龟区',
            value: '710232'
          },
          {
            name: '甲仙区',
            value: '710233'
          },
          {
            name: '杉林区',
            value: '710234'
          },
          {
            name: '内门区',
            value: '710235'
          },
          {
            name: '茂林区',
            value: '710236'
          },
          {
            name: '桃源区',
            value: '710237'
          },
          {
            name: '那玛夏区',
            value: '710238'
          }
        ]
      },
      {
        name: '基隆市',
        value: '710300',
        subRegion: [
          {
            name: '中正区',
            value: '710301'
          },
          {
            name: '七堵区',
            value: '710302'
          },
          {
            name: '暖暖区',
            value: '710303'
          },
          {
            name: '仁爱区',
            value: '710304'
          },
          {
            name: '中山区',
            value: '710305'
          },
          {
            name: '安乐区',
            value: '710306'
          },
          {
            name: '信义区',
            value: '710307'
          }
        ]
      },
      {
        name: '台中市',
        value: '710400',
        subRegion: [
          {
            name: '中区',
            value: '710401'
          },
          {
            name: '东区',
            value: '710402'
          },
          {
            name: '南区',
            value: '710403'
          },
          {
            name: '西区',
            value: '710404'
          },
          {
            name: '北区',
            value: '710405'
          },
          {
            name: '西屯区',
            value: '710406'
          },
          {
            name: '南屯区',
            value: '710407'
          },
          {
            name: '北屯区',
            value: '710408'
          },
          {
            name: '丰原区',
            value: '710409'
          },
          {
            name: '东势区',
            value: '710410'
          },
          {
            name: '大甲区',
            value: '710411'
          },
          {
            name: '清水区',
            value: '710412'
          },
          {
            name: '沙鹿区',
            value: '710413'
          },
          {
            name: '梧栖区',
            value: '710414'
          },
          {
            name: '后里区',
            value: '710415'
          },
          {
            name: '神冈区',
            value: '710416'
          },
          {
            name: '潭子区',
            value: '710417'
          },
          {
            name: '大雅区',
            value: '710418'
          },
          {
            name: '新社区',
            value: '710419'
          },
          {
            name: '石冈区',
            value: '710420'
          },
          {
            name: '外埔区',
            value: '710421'
          },
          {
            name: '大安区',
            value: '710422'
          },
          {
            name: '乌日区',
            value: '710423'
          },
          {
            name: '大肚区',
            value: '710424'
          },
          {
            name: '龙井区',
            value: '710425'
          },
          {
            name: '雾峰区',
            value: '710426'
          },
          {
            name: '太平区',
            value: '710427'
          },
          {
            name: '大里区',
            value: '710428'
          },
          {
            name: '和平区',
            value: '710429'
          }
        ]
      },
      {
        name: '台南市',
        value: '710500',
        subRegion: [
          {
            name: '东区',
            value: '710501'
          },
          {
            name: '南区',
            value: '710502'
          },
          {
            name: '北区',
            value: '710504'
          },
          {
            name: '安南区',
            value: '710506'
          },
          {
            name: '安平区',
            value: '710507'
          },
          {
            name: '中西区',
            value: '710508'
          },
          {
            name: '新营区',
            value: '710509'
          },
          {
            name: '盐水区',
            value: '710510'
          },
          {
            name: '白河区',
            value: '710511'
          },
          {
            name: '柳营区',
            value: '710512'
          },
          {
            name: '后壁区',
            value: '710513'
          },
          {
            name: '东山区',
            value: '710514'
          },
          {
            name: '麻豆区',
            value: '710515'
          },
          {
            name: '下营区',
            value: '710516'
          },
          {
            name: '六甲区',
            value: '710517'
          },
          {
            name: '官田区',
            value: '710518'
          },
          {
            name: '大内区',
            value: '710519'
          },
          {
            name: '佳里区',
            value: '710520'
          },
          {
            name: '学甲区',
            value: '710521'
          },
          {
            name: '西港区',
            value: '710522'
          },
          {
            name: '七股区',
            value: '710523'
          },
          {
            name: '将军区',
            value: '710524'
          },
          {
            name: '北门区',
            value: '710525'
          },
          {
            name: '新化区',
            value: '710526'
          },
          {
            name: '善化区',
            value: '710527'
          },
          {
            name: '新市区',
            value: '710528'
          },
          {
            name: '安定区',
            value: '710529'
          },
          {
            name: '山上区',
            value: '710530'
          },
          {
            name: '玉井区',
            value: '710531'
          },
          {
            name: '楠西区',
            value: '710532'
          },
          {
            name: '南化区',
            value: '710533'
          },
          {
            name: '左镇区',
            value: '710534'
          },
          {
            name: '仁德区',
            value: '710535'
          },
          {
            name: '归仁区',
            value: '710536'
          },
          {
            name: '关庙区',
            value: '710537'
          },
          {
            name: '龙崎区',
            value: '710538'
          },
          {
            name: '永康区',
            value: '710539'
          }
        ]
      },
      {
        name: '新竹市',
        value: '710600',
        subRegion: [
          {
            name: '东区',
            value: '710601'
          },
          {
            name: '北区',
            value: '710602'
          },
          {
            name: '香山区',
            value: '710603'
          }
        ]
      },
      {
        name: '嘉义市',
        value: '710700',
        subRegion: [
          {
            name: '东区',
            value: '710701'
          },
          {
            name: '西区',
            value: '710702'
          }
        ]
      },
      {
        name: '新北市',
        value: '710800',
        subRegion: [
          {
            name: '板桥区',
            value: '710801'
          },
          {
            name: '三重区',
            value: '710802'
          },
          {
            name: '中和区',
            value: '710803'
          },
          {
            name: '永和区',
            value: '710804'
          },
          {
            name: '新庄区',
            value: '710805'
          },
          {
            name: '新店区',
            value: '710806'
          },
          {
            name: '树林区',
            value: '710807'
          },
          {
            name: '莺歌区',
            value: '710808'
          },
          {
            name: '三峡区',
            value: '710809'
          },
          {
            name: '淡水区',
            value: '710810'
          },
          {
            name: '汐止区',
            value: '710811'
          },
          {
            name: '瑞芳区',
            value: '710812'
          },
          {
            name: '土城区',
            value: '710813'
          },
          {
            name: '芦洲区',
            value: '710814'
          },
          {
            name: '五股区',
            value: '710815'
          },
          {
            name: '泰山区',
            value: '710816'
          },
          {
            name: '林口区',
            value: '710817'
          },
          {
            name: '深坑区',
            value: '710818'
          },
          {
            name: '石碇区',
            value: '710819'
          },
          {
            name: '坪林区',
            value: '710820'
          },
          {
            name: '三芝区',
            value: '710821'
          },
          {
            name: '石门区',
            value: '710822'
          },
          {
            name: '八里区',
            value: '710823'
          },
          {
            name: '平溪区',
            value: '710824'
          },
          {
            name: '双溪区',
            value: '710825'
          },
          {
            name: '贡寮区',
            value: '710826'
          },
          {
            name: '金山区',
            value: '710827'
          },
          {
            name: '万里区',
            value: '710828'
          },
          {
            name: '乌来区',
            value: '710829'
          }
        ]
      },
      {
        name: '宜兰县',
        value: '712200',
        subRegion: [
          {
            name: '宜兰市',
            value: '712201'
          },
          {
            name: '罗东镇',
            value: '712221'
          },
          {
            name: '苏澳镇',
            value: '712222'
          },
          {
            name: '头城镇',
            value: '712223'
          },
          {
            name: '礁溪乡',
            value: '712224'
          },
          {
            name: '壮围乡',
            value: '712225'
          },
          {
            name: '员山乡',
            value: '712226'
          },
          {
            name: '冬山乡',
            value: '712227'
          },
          {
            name: '五结乡',
            value: '712228'
          },
          {
            name: '三星乡',
            value: '712229'
          },
          {
            name: '大同乡',
            value: '712230'
          },
          {
            name: '南澳乡',
            value: '712231'
          }
        ]
      },
      {
        name: '桃园县',
        value: '712300',
        subRegion: [
          {
            name: '桃园市',
            value: '712301'
          },
          {
            name: '中坜市',
            value: '712302'
          },
          {
            name: '平镇市',
            value: '712303'
          },
          {
            name: '八德市',
            value: '712304'
          },
          {
            name: '杨梅市',
            value: '712305'
          },
          {
            name: '大溪镇',
            value: '712321'
          },
          {
            name: '芦竹乡',
            value: '712323'
          },
          {
            name: '大园乡',
            value: '712324'
          },
          {
            name: '龟山乡',
            value: '712325'
          },
          {
            name: '龙潭乡',
            value: '712327'
          },
          {
            name: '新屋乡',
            value: '712329'
          },
          {
            name: '观音乡',
            value: '712330'
          },
          {
            name: '复兴乡',
            value: '712331'
          }
        ]
      },
      {
        name: '新竹县',
        value: '712400',
        subRegion: [
          {
            name: '竹北市',
            value: '712401'
          },
          {
            name: '竹东镇',
            value: '712421'
          },
          {
            name: '新埔镇',
            value: '712422'
          },
          {
            name: '关西镇',
            value: '712423'
          },
          {
            name: '湖口乡',
            value: '712424'
          },
          {
            name: '新丰乡',
            value: '712425'
          },
          {
            name: '芎林乡',
            value: '712426'
          },
          {
            name: '橫山乡',
            value: '712427'
          },
          {
            name: '北埔乡',
            value: '712428'
          },
          {
            name: '宝山乡',
            value: '712429'
          },
          {
            name: '峨眉乡',
            value: '712430'
          },
          {
            name: '尖石乡',
            value: '712431'
          },
          {
            name: '五峰乡',
            value: '712432'
          }
        ]
      },
      {
        name: '苗栗县',
        value: '712500',
        subRegion: [
          {
            name: '苗栗市',
            value: '712501'
          },
          {
            name: '苑里镇',
            value: '712521'
          },
          {
            name: '通霄镇',
            value: '712522'
          },
          {
            name: '竹南镇',
            value: '712523'
          },
          {
            name: '头份镇',
            value: '712524'
          },
          {
            name: '后龙镇',
            value: '712525'
          },
          {
            name: '卓兰镇',
            value: '712526'
          },
          {
            name: '大湖乡',
            value: '712527'
          },
          {
            name: '公馆乡',
            value: '712528'
          },
          {
            name: '铜锣乡',
            value: '712529'
          },
          {
            name: '南庄乡',
            value: '712530'
          },
          {
            name: '头屋乡',
            value: '712531'
          },
          {
            name: '三义乡',
            value: '712532'
          },
          {
            name: '西湖乡',
            value: '712533'
          },
          {
            name: '造桥乡',
            value: '712534'
          },
          {
            name: '三湾乡',
            value: '712535'
          },
          {
            name: '狮潭乡',
            value: '712536'
          },
          {
            name: '泰安乡',
            value: '712537'
          }
        ]
      },
      {
        name: '彰化县',
        value: '712700',
        subRegion: [
          {
            name: '彰化市',
            value: '712701'
          },
          {
            name: '鹿港镇',
            value: '712721'
          },
          {
            name: '和美镇',
            value: '712722'
          },
          {
            name: '线西乡',
            value: '712723'
          },
          {
            name: '伸港乡',
            value: '712724'
          },
          {
            name: '福兴乡',
            value: '712725'
          },
          {
            name: '秀水乡',
            value: '712726'
          },
          {
            name: '花坛乡',
            value: '712727'
          },
          {
            name: '芬园乡',
            value: '712728'
          },
          {
            name: '员林镇',
            value: '712729'
          },
          {
            name: '溪湖镇',
            value: '712730'
          },
          {
            name: '田中镇',
            value: '712731'
          },
          {
            name: '大村乡',
            value: '712732'
          },
          {
            name: '埔盐乡',
            value: '712733'
          },
          {
            name: '埔心乡',
            value: '712734'
          },
          {
            name: '永靖乡',
            value: '712735'
          },
          {
            name: '社头乡',
            value: '712736'
          },
          {
            name: '二水乡',
            value: '712737'
          },
          {
            name: '北斗镇',
            value: '712738'
          },
          {
            name: '二林镇',
            value: '712739'
          },
          {
            name: '田尾乡',
            value: '712740'
          },
          {
            name: '埤头乡',
            value: '712741'
          },
          {
            name: '芳苑乡',
            value: '712742'
          },
          {
            name: '大城乡',
            value: '712743'
          },
          {
            name: '竹塘乡',
            value: '712744'
          },
          {
            name: '溪州乡',
            value: '712745'
          }
        ]
      },
      {
        name: '南投县',
        value: '712800',
        subRegion: [
          {
            name: '南投市',
            value: '712801'
          },
          {
            name: '埔里镇',
            value: '712821'
          },
          {
            name: '草屯镇',
            value: '712822'
          },
          {
            name: '竹山镇',
            value: '712823'
          },
          {
            name: '集集镇',
            value: '712824'
          },
          {
            name: '名间乡',
            value: '712825'
          },
          {
            name: '鹿谷乡',
            value: '712826'
          },
          {
            name: '中寮乡',
            value: '712827'
          },
          {
            name: '鱼池乡',
            value: '712828'
          },
          {
            name: '国姓乡',
            value: '712829'
          },
          {
            name: '水里乡',
            value: '712830'
          },
          {
            name: '信义乡',
            value: '712831'
          },
          {
            name: '仁爱乡',
            value: '712832'
          }
        ]
      },
      {
        name: '云林县',
        value: '712900',
        subRegion: [
          {
            name: '斗六市',
            value: '712901'
          },
          {
            name: '斗南镇',
            value: '712921'
          },
          {
            name: '虎尾镇',
            value: '712922'
          },
          {
            name: '西螺镇',
            value: '712923'
          },
          {
            name: '土库镇',
            value: '712924'
          },
          {
            name: '北港镇',
            value: '712925'
          },
          {
            name: '古坑乡',
            value: '712926'
          },
          {
            name: '大埤乡',
            value: '712927'
          },
          {
            name: '莿桐乡',
            value: '712928'
          },
          {
            name: '林内乡',
            value: '712929'
          },
          {
            name: '二仑乡',
            value: '712930'
          },
          {
            name: '仑背乡',
            value: '712931'
          },
          {
            name: '麦寮乡',
            value: '712932'
          },
          {
            name: '东势乡',
            value: '712933'
          },
          {
            name: '褒忠乡',
            value: '712934'
          },
          {
            name: '台西乡',
            value: '712935'
          },
          {
            name: '元长乡',
            value: '712936'
          },
          {
            name: '四湖乡',
            value: '712937'
          },
          {
            name: '口湖乡',
            value: '712938'
          },
          {
            name: '水林乡',
            value: '712939'
          }
        ]
      },
      {
        name: '嘉义县',
        value: '713000',
        subRegion: [
          {
            name: '太保市',
            value: '713001'
          },
          {
            name: '朴子市',
            value: '713002'
          },
          {
            name: '布袋镇',
            value: '713023'
          },
          {
            name: '大林镇',
            value: '713024'
          },
          {
            name: '民雄乡',
            value: '713025'
          },
          {
            name: '溪口乡',
            value: '713026'
          },
          {
            name: '新港乡',
            value: '713027'
          },
          {
            name: '六脚乡',
            value: '713028'
          },
          {
            name: '东石乡',
            value: '713029'
          },
          {
            name: '义竹乡',
            value: '713030'
          },
          {
            name: '鹿草乡',
            value: '713031'
          },
          {
            name: '水上乡',
            value: '713032'
          },
          {
            name: '中埔乡',
            value: '713033'
          },
          {
            name: '竹崎乡',
            value: '713034'
          },
          {
            name: '梅山乡',
            value: '713035'
          },
          {
            name: '番路乡',
            value: '713036'
          },
          {
            name: '大埔乡',
            value: '713037'
          },
          {
            name: '阿里山乡',
            value: '713038'
          }
        ]
      },
      {
        name: '屏东县',
        value: '713300',
        subRegion: [
          {
            name: '屏东市',
            value: '713301'
          },
          {
            name: '潮州镇',
            value: '713321'
          },
          {
            name: '东港镇',
            value: '713322'
          },
          {
            name: '恒春镇',
            value: '713323'
          },
          {
            name: '万丹乡',
            value: '713324'
          },
          {
            name: '长治乡',
            value: '713325'
          },
          {
            name: '麟洛乡',
            value: '713326'
          },
          {
            name: '九如乡',
            value: '713327'
          },
          {
            name: '里港乡',
            value: '713328'
          },
          {
            name: '盐埔乡',
            value: '713329'
          },
          {
            name: '高树乡',
            value: '713330'
          },
          {
            name: '万峦乡',
            value: '713331'
          },
          {
            name: '内埔乡',
            value: '713332'
          },
          {
            name: '竹田乡',
            value: '713333'
          },
          {
            name: '新埤乡',
            value: '713334'
          },
          {
            name: '枋寮乡',
            value: '713335'
          },
          {
            name: '新园乡',
            value: '713336'
          },
          {
            name: '崁顶乡',
            value: '713337'
          },
          {
            name: '林边乡',
            value: '713338'
          },
          {
            name: '南州乡',
            value: '713339'
          },
          {
            name: '佳冬乡',
            value: '713340'
          },
          {
            name: '琉球乡',
            value: '713341'
          },
          {
            name: '车城乡',
            value: '713342'
          },
          {
            name: '满州乡',
            value: '713343'
          },
          {
            name: '枋山乡',
            value: '713344'
          },
          {
            name: '三地门乡',
            value: '713345'
          },
          {
            name: '雾台乡',
            value: '713346'
          },
          {
            name: '玛家乡',
            value: '713347'
          },
          {
            name: '泰武乡',
            value: '713348'
          },
          {
            name: '来义乡',
            value: '713349'
          },
          {
            name: '春日乡',
            value: '713350'
          },
          {
            name: '狮子乡',
            value: '713351'
          },
          {
            name: '牡丹乡',
            value: '713352'
          }
        ]
      },
      {
        name: '台东县',
        value: '713400',
        subRegion: [
          {
            name: '台东市',
            value: '713401'
          },
          {
            name: '成功镇',
            value: '713421'
          },
          {
            name: '关山镇',
            value: '713422'
          },
          {
            name: '卑南乡',
            value: '713423'
          },
          {
            name: '鹿野乡',
            value: '713424'
          },
          {
            name: '池上乡',
            value: '713425'
          },
          {
            name: '东河乡',
            value: '713426'
          },
          {
            name: '长滨乡',
            value: '713427'
          },
          {
            name: '太麻里乡',
            value: '713428'
          },
          {
            name: '大武乡',
            value: '713429'
          },
          {
            name: '绿岛乡',
            value: '713430'
          },
          {
            name: '海端乡',
            value: '713431'
          },
          {
            name: '延平乡',
            value: '713432'
          },
          {
            name: '金峰乡',
            value: '713433'
          },
          {
            name: '达仁乡',
            value: '713434'
          },
          {
            name: '兰屿乡',
            value: '713435'
          }
        ]
      },
      {
        name: '花莲县',
        value: '713500',
        subRegion: [
          {
            name: '花莲市',
            value: '713501'
          },
          {
            name: '凤林镇',
            value: '713521'
          },
          {
            name: '玉里镇',
            value: '713522'
          },
          {
            name: '新城乡',
            value: '713523'
          },
          {
            name: '吉安乡',
            value: '713524'
          },
          {
            name: '寿丰乡',
            value: '713525'
          },
          {
            name: '光复乡',
            value: '713526'
          },
          {
            name: '丰滨乡',
            value: '713527'
          },
          {
            name: '瑞穗乡',
            value: '713528'
          },
          {
            name: '富里乡',
            value: '713529'
          },
          {
            name: '秀林乡',
            value: '713530'
          },
          {
            name: '万荣乡',
            value: '713531'
          },
          {
            name: '卓溪乡',
            value: '713532'
          }
        ]
      },
      {
        name: '澎湖县',
        value: '713600',
        subRegion: [
          {
            name: '马公市',
            value: '713601'
          },
          {
            name: '湖西乡',
            value: '713621'
          },
          {
            name: '白沙乡',
            value: '713622'
          },
          {
            name: '西屿乡',
            value: '713623'
          },
          {
            name: '望安乡',
            value: '713624'
          },
          {
            name: '七美乡',
            value: '713625'
          }
        ]
      }
    ]
  },
  {
    name: '香港特别行政区',
    value: '810000',
    subRegion: [
      {
        name: '香港岛',
        value: '810100',
        subRegion: [
          {
            name: '中西区',
            value: '810101'
          },
          {
            name: '湾仔区',
            value: '810102'
          },
          {
            name: '东区',
            value: '810103'
          },
          {
            name: '南区',
            value: '810104'
          }
        ]
      },
      {
        name: '九龙',
        value: '810200',
        subRegion: [
          {
            name: '油尖旺区',
            value: '810201'
          },
          {
            name: '深水埗区',
            value: '810202'
          },
          {
            name: '九龙城区',
            value: '810203'
          },
          {
            name: '黄大仙区',
            value: '810204'
          },
          {
            name: '观塘区',
            value: '810205'
          }
        ]
      },
      {
        name: '新界',
        value: '810300',
        subRegion: [
          {
            name: '荃湾区',
            value: '810301'
          },
          {
            name: '屯门区',
            value: '810302'
          },
          {
            name: '元朗区',
            value: '810303'
          },
          {
            name: '北区',
            value: '810304'
          },
          {
            name: '大埔区',
            value: '810305'
          },
          {
            name: '西贡区',
            value: '810306'
          },
          {
            name: '沙田区',
            value: '810307'
          },
          {
            name: '葵青区',
            value: '810308'
          },
          {
            name: '离岛区',
            value: '810309'
          }
        ]
      }
    ]
  },
  {
    name: '澳门特别行政区',
    value: '820000',
    subRegion: [
      {
        name: '澳门半岛',
        value: '820100',
        subRegion: [
          {
            name: '花地玛堂区',
            value: '820101'
          },
          {
            name: '圣安多尼堂区',
            value: '820102'
          },
          {
            name: '大堂区',
            value: '820103'
          },
          {
            name: '望德堂区',
            value: '820104'
          },
          {
            name: '风顺堂区',
            value: '820105'
          }
        ]
      },
      {
        name: '氹仔岛',
        value: '820200',
        subRegion: [
          {
            name: '嘉模堂区',
            value: '820201'
          }
        ]
      },
      {
        name: '路环岛',
        value: '820300',
        subRegion: [
          {
            name: '圣方济各堂区',
            value: '820301'
          }
        ]
      }
    ]
  }
];
export default data;
