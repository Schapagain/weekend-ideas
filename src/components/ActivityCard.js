
const ActivityCard = props => {
    const title = props.activity? props.activity.activity: null;
    return(
        <div className='activity-card'>
            {title? title: null}
        </div>
    )
}

export default ActivityCard;