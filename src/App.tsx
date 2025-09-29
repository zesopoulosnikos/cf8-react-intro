// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx"
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";
// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
import Counter from "./components/Counter.tsx";

function App() {
    return (
        <>
            {/*<ViteIntro />*/}
            {/*<ClassComponent />*/}
            {/*<FunctionalComponent />*/}
            {/*<ArrowFunctionalComponent />*/}
            {/*<ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component With Props" />*/}
            {/*<ArrowFunctionalComponentWithProps title="2nd Title" />*/}
            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*  title="Is a Arrow Functional Component With 2 Props"*/}
            {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."*/}
            {/*/>*/}
            {/*<Card title="Card">*/}
            {/*  <ArrowFunctionalComponentWithPropsType*/}
            {/*    title="Is a Arrow Functional Component With 2 Props"*/}
            {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."*/}
            {/*  />*/}
            {/*</Card>*/}

            <Layout>
                {/*<ArrowFunctionalComponentWithPropsType*/}
                {/*  title="Is a Arrow Functional Component With 2 Props"*/}
                {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam."*/}
                {/*/>*/}

                {/*<FunctionalComponentWithState />*/}
                {/*<ClassComponentWithState />*/}

                <Counter />

            </Layout>
        </>
    )
}

export default App