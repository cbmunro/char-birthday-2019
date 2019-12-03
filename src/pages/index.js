import React from "react"
import styled from '@emotion/styled'

import Layout from "../components/layout"

export const Code = styled.code`
  background: white;

  a {
    font-size: 32px;
    text-decoration: none;
  }
`

const IndexPage = () => (
  <Layout>
    <Code>
      <a target="_blank" href="https://ruggable.com/products/serenata-ash-grey?variant=12758312222775">🎁</a><br/>
      ⊂_ヽ<br/>
      　 ＼＼ <a target="_blank" href="https://ruggable.com/products/domo-sage-rug?variant=14115217965111">🎩</a><br/>
      　　 ＼( ͡° ͜ʖ ͡°)<br/>
      　　　 >　⌒ヽ<br/>
      　　　/ 　 へ＼<br/>
      　　 /　　/　＼＼<a target="_blank" href="https://ruggable.com/products/serenata-slate-blue?variant=12758403842103">🍰</a><br/>
      　　 ﾚ　ノ　　 ヽ_つ<br/>
      　　/　/<br/>
      　 /　/|<br/>
      　(　(ヽ<br/>
      　|　|、&nbsp;ヽ<a target="_blank" href="https://ruggable.com/products/crosshatch-natural?variant=12758466920503">🎁</a><br/>
      　| 丿 ＼ &nbsp;⌒)<br/>
      　| |　　) /<br/>
      &nbsp;ノ )　　Lﾉ<br/>
      (_／#tada<br/>
    </Code>
  </Layout>
)

export default IndexPage
