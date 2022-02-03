
class Update {
    constructor(component) {
        this.component = component
        this.dirtyComponets = []
    }
    addState() {
        
    }
}
class Component {
    constructor(props) {
        this.props = props
    }
    createDOMFromDOMString(domString) {
        let div = document.createElement('div');
        div.innerHTML = domString;
        return div.children[0];
    }

    setState(partialState) {
        this.state = Object.assign(this.state, partialState)
        let oldElement = this.domElement;
        let newElement = this.render();
        oldElement.parentElement.replaceChild(newElement, oldElement)
    }

    renderElement() {
        let htmlString = this.render();
        this.domElement = this.createDOMFromDOMString(htmlString)
        // 将Counter的组件实例放在component上
        this.domElement.component = this
        return this.domElement;
    }

    mount(container) {
        container.appendChild(this.renderElement())
    }
}


window.trigger = function(event, method,  ...others) {
    event.target.component[method].call(event.target.component, event, ...others)
}
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {number: 0}
    }

    add() {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        return `<button onclick-="trigger(event, add)">
        
            ${this.props.name}: ${this.state.number}
        </button>
        `
    }
}