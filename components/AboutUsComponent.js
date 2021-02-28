import React from "react";

const AboutUsComponent = (props)=>{
    return(
        <div className="container">
            <h1 className="display-4 mt-3 text-center">Issue Tracker App</h1>

            <div className="embed-responsive embed-responsive-21by9">
                <iframe className="embed-responsive-item" title="about" src="https://youtube.com/embed/s3rHxgKI97s4" allowFullScreen></iframe>
            </div>
            
        </div>
    );
}
export default AboutUsComponent;