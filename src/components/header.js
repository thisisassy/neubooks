import React from "react"
import { Link } from "gatsby"

export default () => (
  <header className="l-header">
    <div className="l-header__inner">
      <h1><Link to={`/`}>Neubooks</Link></h1>
      <nav className="l-globalNav">
        <ul>
          <li className="l-globalNav__item"><Link to={`/news/`}>news</Link></li>
          <li className="l-globalNav__item"><Link to={`/about/`}>about</Link></li>
          <li className="l-globalNav__item"><Link to={`/books`}>books</Link></li>
          <li className="l-globalNav__item"><a href="https://neubooks.stores.jp/" target="_new" rel="noreferer">store<span>↗︎</span></a></li>
          <li className="l-globalNav__item"><Link to={`/contact/`}>contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)