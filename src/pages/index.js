import React from "react"
import styled from '@emotion/styled'

import Layout from "../components/layout"

export const Code = styled.code`
  position: relative;
  display: block;
  background: transparent;
  margin: 0 auto;
  max-width: 300px;
  mix-blend-mode: color-burn;

  a {
    font-size: 32px;
    text-decoration: none;
  }
`

const IndexPage = () => (
  <Layout>
    <Code>
      <a rel="noopener noreferrer" target="_blank" href="https://ruggable.com/products/serenata-ash-grey?variant=12758312222775" title="Open me"><span role="img" aria-label="gift">🎁</span></a><br/>
      ⊂_ヽ<br/>
      　 ＼＼ <a rel="noopener noreferrer" target="_blank" href="https://ruggable.com/products/domo-sage-rug?variant=14115217965111" title="Doff me"><span role="img" aria-label="gift">🎩</span></a><br/>
      　　 ＼( ͡° ͜ʖ ͡°)<br/>
      　　　 >　⌒ヽ<br/>
      　　　/ 　 へ＼<br/>
      　　 /　　/　＼＼<a rel="noopener noreferrer" target="_blank" href="https://ruggable.com/products/serenata-slate-blue?variant=12758403842103" title="Eat me"><span role="img" aria-label="gift">🍰</span></a><br/>
      　　 ﾚ　ノ　　 ヽ_つ<br/>
      　　/　/<br/>
      　 /　/|<br/>
      　(　(ヽ<br/>
      　|　|、&nbsp;ヽ<a rel="noopener noreferrer" target="_blank" href="https://ruggable.com/products/crosshatch-natural?variant=12758466920503" title="Open me"><span role="img" aria-label="gift">🎁</span></a><br/>
      　| 丿 ＼ &nbsp;⌒)<br/>
      　| |　　) /<br/>
      &nbsp;ノ )　　Lﾉ<br/>
      (_／#tada<br/>
    </Code>
  </Layout>
)

export default IndexPage
