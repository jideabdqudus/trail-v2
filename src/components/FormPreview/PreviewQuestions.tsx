import { Fragment } from 'react'

import Builder from './Builder'
interface Props{
    form: any
}
export const PreviewQuestions = ({form}: Props) => {
    return (
        <Fragment>
            {form?.components?.map((content: any, id:number) => (
                Builder({content, id, isPreview:true})
            ))}
        </Fragment>
    )
}
