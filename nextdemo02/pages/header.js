import MyHeader from '../components/MyHeader'
import './../static/css.css'
import {Button} from 'antd'

export default () => (
  <>
    <MyHeader title="test" />
    <div>my name is jerry</div>
    <Button>我是按钮</Button>
  </>
)