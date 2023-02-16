import classes from './SectionTitle.module.css'

const SectionTitle = (props) => {
    return (
        <>
            <hr />
            <h2 className={classes.title}>{props.title}</h2>
            <hr />
        </>
        
    )
}
export default SectionTitle