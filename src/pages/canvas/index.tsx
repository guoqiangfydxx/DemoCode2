/** @format */

import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';

// 绘制Reac是为了绘制文字，否则的话文字就无法正常显示了
const drawRect = (cnv: HTMLCanvasElement) => {
  const iWidth = cnv.width;
  const iHeight = cnv.height;
  const ctx = cnv.getContext('2d')!;
  ctx.fillStyle = 'rgb(150 138 138)';
  ctx.strokeStyle = '#fff';
  ctx.beginPath();

  ctx.moveTo(30, 20);
  ctx.lineTo(iWidth - 30, 20);
  ctx.lineTo(iWidth - 30, iHeight - 20);
  ctx.lineTo(30, iHeight - 20);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

const drawGrid = (cnv: HTMLCanvasElement) => {
  const gridOptions = {
    minorLines: {
      separation: 50,
      color: 'rgba(245,247,250,0.3)'
    }
  };

  drawGridLines(cnv, gridOptions.minorLines);
};

const drawGridLines = (cnv: HTMLCanvasElement, lineOptions: any) => {
  const iWidth = cnv.width;
  const iHeight = cnv.height;

  const ctx: any = cnv.getContext('2d')!;

  ctx.strokeStyle = lineOptions.color;
  ctx.strokeWidth = 1;

  ctx.beginPath();

  let iCount = null;
  let i = null;
  let x: any = null;
  let y: any = null;

  // icount = 7
  // 绘制纵线
  iCount = Math.floor((iWidth - 60) / lineOptions.separation);
  for (i = 1; i <= iCount; i++) {
    x = i * lineOptions.separation;
    ctx.moveTo(x + 30, 20);
    ctx.lineTo(x + 30, iHeight - 20);
    ctx.stroke();
    ctx.fillStyle = '#C4C5C6';
    ctx.font = '12px PingFangSC-Medium,PingFang SC';
    // fillText(text, x, y)，文本起点的X坐标，文本起点的y坐标
    ctx.fillText(x, x + 25, 10);
  }
  iCount = Math.floor(iHeight / lineOptions.separation);

  // 绘制横线
  for (i = 1; i <= iCount; i++) {
    y = i * lineOptions.separation;
    ctx.moveTo(30, y + 20);
    ctx.lineTo(iWidth - 30, y + 20);

    if (y % 100 === 0) {
      ctx.fillText(y, 0, y + 25);
    }
    ctx.stroke();
  }
  ctx.closePath();
};

interface Props {
  height: number;
}

const AxisLayer = ({ height = 667 }: Props) => {
  const cnv = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    drawRect(cnv.current!);
    drawGrid(cnv.current!);
  }, [height]);

  return (
    <canvas
      ref={cnv}
      className={styles.axis}
      width="435"
      height={height + 40}
    />
  );
};

export default AxisLayer;
