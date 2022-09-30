import React from "react";
import './BookList.css';

export default class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            books:[] ,
            title: '',
            author: '',
            overview: '',
            }
    }
    //render後に自動で動作する
    componentDidMount(){
        fetch("/books")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.setState({
                books:json
            })
        });
    }
    //画面で何か入力された時の処理
    onInput = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }    
    //新規追加ボタン処理
    addBook = () => {
        const { title, author, overview } = this.state;
        const data = {title:title,author:author,overview:overview};
        //POSTする処理
        fetch("/books",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(json =>{
            console.log(json);
            this.componentDidMount();
        });
    }    
    render(){
        const { books } = this.state;
        return (
        <div>
            <div className="bookListMain">
                <div className="bookListHeader">
                タイトル：<input type="text" name="title" onChange={this.onInput} /><br />
                著者　　：<input type="text" name="author" onChange={this.onInput} /><br />
                概要　　：<textarea rows="3" cols="50" name="overview" onChange={this.onInput} /><br />
                　　　　　<button onClick={this.addBook} >追加</button>
                </div>
                <div className="bookListBody">
                    <table>
                        <tbody>
                        <tr>
                            <th>タイトル</th>
                            <th>著者</th>
                            <th>概要</th>
                        </tr>
                        {books.map((book,index) => 
                        <tr class="bookrow">
                            <td class="title">{book.title}</td>
                            <td class="author">{book.author}</td>
                            <td class="overview">{book.overview}</td>
                        </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}