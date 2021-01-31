import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../less/index.less"

export default ({ data, location }) => (
  <Layout>
    <SEO
      pagetitle="Neubooksについて"
      pagepath={location.pathname} />
    <section>
      <p className="lead">
        Neubooksは店舗を持たない本屋です。現在はネットショップを軸に書籍（蔵書）の販売を行っています。販売のほかに、ZINEなどのリトルプレスを制作しています。<br />
      "Neu"はドイツ語で新しいという意味です。街の本屋が失われたこの街で本を通して世界を広げるための新しいコミュニティの場をつくりたいです。<br />現在はオンラインストアをメインに活動しています。
    </p>
    </section>
  </Layout>
)