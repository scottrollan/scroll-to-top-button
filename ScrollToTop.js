
import React, { Component } from "react";

class ScrollToTop extends Component {

    className = "button"  //enter any className, i.e. any Bootstrap classes you want to apply

    styles = {
        padding: '3px 10px', //enter any button styling here
    }

    scrollUp = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    scrollFunction = () => {
        window.pageYOffset < 500 ?
        document.getElementById('scrollBtn').style.display="none" :
        document.getElementById('scrollBtn').style.display="inline";  }

    componentDidMount() {
        window.pageYOffset === 0 ?
        document.getElementById('scrollBtn').style.display="none" :
        document.getElementById('scrollBtn').style.display="inline";
        window.addEventListener('scroll', this.scrollFunction);
    };


    render() {
        return (
            <button
            onClick={this.scrollUp}
            id="scrollBtn"
            className={className}
            style={styles}
            title="Go to top"
            >
            Top
            </button>
    );
    }
  
}

export default ScrollToTop;
