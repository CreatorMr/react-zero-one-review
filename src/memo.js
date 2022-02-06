import { PureComponent } from "react";

export default function memo(FunctionComponent){
    class Proxy extends PureComponent {
        render() {
            // return <FunctionComponent {...this.props}/>
            return FunctionComponent(this.props)
            // 两种方式均可
        }
    }

    return Proxy
}