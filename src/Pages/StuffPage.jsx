import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { exampleService } from '../Services/ExampleService.js';



function StuffPage()
{
    async function getExamples() 
    {
        try {
            await exampleService.getAllExamples();
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getExamples();
    }, []) // Variables in array will "React", run useEffect then, update webpage.

    return (
        <section>
            Stuff Page
        </section>
    )
}

export default observer(StuffPage);