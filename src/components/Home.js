import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animation: true
        }
    }

    componentDidMount() {
        if (window.sessionStorage.getItem("homeFirstLoad") === null) {
            this.setState({
                animation: true
            })
            window.sessionStorage.setItem("homeFirstLoad", 1)
        } else {
            this.setState({
                animation: false
            })
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.animation ? "container font-big" : "container font-big"}>
                    <div className="row mb-5">
                        <div className="col-12">
                            <h1 className="display-4">Welcome.</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-7">
                            <p>My name is Adam Foot, and I am a recent Computing BSc graduate. I attended the University
                                of
                                Plymouth (UOP) between the years of 2016-2020. During my time at UOP I decided to take
                                part in a year in industry where I was lucky enough to land a position with British
                                Telecom based in
                                Cardiff, Wales. After I graduated, I was offered a place at BT on their 2-year graduate
                                scheme of
                                which I accepted. I am currently working on adding security to BT & EE's Mobile Network
                                platforms.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-7">
                            <p>I really enjoy web development and utilising frameworks such as React and Angular. One
                                day I wish to
                                pursue a career in it and become a full stack web developer. Alongside this, I enjoy
                                learning new
                                languages. I am currently looking to widen my knowledge on Python and C# for games
                                development
                                within Unity.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-7">
                            <p>Aside from the software side of tech, I really enjoy building computers. I have had some
                                experience
                                with building my own PC and helped build friends and family members as well. I also
                                maintain several
                                Raspberry Pi devices that currently host a development server and a home media
                                server.</p>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-12 col-md-8 col-lg-7">
                            <p>Although I have a current full-time position as a Graduate Software Engineer, I would
                                love to hear
                                about any opportunities that I may be suitable for! So, if you have any work that fits
                                my criteria,
                                I would love to hear from you!</p>
                            <a href="mailto:adamfoot16&#64;gmail.com" className="text-decoration-none">
                                <button className="btn btn-info btn-block">Send
                                    me an email!
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="text-muted font-small">&#169; Copyright 2021 - Adam Foot</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;