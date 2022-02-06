import { Component } from "react";
import withLogger from "./withLogger";

 class Logger extends Component {

    render() {
        return (
            <div>
                Logger
            </div>
        )
    }
}

export default withLogger(Logger)