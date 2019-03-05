import React from "react"
import {Grid, Cell} from "react-mdl"

class LandingPage extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className = "landing-grid">
                    <Cell col={12}>
                        <img 
                            src = "https://miro.medium.com/max/2400/1*3TXf_aPgXuqoSi4qBRJURA.jpeg"
                            alt = "avatar"
                            className = "avatar-img"
                            />

                            <div className="banner-text">
                                <h1>Full Stack Developer</h1>
                                <hr />
                                <p>
                                    Python | JavaScript | MongoDB | Express | React | NodeJS
                                </p>
                                <div className = "social-links">
                                    <a href = "https://www.linkedin.com/in/gopalakrishnanvenkatesh/" rel = "noopener noreferrer" target = "_blank">
                                        <i className = "fa fa-linkedin-square" aria-hidden="true" />
                                    </a>
                                    <a href = "https://github.com/venkateshgopalakrishnan" rel = "noopener noreferrer" target = "_blank">
                                        <i className = "fa fa-github-square" aria-hidden="true" />
                                    </a>
                                    <a href = "https://www.facebook.com/gsahasranaman" rel = "noopener noreferrer" target = "_blank">
                                        <i className = "fa fa-facebook-square" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default LandingPage