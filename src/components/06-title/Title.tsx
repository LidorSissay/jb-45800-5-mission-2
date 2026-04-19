import './Title.css'

interface TitleProps {
    title: string
}
const Title = (props: TitleProps) => {
    const { title } = props
    return (
        <div className="Title">
            <h1>{title}</h1>
        </div>
    )
}
export default Title