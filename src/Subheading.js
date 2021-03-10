// const SubHeadingComponent = () => {
//     return <h2>This is Sparta!</h2>;
// }

const SubHeadingComponent = props => {
    return <h2>{props.num}</h2>;
}

export default SubHeadingComponent