import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Xiaojiejie = ({ router, data, list }) => (
  <>
    <div>{router.query.name}为您服务</div>
    <div><Link href="/"><a>返回首页</a></Link></div>
    <div>{data}</div>
    <div>{list}</div>
  </>
)

Xiaojiejie.getInitialProps = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({data: 'data', list: [1,2,3]})
    }, 3000)
  })
}

export default withRouter(Xiaojiejie)