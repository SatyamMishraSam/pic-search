import React from 'react';
class ImageCard extends React.Component{

    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef(); //it's document.querSelector
    }

    componentDidMount() {
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight); // images's actual hiegth to display
        // but the above lone wont show exact height bcz of loading so..
        
        
        this.imageRef.current.addEventListener('load', this.setSpans); //now it will load the images
    }

    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight); //now we can see the actual height of image
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({  spans });
    
    }

    render() {
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}` }}>
                <img ref={this.imageRef } alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;
