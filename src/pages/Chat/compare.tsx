import React from 'react'
import { Chart, Line, Point, Tooltip, Legend } from 'bizcharts';
import { data } from './mock'

const scale = {
	rate: { min: 0 },
	// businessLine: {
	// 	formatter: (v: string | number) => {
	// 		return {
	// 			London: '伦敦',
	// 			Tokyo: '东京'
	// 		}[v]
	// 	}
	// }
}

function Demo() {
	return <Chart scale={scale} padding={[30, 20, 60, 40]} autoFit height={'50vh'} data={data} interactions={['element-active']}>
		<Point position="time*rate" color="businessLine" shape='circle' />
		<Line shape="smooth" position="time*rate" color="businessLine" label="rate" />
		<Tooltip shared showCrosshairs />
		<Legend background={{
			padding:[5,500,5,36],
			style: {
				fill: '#eaeaea',
				stroke: '#fff'
			}
		}} />
	</Chart>
}
export default Demo