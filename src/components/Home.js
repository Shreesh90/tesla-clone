import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="HELLOOOO"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-s.jpg"
            />
            <Section 
                title="Model 3"
                description="HELLOOOO"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-3.jpg"
            />
            <Section 
                title="Model X"
                description="HELLOOOO"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-x.jpg"
            />
            <Section 
                title="Model Y"
                description="HELLOOOO"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-y.jpg"
            />
            <Section 
                title="Solar Panel"
                description="HELLOOOO"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="solar-panel.jpg"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
 