(this.webpackJsonp2=this.webpackJsonp2||[]).push([[0],{1:function(e,t,n){e.exports={form:"Phonebook_form__2quo_",label:"Phonebook_label__32eoR",input:"Phonebook_input__3IlPT",btn:"Phonebook_btn__n_0UP"}},14:function(e,t,n){e.exports={contact_list:"ContactList_contact_list__3d9bD"}},16:function(e,t,n){e.exports=n(22)},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),l=n(15),i=n(2),m=n(5),s=n(6),u=n(8),b=n(7),f=n(23),d=n(13),p=(n(21),n(3)),h=n.n(p),_=function(e){var t=e.name,n=e.number,a=e.onDelete;return c.a.createElement("div",{className:h.a.contact},c.a.createElement("p",{className:h.a.name},t),c.a.createElement("p",{className:h.a.number},n),c.a.createElement("button",{type:"button",onClick:a,className:h.a.btn},"Delete"))},v=n(14),E=n.n(v),C=function(e){var t=e.items,n=e.onDelete;return c.a.createElement("ul",{className:E.a.contact_list},t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(_,Object.assign({},e,{onDelete:function(){n(e.id)}})))})))},g=n(4),O=n(1),j=n.n(O),y={name:Object(f.a)(),number:Object(f.a)()},N=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.value,c=n.name;e.setState(Object(g.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(Object(i.a)({},e.state)),e.reset();var n=t.target.elements;n.name.value="",n.number.value=""},e.reset=function(){e.setState({name:"",number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit,className:j.a.form},c.a.createElement("label",{htmlFor:y.name,className:j.a.label},"Name",c.a.createElement("input",{type:"text",name:"name",placeholder:"Enter contact name...",id:y.name,onChange:this.handleChange,className:j.a.input})),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:y.number,className:j.a.label},"Number",c.a.createElement("input",{type:"text",name:"number",placeholder:"Enter contact number...",id:y.number,onChange:this.handleChange,className:j.a.input})),c.a.createElement("br",null),c.a.createElement("button",{type:"submit",className:j.a.btn},"Add contact"))}}]),n}(a.Component),S=n(9),k=n.n(S),F=Object(f.a)(),x=function(e){var t=e.onChangeFilter;return c.a.createElement("form",{className:k.a.form},c.a.createElement("label",{htmlFor:F},"Find contacts by name",c.a.createElement("input",{type:"text",id:F,onChange:t,className:k.a.input})))},D=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},w=new d.a,P=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){var n=t.name,a=t.number,c=e.state.contacts;if(n)if(parseFloat(a)){if(c.find((function(e){return e.name===n})))w.error("".concat(n," contact is allready exist"));else{var r=Object(i.a)(Object(i.a)({},t),{},{id:Object(f.a)()});e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[r])}})),w.success("".concat(n))}}else w.error("Enter number");else w.error("Enter name")},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.target.value})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");if(e){var t=JSON.parse(e);this.setState({contacts:t})}}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.contacts;n!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=D(t,n);return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(N,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(x,{onChangeFilter:this.changeFilter}),c.a.createElement(C,{items:a,onDelete:this.deleteContact}))}}]),n}(a.Component);o.a.render(c.a.createElement(P,null),document.querySelector("#root"))},3:function(e,t,n){e.exports={contact:"Contact_contact__1soaD",name:"Contact_name__-pll5",number:"Contact_number__2oNkX",btn:"Contact_btn__34lo2"}},9:function(e,t,n){e.exports={form:"ContactFilter_form__1ZvoH",input:"ContactFilter_input__1rxUc"}}},[[16,1,2]]]);
//# sourceMappingURL=main.adf4e93e.chunk.js.map