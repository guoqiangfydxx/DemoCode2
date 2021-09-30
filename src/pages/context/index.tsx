/** @format */

import React, { useContext } from 'react';
const ThemeContext = React.createContext('dark');
const CounterContext = React.createContext(0);
const DateContext = React.createContext(0);

function ThemeButton() {
  return (
    <ThemeContext.Consumer>
      {(value) => <div>需要显示的主题色为：{value}</div>}
    </ThemeContext.Consumer>
  );
}

function CounterBtn() {
  const counter = useContext(CounterContext);
  const dater = useContext(DateContext);
  return (
    <div>
      counter的值为：{counter}
      <span>初始化的时间戳为： {dater}</span>
    </div>
  );
}

class TestDate extends React.Component<any, any> {
  render() {
    return <div>此时的时间戳的值为：{this.context}</div>;
  }
}
TestDate.contextType = DateContext;

function MyName({ name }: { name: string }) {
  return <div>the name is {name}</div>;
}

class TextContext extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: 'light',
      count: 0,
      date: new Date().getTime(),
      name: ''
    };
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };

  handleClick2() {
    this.setState({
      date: new Date().getTime()
    });
  }

  toggleTheme = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === 'light' ? 'dark' : 'light'
    });
  };

  handleChangeName = () => {
    const { name } = this.state;
    this.setState({
      name: name === '' ? 'tom' : ''
    });
  };

  render() {
    const { count, date, theme, name } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <CounterContext.Provider value={count}>
          <DateContext.Provider value={date}>
            <div className="container">
              <TestDate />
              <ThemeButton />
              <CounterBtn />
              <MyName name={name} />
              <button type="button" onClick={this.toggleTheme}>
                change theme
              </button>
              <button type="button" onClick={this.handleClick}>
                click me
              </button>
              <button type="button" onClick={this.handleClick2}>
                btn
              </button>
              <button type="button" onClick={this.handleChangeName}>
                change name
              </button>
              <p>这是一个静态的文本展示信息</p>
            </div>
          </DateContext.Provider>
        </CounterContext.Provider>
        <div>date: {date}</div>
      </ThemeContext.Provider>
    );
  }
}

export default TextContext;