// const HeadingComponent = () => {
//     let firstWords = 'Hello World D:'
//     return <h1>This is my {firstWords} in my HeadingComponent!</h1>;
// }

const HeadingComponent = props => {
    return <h1>{props.h1Text}</h1>;
}

export default HeadingComponent;