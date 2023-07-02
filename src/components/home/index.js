import React from "react";
import { FormattedMessage } from "react-intl";

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1><FormattedMessage id="title" /></h1>
                <p>
                    <FormattedMessage id="Description" />
                </p>
            </div>
        )
    }
}
export default Home;