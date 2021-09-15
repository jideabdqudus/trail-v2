import Builder from './Builder'

interface Props{
    form: any
}
export const PreviewQuestions = ({form}: Props) => {
    return (
        <>
            {form?.components?.map((content: any, id:number) => (
        Builder({content, id, isPreview:true})
        ))}
        </>
    )
}
