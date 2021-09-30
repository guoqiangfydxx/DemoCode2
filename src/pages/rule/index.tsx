/** @format */

// /** @format */

// import React from 'react';
// import Ruler from '@scena/react-ruler';
// export default class App extends React.Component {
//   ruler: any;

//   componentDidMount() {
//     this.ruler.resize();

//     window.addEventListener('resize', () => {
//       this.ruler.resize();
//     });
//   }

//   render() {
//     return (
//       <Ruler
//         type="horizontal"
//         ref={(e) => {
//           this.ruler = e;
//         }}
//       >
//         this is a test
//       </Ruler>
//     );
//   }
// }
import * as React from 'react';
import Guides from '@scena/react-guides';
import './index.scss';
const horizontalGuides1 = React.createRef<any>();
const zoom = 1;
let unit = 50;
if (zoom < 0.8) {
  unit = Math.floor(1 / zoom) * 50;
}
export default class App extends React.Component<any, any> {
  guides: any;

  state = {
    horizontalGuides: []
  };

  componentDidMount() {
    // this.guides.resize();
    // let scrollX = 0;
    // let scrollY = 0;
    // window.addEventListener('wheel', (e) => {
    //   scrollX += e.deltaX;
    //   scrollY += e.deltaY;
    //   this.guides.scrollGuides(scrollY);
    //   this.guides.scroll(scrollX);
    // });
    // window.addEventListener('resize', () => {
    //   this.guides.resize();
    // });
  }

  render() {
    const { horizontalGuides } = this.state;
    return (
      <Guides
        ref={horizontalGuides1}
        type="horizontal"
        // className={styles['scena-guides']}
        style={{}}
        snapThreshold={5}
        snaps={horizontalGuides}
        displayDragPos
        dragPosFormat={(v) => `${v}px`}
        zoom={zoom}
        unit={unit}
        onChangeGuides={(e) => {
          this.setState({
            horizontalGuides: e.guides
          });
        }}
      />
    );
  }
}
