import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

import CoffeeImg from "../assets/coffee.png"
import "../css/base.scss"

type Props = {
  location?: string,
  title?: string,
  children: React.ReactNode
}

const Layout = ({ location, title, children }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const rootPath = `${__PATH_PREFIX__}/`

  const onClickHandle = () => setIsActive(!isActive);

  useEffect(() => {
    library.add(faTwitter)
    library.add(faInstagram)
    library.add(faGithub)
    library.add(faFacebook)
    library.add(faYoutube)
  }, [])

  return (
    <div>
      <header className="container">
        <nav className="bd-navbar navbar is-spaced" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={CoffeeImg} alt="coffee" style={{ width: 28, height: 28 }} />
            </Link>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={() => onClickHandle()}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navMenuMore" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-end">
              <a className="navbar-item bd-navbar-icon" href="https://mobile.twitter.com/ComKoffee" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="navbar-item bd-navbar-icon" href="https://www.instagram.com/koffee.com0522/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="navbar-item bd-navbar-icon" href="https://www.facebook.com/ovamario.kouhei/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="navbar-item bd-navbar-icon" href="https://github.com/koffe0522" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {/* <a className="navbar-item bd-navbar-icon" href="https://qiita.com/ovama-koffee" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a> */}
              <a className="navbar-item bd-navbar-icon" href="https://qiita.com/ovama-koffee" target="_blank">
                Qiita
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero is-medium is-warning is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src={CoffeeImg} alt="coffee" style={{ width: 128, height: 128 }} />
              <h1 className="title is-1 is-family-sans-serif">KOFFEE TIME</h1>
              <h2 className="subtitle">Tech/Photo/Daliy</h2>
            </div>
          </div>
        </section>
        <section className="section">
          {
            location.pathname === rootPath ?
              <div className="has-text-centered">
                <h2 className="title is-2">記事一覧</h2>
              </div> : null
          }
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">{children}</div>
          </div>

        </section>
      </main>
      <footer className="footer">
        <div className="content has-text-centered">
          © {new Date().getFullYear()}, Built with
        {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

Layout.defaultProps = {
  location: "/",
  title: "home",
  children: <div />
}

export default Layout
