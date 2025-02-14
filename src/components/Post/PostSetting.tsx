interface IPostSettingProps{
    onDeleteClick?:()=>void,
    onEditClick?:()=>void,
}

export const PostSetting = ({onEditClick, onDeleteClick}: IPostSettingProps) => {
    return(
        <div>
            <span onClick={onEditClick}>изменить</span>
            <span onClick={onDeleteClick}>удалить</span>
        </div>
    )
}