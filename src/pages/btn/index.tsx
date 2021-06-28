import React, { Fragment, useCallback, useState } from 'react'
import { Button } from 'antd'
function TestBtn() {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount(count => count + 1)
    }, [])

    return (
        <Fragment>
            <Button onClick={handleClick}>Click me</Button>
            <p>you have clicked {count} times</p>
        </Fragment>
    )
}
export default TestBtn