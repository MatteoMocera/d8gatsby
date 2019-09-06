import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
export const query = graphql`
  query {
    allNodePaginaAvanzata {
      edges {
        node {
          title
        }
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Ciao!</h1>
    <p>Questa è la prova di Gatsby per WDLab.</p>
    <p>Da adesso in poi, sviluppiamo cose serie.</p>
    <p>NUOVA RIGA INSERITA.</p>
    <p>{ data.allNodePaginaAvanzata.edges[0].node.title }</p>
    <p>{ data.allNodePaginaAvanzata.edges[0].node.title }</p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Vai alla seconda pagina</Link><br/>
    <Link to="/page-3/">Vai alla terza pagina</Link>
  </Layout>
)

export default IndexPage
