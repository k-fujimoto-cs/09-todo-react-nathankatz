(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(8),i=a.n(s),d=a(9),c=a(2),r=a(3),p=a(6),u=a(4),l=a(5),h=a(1),b=(a(15),a(17),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={completed:a.props.completed},a.completeTodo=a.completeTodo.bind(Object(h.a)(Object(h.a)(a))),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"completeTodo",value:function(e){var t=e.target.parentNode.id,a=this,o=new XMLHttpRequest;o.onreadystatechange=function(){4==this.readyState&&200==this.status?a.setState({completed:!0}):4==this.readyState&&console.log(this.responseText)},o.open("PUT","https://api.kraigh.net/todos/"+t,!0),o.setRequestHeader("Content-type","application/json"),o.setRequestHeader("x-api-key","ce717a44505a015565790b36630db8c11e097e4a8ab2af890880f9a502b8758e"),o.send(JSON.stringify({completed:!0}))}},{key:"render",value:function(){var e="todo";return this.state.completed&&(e="todo completed"),n.a.createElement("div",{id:this.props.id,className:e},n.a.createElement("button",{className:"check",onClick:this.completeTodo}),n.a.createElement("p",null,this.props.text),n.a.createElement("button",{className:"delete",onClick:this.props.deleteTodo},"-"))}}]),t}(o.Component)),f=(a(19),function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",{id:"new-entry",onSubmit:this.props.addTodo},n.a.createElement("input",{type:"text",id:"newText",placeholder:"New ToDo...",value:this.props.input,onChange:this.props.onChange}),n.a.createElement("button",{type:"submit",onSubmit:this.props.addTodo,id:"submit"},"ADD")))}}]),t}(o.Component)),m=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={todos:[],input:""},a.addTodo=a.addTodo.bind(Object(h.a)(Object(h.a)(a))),a.onChange=a.onChange.bind(Object(h.a)(Object(h.a)(a))),a.deleteTodo=a.deleteTodo.bind(Object(h.a)(Object(h.a)(a))),a.sortTodo=a.sortTodo.bind(Object(h.a)(Object(h.a)(a))),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"addTodo",value:function(e){var t=this;e.preventDefault();var a={text:this.state.input},o=new XMLHttpRequest;o.onreadystatechange=function(){4==this.readyState&&200==this.status?t.setState({todos:Object(d.a)(t.state.todos).concat([JSON.parse(this.responseText)])}):4==this.readyState&&console.log(this.responseText)},o.open("POST","https://api.kraigh.net/todos",!0),o.setRequestHeader("Content-type","application/json"),o.setRequestHeader("x-api-key","ce717a44505a015565790b36630db8c11e097e4a8ab2af890880f9a502b8758e"),o.send(JSON.stringify(a)),this.setState({input:""})}},{key:"onChange",value:function(e){this.setState({input:e.target.value})}},{key:"deleteTodo",value:function(e){var t=e.target.parentNode.id,a=this,o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=a.state.todos.filter(function(e){if(e.id!==t)return e});a.setState({todos:e})}else 4==this.readyState&&console.log(this.responseText)},o.open("DELETE","https://api.kraigh.net/todos/"+t,!0),o.setRequestHeader("Content-type","application/json"),o.setRequestHeader("x-api-key","ce717a44505a015565790b36630db8c11e097e4a8ab2af890880f9a502b8758e"),o.send()}},{key:"sortTodo",value:function(e){console.log("hi");var t=this.state.todos;t.sort(function(e,t){return e.text.localeCompare(t.text)}),this.setState({todos:t})}},{key:"render",value:function(){var e=this;return n.a.createElement("section",{id:"todos"},n.a.createElement(f,{addTodo:this.addTodo,onChange:this.onChange,updateTodo:this.updateTodo,input:this.state.input}),n.a.createElement("button",{onClick:this.sortTodo,id:"submit"}," Sort "),this.state.todos.map(function(t){return n.a.createElement(b,{key:t.id,id:t.id,completed:t.completed,text:t.text,deleteTodo:e.deleteTodo})})," ")}},{key:"componentDidMount",value:function(){var e=this,t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var a=JSON.parse(t.responseText);e.setState({todos:a}),console.log(a)}},t.open("GET","https://api.kraigh.net/todos",!0),t.setRequestHeader("x-api-key","ce717a44505a015565790b36630db8c11e097e4a8ab2af890880f9a502b8758e"),t.send()}}]),t}(o.Component);i.a.render(n.a.createElement(m,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.d7ed5dfe.chunk.js.map