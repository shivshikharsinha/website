import React from 'react'
import './style.css'
import logo from '../../vectors/logo.svg'
import github from '../../vectors/github.svg'
import versionControl from '../../vectors/version-control.svg'
import designFeedback from '../../vectors/design_feedback.svg'
import realTime from '../../vectors/real-time.svg'
import ThemeContext from '../../theme'
import 'aos/dist/aos.css'

class IndexPage extends React.Component {
  componentDidMount () {
    import('typed.js').then((TypedModule) => {
      const Typed = TypedModule.default
      const typed = new Typed('#typed', {
        stringsElement: '#head-description',
        typeSpeed: 30
      })
      return typed
    })
    import('aos').then((AosModule) => {
      AosModule.init()
    })
  }

  render () {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <div className={theme === 'light' ? 'index-page' : 'index-page dark'}>
            <div className='container'>
              <div className='landing'>
                <div className='smoketrees'>
                  <img alt='' src={logo} style={{ cursor: 'pointer' }} onClick={toggleTheme} />
                </div>
                <div className='head ' id='head-description'>
                  <p>We are a <span className='digital'>digital agency</span> <br />based on <span className='technology'>technology</span></p>
                  {/* <div className='btn'>
                                Explore
                            </div> */}
                </div>
                <span id='typed' />
              </div>
              <div className='tag' data-aos='fade-up'>We’re <span className='reinventing'>reinventing</span> offshore energy through sustainable, cutting-edge technology.</div>
              <div className='container-basic'>
                <div className='description'>
                  <h1>GitHub</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vitae malesuada bibendum quam aliquam. At dolor, sit eget commodo neque, accumsan nec volutpat. Sit posuere non mi duis id. </p>
                  <div className='btn'>
                    <div className='elements'>
                      <img className='index-github-logo' src={github} alt='' />
                      <div className='git'>
                                        GitHub
                      </div>
                    </div>
                  </div>
                </div>
                <div className='logo-svg'>
                  <img alt='' src={versionControl} />
                </div>
              </div>
              <div className='container-basic'>
                <div className='logo-svg'>
                  <img alt='' src={designFeedback} />
                </div>
                <div className='description alter'>
                  <div>
                    <h1>Main Projects</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vitae malesuada bibendum quam aliquam. At dolor, sit eget commodo neque, accumsan nec volutpat. Sit posuere non mi duis id. </p>
                  </div>
                  <div className='btn'>
                    <div className='elements'>
                      <div className='git'>
                                        Know More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container-basic'>
                <div className='description'>
                  <h1>Clients</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vitae malesuada bibendum quam aliquam. At dolor, sit eget commodo neque, accumsan nec volutpat. Sit posuere non mi duis id. </p>
                  <p
                    style={{
                      fontSize: '1.1em',
                      fontWeight: 'bold',
                      textAlign: 'right',
                      paddingRight: '20%',
                      boxSizing: 'border-box'
                    }}
                  >-Name
                  </p>
                </div>
                <div className='logo-svg'>
                  <img alt='' src={realTime} />
                </div>
              </div>
              <div className='container-basic'>
                <div className='logo-svg'>
                  <img alt='' src={designFeedback} />
                </div>
                <div className='description alter'>
                  <div>
                    <h1>Main Projects</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vitae malesuada bibendum quam aliquam. At dolor, sit eget commodo neque, accumsan nec volutpat. Sit posuere non mi duis id. </p>
                  </div>
                  <div className='btn '>
                    <div className='elements'>
                      <div className='git'>
                                        Know More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default IndexPage
