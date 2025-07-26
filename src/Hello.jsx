import './Hello.css';
export default function Hello({name,age=20}) {
    return (<>
    <h1>Hello {name} {age}</h1>
    <div id="email">email:korawit.o@ku.th</div>
    <div class="box yellow-bg">tel:0819967831</div>
    </>);
}