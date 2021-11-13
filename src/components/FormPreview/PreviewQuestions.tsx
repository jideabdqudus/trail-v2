import { Fragment } from 'react'

import Builder from './Builder'
interface Props{
    form: any
}
export const PreviewQuestions = ({form}: Props) => {
    const reverseForm=form?.components?.slice().reverse()
    return (
        <Fragment>
            {form?.components && reverseForm.map((content: any, id:number) => (
                Builder({content, id, isPreview:true})
            ))}
        </Fragment>
    )
}
