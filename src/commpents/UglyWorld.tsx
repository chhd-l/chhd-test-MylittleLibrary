import React, { Component } from 'react';
import dechajzafs from "../Hoc/hoc01";

interface Props {
    name?: string
}

@dechajzafs(180)
class UglyWorld extends Component<Props, any> {
    render(): React.ReactNode {
        return (
            <div>bye ugly world name is {this.props.name}</div>
        )
    }
}

export default UglyWorld