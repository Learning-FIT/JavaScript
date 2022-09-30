import React from 'react';

// export default function Hello(props){
//     return <div>こんにちは{props.name}さん！！</div>
// }


export default class Hello extends React.Component{
    render(){
        return <div>こんにちは{this.props.name}さん！！
        <br />クラスコンポーネントです！！</div>
    }
}

