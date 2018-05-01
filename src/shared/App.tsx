import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu';
import { About, Home, Posts } from '../pages/index.async';


interface Props {

}

interface State {
    SplitMe: () => JSX.Element;
}

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    public render() {
        let SplitMe;
        if (this.state) {
            SplitMe = this.state.SplitMe;
        }
        
        return (
            <div>
                <Menu />
                {SplitMe && <SplitMe /> /*유효하면 띄워 줌.*/}
                <button onClick={this.showSplitMe}>ClickMe</button>
                <Route exact={true} path="/" component={Home} />
                <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
                <Route path="/posts" component={Posts} />
            </div>
        );
    }

    private showSplitMe = () => {
        import('../components/SplitMe').then(({ default: Component }) => {
            this.setState({
                SplitMe: Component
            })
        })
    }

}

export default App;