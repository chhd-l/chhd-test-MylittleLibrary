import React, { Component } from 'react';

interface State {
    name: string,
    divState: number,
    divClick: any
}
export const dechajzafs = (heigth?: number) => {
    return (WarpperComponent: any) => {
        return class extends Component<any, State> {

            public state: State = {
                name: '',
                divState: 1,
                divClick: (e: any) => {
                    console.log('e', e.target.innerText)
                    this.setState({
                        divState: Number(e.target.innerText)
                    })
                }
            }

            componentWillUnmount() {
                let userName = 'myName'
                this.setState({
                    name: userName
                })
            }

            render(): React.ReactNode {
                return (
                    <div>
                        <WarpperComponent name={this.state.name} {...this.props} />
                        <p>身高为{heigth}</p>
                        <div onClick={this.state.divClick}>
                            <div style={{ backgroundColor: this.state.divState === 1 ? 'red' : '' }}>1</div>
                            <div style={{ backgroundColor: this.state.divState === 2 ? 'red' : '' }}>2</div>
                            <div style={{ backgroundColor: this.state.divState === 3 ? 'red' : '' }}>3</div>
                            <div style={{ backgroundColor: this.state.divState === 4 ? 'red' : '' }}>4</div>
                        </div>
                    </div>
                )
            }

        }
    }
}

export default dechajzafs